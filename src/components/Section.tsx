import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        light ? "text-bronze-light" : "text-bronze-deep"
      }`}
    >
      <span
        aria-hidden
        className={`h-px w-8 ${light ? "bg-bronze-light/70" : "bg-bronze/70"}`}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-4 font-display text-[2.15rem] leading-[1.08] tracking-tight md:text-5xl lg:text-[3.35rem] ${
          light ? "text-parchment" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${
            light ? "text-parchment/70" : "text-charcoal/70"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function Hairline({ className = "" }: { className?: string }) {
  return <div className={`rule ${className}`} aria-hidden />;
}
