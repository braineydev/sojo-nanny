"use client";

import { useEffect, useRef, useState } from "react";
import { InquiryForm } from "@/components/InquiryForm";

export function ServiceCard({ title, body, hours, image, number, serviceType }: { title: string; body: string; hours: string; image: string; number: string; serviceType: string }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
  }, [open]);

  function openDialog() {
    setOpen(true);
  }

  return (
    <>
      <article className="service-card">
        <button className="service-card-trigger" type="button" aria-haspopup="dialog" aria-controls={`booking-dialog-${number}`} aria-label={`Ask about ${title}`} onClick={openDialog} />
        <div className="service-image" style={{ backgroundImage: `url('${image}')` }} role="img" aria-label={`${title} nanny care`}>
          <span className="service-number">{number}</span>
        </div>
        <div className="service-details">
          <p className="service-hours">{hours}</p>
          <h3>{title}</h3>
          <p className="service-body">{body}</p>
          <span className="service-link" aria-hidden="true">Ask about this care <span>↗</span></span>
        </div>
      </article>

      <dialog
        ref={dialogRef}
        id={`booking-dialog-${number}`}
        className="booking-dialog"
        aria-labelledby={`booking-dialog-title-${number}`}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="booking-dialog-heading">
          <div><p className="eyebrow">A good place to begin</p><h2 id={`booking-dialog-title-${number}`}>Ask about {title.toLowerCase()}.</h2></div>
          <button className="booking-dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close booking form">×</button>
        </div>
        {open && <div className="booking-form booking-dialog-form"><InquiryForm initialService={serviceType} /></div>}
      </dialog>
    </>
  );
}
