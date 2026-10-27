import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validators";
import { serverClient } from "@/lib/supabase";

// In-memory limiter: fine for one instance, swap for Upstash/Redis once traffic grows.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    return NextResponse.json({ success: false, message: "Too many requests. Please call us instead." }, { status: 429 });
  }
  hits.set(ip, [...recent, now]);

  const body = await req.json().catch(() => null);
  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }
  const { website, start_date, notes, ...rest } = parsed.data;
  if (website) return NextResponse.json({ success: true, inquiry_id: "ok" }, { status: 201 }); // bot: pretend success

  try {
    const { data, error } = await serverClient()
      .from("inquiries")
      .insert({ ...rest, start_date: start_date || null, notes: notes || null })
      .select("id")
      .single();
    if (error) throw error;
    return NextResponse.json(
      { success: true, message: "Inquiry received successfully. We will contact you shortly.", inquiry_id: data.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ success: false, message: "Something went wrong. Please call or WhatsApp us." }, { status: 500 });
  }
}
