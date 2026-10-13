"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("VIEW");

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const current = target?.closest("[data-cursor]") as HTMLElement | null;
      const currentLabel = current?.dataset.cursor || "VIEW";

      if (currentLabel) {
        setLabel(currentLabel.toUpperCase());
        setActive(true);
      }
    };
    const handleOut = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("[data-cursor]")) {
        setActive(false);
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);
    document.querySelectorAll("[data-cursor]").forEach((el) => {
      el.addEventListener("pointerover", handleOver);
      el.addEventListener("pointerout", handleOut);
    });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      document.querySelectorAll("[data-cursor]").forEach((el) => {
        el.removeEventListener("pointerover", handleOver);
        el.removeEventListener("pointerout", handleOut);
      });
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <div
      className={`custom-cursor ${visible ? "visible" : ""} ${active ? "active" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px`, opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <span className="custom-cursor-label">{label}</span>
    </div>
  );
}
