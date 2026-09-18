"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";
import { getFormspreeEndpoint, services, site } from "@/lib/site";
import { easeCraft } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

type Step = 1 | 2 | 3 | 4;

const budgets = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP / emergency",
  "Within 30 days",
  "1–3 months",
  "3–6 months",
  "Planning / exploring",
];

const stepLabels = ["Trade", "Details", "Budget", "Contact"];

export function EstimateForm() {
  const endpoint = useMemo(() => getFormspreeEndpoint(), []);
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const reduce = useReducedMotion();
  const [form, setForm] = useState({
    projectTypes: [] as string[],
    details: "",
    budget: "",
    timeline: "",
    propertyType: "Residential",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    company: "",
  });

  function toggleType(name: string) {
    setForm((f) => ({
      ...f,
      projectTypes: f.projectTypes.includes(name)
        ? f.projectTypes.filter((t) => t !== name)
        : [...f.projectTypes, name],
    }));
  }

  function canContinue() {
    if (step === 1) return form.projectTypes.length > 0;
    if (step === 2) return form.details.trim().length > 10;
    if (step === 3) return Boolean(form.budget && form.timeline);
    if (step === 4)
      return (
        form.firstName.trim() &&
        form.lastName.trim() &&
        form.email.trim() &&
        form.phone.trim()
      );
    return false;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canContinue()) return;
    setStatus("submitting");
    setErrorMsg("");

    const payload = {
      _subject: `Project estimate — ${form.projectTypes.join(", ")}`,
      projectTypes: form.projectTypes.join(", "),
      details: form.details,
      budget: form.budget,
      timeline: form.timeline,
      propertyType: form.propertyType,
      firstName: form.firstName,
      lastName: form.lastName,
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      phone: form.phone,
      address: form.address,
      company: form.company,
      source: "masterfix-redesign-test",
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Unable to submit right now.");
      }
      setStatus("success");
      if (typeof window !== "undefined") {
        console.info("[lead] estimate_submitted", { types: form.projectTypes });
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2px] border border-ink/10 bg-paper p-8 md:p-10"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
          Received
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink">Request received</h2>
        <p className="mt-4 text-charcoal/75">
          Thank you. Our team will review your project details and follow up shortly. Prefer to
          talk now? Call{" "}
          <a className="font-semibold text-ink underline decoration-bronze/60" href={site.phoneHref}>
            {site.phone}
          </a>{" "}
          or{" "}
          <a
            className="font-semibold text-ink underline decoration-bronze/60"
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            book a consultation
          </a>
          .
        </p>
      </motion.div>
    );
  }

  const progress = ((step - 1) / 3) * 100;

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2px] border border-ink/10 bg-paper p-6 shadow-[0_20px_60px_rgba(7,21,37,0.06)] md:p-9"
      noValidate
    >
      <div className="mb-2 flex items-center justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">
          Step {step} of 4 · {stepLabels[step - 1]}
        </p>
        <p className="text-[11px] uppercase tracking-[0.16em] text-charcoal/40">
          {Math.round(progress)}%
        </p>
      </div>
      <div className="mb-8 h-px overflow-hidden bg-ink/10">
        <motion.div
          className="h-full bg-bronze"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: easeCraft }}
        />
      </div>

      <div className="mb-8 flex gap-2" aria-label={`Step ${step} of 4`}>
        {([1, 2, 3, 4] as Step[]).map((s) => (
          <div key={s} className="flex flex-1 flex-col gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold transition ${
                s <= step ? "bg-ink text-parchment" : "bg-parchment-deep text-charcoal/40"
              }`}
            >
              {s}
            </div>
            <span className="hidden text-[10px] uppercase tracking-[0.14em] text-charcoal/45 sm:block">
              {stepLabels[s - 1]}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -12 }}
          transition={{ duration: 0.35, ease: easeCraft }}
        >
          {step === 1 && (
            <fieldset>
              <legend className="font-display text-2xl text-ink md:text-3xl">
                What kind of project?
              </legend>
              <p className="mt-2 text-sm text-charcoal/60">Select all that apply.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.map((s) => {
                  const on = form.projectTypes.includes(s.name);
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => toggleType(s.name)}
                      className={`min-h-14 rounded-[2px] border px-4 py-3 text-left text-sm font-medium transition ${
                        on
                          ? "border-bronze bg-bronze/15 text-ink"
                          : "border-ink/12 hover:border-ink/35"
                      }`}
                      aria-pressed={on}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset>
              <legend className="font-display text-2xl text-ink md:text-3xl">
                Tell us about the work
              </legend>
              <label className="mt-6 block text-sm font-medium text-ink" htmlFor="details">
                Project details
              </label>
              <textarea
                id="details"
                required
                rows={6}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="mt-2 w-full rounded-[2px] border border-ink/15 bg-parchment px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
                placeholder="Scope, address context, materials preferences, access notes…"
              />
              <p className="mt-3 text-xs text-charcoal/50">
                Photo uploads can be emailed to {site.estimatesEmail} after you submit — mention
                your name in the subject line.
              </p>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset>
              <legend className="font-display text-2xl text-ink md:text-3xl">
                Budget & timeline
              </legend>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-ink">Estimated budget</p>
                  <div className="mt-3 space-y-2">
                    {budgets.map((b) => (
                      <label
                        key={b}
                        className="flex min-h-11 cursor-pointer items-center gap-3 text-sm"
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={b}
                          checked={form.budget === b}
                          onChange={() => setForm({ ...form, budget: b })}
                          className="size-4 accent-ink"
                        />
                        {b}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Desired timeline</p>
                  <div className="mt-3 space-y-2">
                    {timelines.map((t) => (
                      <label
                        key={t}
                        className="flex min-h-11 cursor-pointer items-center gap-3 text-sm"
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={t}
                          checked={form.timeline === t}
                          onChange={() => setForm({ ...form, timeline: t })}
                          className="size-4 accent-ink"
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <label
                className="mt-6 block text-sm font-medium text-ink"
                htmlFor="propertyType"
              >
                Property type
              </label>
              <select
                id="propertyType"
                value={form.propertyType}
                onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                className="mt-2 w-full rounded-[2px] border border-ink/15 bg-parchment px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Multi-family</option>
                <option>Other / GC subcontract</option>
              </select>
            </fieldset>
          )}

          {step === 4 && (
            <fieldset>
              <legend className="font-display text-2xl text-ink md:text-3xl">
                Contact details
              </legend>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {(
                  [
                    ["firstName", "First name", "text"],
                    ["lastName", "Last name", "text"],
                    ["email", "Email", "email"],
                    ["phone", "Phone", "tel"],
                  ] as const
                ).map(([id, label, type]) => (
                  <div key={id}>
                    <label className="text-sm font-medium" htmlFor={id}>
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required
                      value={form[id]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="mt-1 w-full rounded-[2px] border border-ink/15 bg-parchment px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium" htmlFor="address">
                    Project address (optional)
                  </label>
                  <input
                    id="address"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="mt-1 w-full rounded-[2px] border border-ink/15 bg-parchment px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium" htmlFor="company">
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="mt-1 w-full rounded-[2px] border border-ink/15 bg-parchment px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
                  />
                </div>
              </div>
            </fieldset>
          )}
        </motion.div>
      </AnimatePresence>

      {status === "error" ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {errorMsg || "Something went wrong. Please call us or try again."}
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <Button
          type="button"
          variant="secondary"
          disabled={step === 1 || status === "submitting"}
          onClick={() => setStep((s) => (s > 1 ? ((s - 1) as Step) : s))}
        >
          Back
        </Button>
        {step < 4 ? (
          <Button
            type="button"
            variant="primary"
            disabled={!canContinue()}
            onClick={() => setStep((s) => (s < 4 ? ((s + 1) as Step) : s))}
            className="!bg-ink !text-parchment hover:!bg-ink-mid"
          >
            Continue
          </Button>
        ) : (
          <Button
            type="submit"
            variant="primary"
            disabled={!canContinue() || status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Submit estimate request"}
          </Button>
        )}
      </div>
    </form>
  );
}
