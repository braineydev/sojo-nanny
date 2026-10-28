"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideoModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      void videoRef.current?.play().catch(() => undefined);
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const close = () => {
    videoRef.current?.pause();
    setOpen(false);
  };

  return (
    <>
      <button type="button" className="hero-primary" onClick={() => setOpen(true)}>
        Find the care you need <span aria-hidden="true">{"\u2197"}</span>
      </button>
      <dialog
        ref={dialogRef}
        className="intro-video-dialog"
        aria-labelledby="intro-video-title"
        onClose={() => setOpen(false)}
        onCancel={close}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="intro-video-heading">
          <div>
            <p className="eyebrow">A little introduction</p>
            <h2 id="intro-video-title">Find the care your family needs.</h2>
          </div>
          <button type="button" className="intro-video-close" onClick={close} aria-label="Close video">
            {"\u00d7"}
          </button>
        </div>
        <video
          ref={videoRef}
          className="intro-video-player"
          src="/ABOUT_SOJONANNY.MOV"
          controls
          playsInline
          preload="none"
          onEnded={close}
        >
          Your browser does not support video playback.
        </video>
        <p className="intro-video-caption">The video closes when it finishes. You can pause, resume, or close it at any time.</p>
      </dialog>
    </>
  );
}