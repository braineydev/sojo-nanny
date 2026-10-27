"use client";
import { useState } from "react";
import { SERVICES, inquirySchema } from "@/lib/validators";

const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254704690779";
const call = process.env.NEXT_PUBLIC_CALL_NUMBER ?? "+254113781473";
type Form = { service_type: string; start_date: string; location: string; notes: string; client_name: string; phone_number: string; website: string };
const empty: Form = { service_type: "", start_date: "", location: "", notes: "", client_name: "", phone_number: "", website: "" };
const input = "mt-1 w-full min-h-12 rounded-xl border border-taupe/60 bg-white px-4 py-3";

export function InquiryForm({ initialService }: { initialService?: string } = {}) {
  const [step, setStep] = useState(1);
  const [f, setF] = useState<Form>({ ...empty, service_type: initialService ?? "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  function validate(fields: (keyof Form)[]) {
    const r = inquirySchema.safeParse(f);
    const errs: Record<string, string> = {};
    if (!r.success) for (const i of r.error.issues) { const k = String(i.path[0]); if (fields.includes(k as keyof Form)) errs[k] = i.message; }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function submit() {
    if (!validate(["client_name", "phone_number"])) return;
    setState("sending");
    try {
      const res = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      setState(res.ok ? "done" : "failed");
    } catch { setState("failed"); }
  }

  const summary = encodeURIComponent(
    `Hi Sojo Nanny, I'm ${f.client_name}. I'd like ${f.service_type}${f.start_date ? ` from ${f.start_date}` : ""} in ${f.location}.${f.notes ? ` ${f.notes}` : ""}`
  );

  if (state === "done")
    return (
      <div className="rounded-2xl bg-white p-6 text-center ring-1 ring-taupe/30" role="status" aria-live="polite">
        <h3 className="text-xl font-semibold">Thank you, {f.client_name.split(" ")[0]}</h3>
        <p className="mt-2">Your request has been sent to Sojo Nanny. You can also message us directly if you would like to add anything.</p>
        <a href={`https://wa.me/${wa}?text=${summary}`} className="mt-5 inline-block min-h-12 rounded-full bg-cocoa px-8 py-3 font-semibold text-cream">Chat on WhatsApp now</a>
      </div>
    );

  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-taupe/30">
      <p className="text-sm text-rose" aria-live="polite">Step {step} of 3</p>
      <div className="form-progress" role="progressbar" aria-label="Enquiry progress" aria-valuemin={1} aria-valuemax={3} aria-valuenow={step}><span style={{ width: `${(step / 3) * 100}%` }} /></div>
      {/* honeypot */}
      <input tabIndex={-1} autoComplete="off" aria-hidden className="hidden" value={f.website} onChange={set("website")} name="website" />
      {step === 1 && (
        <fieldset className="mt-3 space-y-3">
          <legend className="font-semibold">Which service do you need?</legend>
          {SERVICES.map((s) => (
            <label key={s} className={`flex min-h-12 items-center rounded-xl border px-4 ${f.service_type === s ? "border-cocoa bg-cream" : "border-taupe/60"}`}>
              <input type="radio" name="service" className="mr-3" checked={f.service_type === s} onChange={() => setF({ ...f, service_type: s })} />
              {s}
            </label>
          ))}
          {errors.service_type && <p role="alert" className="text-sm text-red-700">{errors.service_type}</p>}
        </fieldset>
      )}
      {step === 2 && (
        <div className="mt-3 space-y-4">
          <label className="block">Start date (optional)<input type="date" className={input} value={f.start_date} onChange={set("start_date")} /></label>
          <label className="block">Where do you need care?<input className={input} autoComplete="address-level2" placeholder="e.g. Nairobi, Kilimani" value={f.location} onChange={set("location")} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "location-error" : undefined} />
            {errors.location && <span id="location-error" role="alert" className="text-sm text-red-700">{errors.location}</span>}</label>
          <label className="block">Anything else we should know? (optional)<textarea rows={3} className={input} placeholder="Child's age, routine or particular needs" value={f.notes} onChange={set("notes")} /></label>
        </div>
      )}
      {step === 3 && (
        <div className="mt-3 space-y-4">
          <label className="block">Your name<input className={input} autoComplete="name" value={f.client_name} onChange={set("client_name")} aria-invalid={Boolean(errors.client_name)} aria-describedby={errors.client_name ? "name-error" : undefined} />
            {errors.client_name && <span id="name-error" role="alert" className="text-sm text-red-700">{errors.client_name}</span>}</label>
          <label className="block">Phone or WhatsApp<input type="tel" className={input} autoComplete="tel" placeholder="+254..." value={f.phone_number} onChange={set("phone_number")} aria-invalid={Boolean(errors.phone_number)} aria-describedby={errors.phone_number ? "phone-error" : undefined} />
            {errors.phone_number && <span id="phone-error" role="alert" className="text-sm text-red-700">{errors.phone_number}</span>}</label>
        </div>
      )}
      {state === "failed" && (
        <p role="alert" className="mt-4 text-sm text-red-700">
          That didn't go through. Please call <a className="underline" href={`tel:${call}`}>{call}</a> or <a className="underline" href={`https://wa.me/${wa}?text=${summary}`}>message us on WhatsApp</a>.
        </p>
      )}
      <div className="mt-6 flex gap-3">
        {step > 1 && <button type="button" onClick={() => setStep(step - 1)} className="min-h-12 rounded-full px-6 ring-1 ring-cocoa">Back</button>}
        {step < 3 ? (
          <button type="button" onClick={() => validate(step === 1 ? ["service_type"] : ["location"]) && setStep(step + 1)} className="min-h-12 flex-1 rounded-full bg-cocoa px-6 font-semibold text-cream">Next</button>
        ) : (
          <button type="button" onClick={submit} disabled={state === "sending"} className="min-h-12 flex-1 rounded-full bg-cocoa px-6 font-semibold text-cream disabled:opacity-60" aria-live="polite">
            {state === "sending" ? "Sending..." : "Send request"}
          </button>
        )}
      </div>
    </div>
  );
}
