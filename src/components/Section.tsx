import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-brand-amber">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-3 font-heading text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/75" : "text-brand-slate/80"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
