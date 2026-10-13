"use client";

import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function MagneticButton({ children, className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const onMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const onLeave = () => {
    const button = ref.current;
    if (!button) return;
    button.style.transform = "translate(0, 0)";
  };

  return (
    <button ref={ref} className={`magnetic-button ${className}`.trim()} onMouseMove={onMove} onMouseLeave={onLeave} data-cursor="OPEN">
      {children}
    </button>
  );
}
