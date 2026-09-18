"use client";

import { FormEvent, useMemo, useState } from "react";
import { getFormspreeEndpoint, services, site } from "@/lib/site";

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

export function EstimateForm() {
  const endpoint = useMemo(() => getFormspreeEndpoint(), []);
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
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
      <div className="rounded-sm border border-brand-navy/10 bg-white p-8 shadow-sm">
        <h2 className="font-heading text-2xl font-extrabold text-brand-navy">
          Request received
        </h2>
        <p className="mt-3 text-brand-slate/80">
          Thank you. Our team will review your project details and follow up shortly.
          Prefer to talk now? Call{" "}
          <a className="font-semibold text-brand-navy underline" href={site.phoneHref}>
            {site.phone}
          </a>{" "}
          or{" "}
          <a
            className="font-semibold text-brand-navy underline"
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            book a consultation
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-sm border border-brand-navy/10 bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      <div className="mb-8 flex items-center gap-2" aria-label={`Step ${step} of 4`}>
        {([1, 2, 3, 4] as Step[]).map((s) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-heading font-bold ${
                s <= step
                  ? "bg-brand-navy text-white"
                  : "bg-brand-mist text-brand-slate/50"
              }`}
            >
              {s}
            </div>
            {s < 4 ? (
              <div
                className={`h-0.5 flex-1 ${s < step ? "bg-brand-amber" : "bg-brand-mist"}`}
              />
            ) : null}
          </div>
        ))}
      </div>

      {step === 1 && (
        <fieldset>
          <legend className="font-heading text-xl font-extrabold text-brand-navy">
            What kind of project?
          </legend>
          <p className="mt-2 text-sm text-brand-slate/70">Select all that apply.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((s) => {
              const on = form.projectTypes.includes(s.name);
              return (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => toggleType(s.name)}
                  className={`min-h-14 rounded-sm border px-4 py-3 text-left text-sm font-medium transition ${
                    on
                      ? "border-brand-amber bg-brand-amber/15 text-brand-navy"
                      : "border-brand-navy/15 hover:border-brand-navy/40"
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
          <legend className="font-heading text-xl font-extrabold text-brand-navy">
            Tell us about the work
          </legend>
          <label className="mt-6 block text-sm font-medium text-brand-navy" htmlFor="details">
            Project details
          </label>
          <textarea
            id="details"
            required
            rows={6}
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            className="mt-2 w-full rounded-sm border border-brand-navy/20 bg-brand-light px-3 py-3 text-sm outline-none ring-brand-amber focus:ring-2"
            placeholder="Scope, address context, materials preferences, access notes…"
          />
          <p className="mt-3 text-xs text-brand-slate/60">
            Photo uploads can be emailed to {site.estimatesEmail} after you submit — mention
            your name in the subject line.
          </p>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset>
          <legend className="font-heading text-xl font-extrabold text-brand-navy">
            Budget & timeline
          </legend>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-brand-navy">Estimated budget</p>
              <div className="mt-3 space-y-2">
                {budgets.map((b) => (
                  <label key={b} className="flex min-h-11 cursor-pointer items-center gap-3 text-sm">
                    <input
                      type="radio"
                      name="budget"
                      value={b}
                      checked={form.budget === b}
                      onChange={() => setForm({ ...form, budget: b })}
                      className="size-4 accent-brand-navy"
                    />
                    {b}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-brand-navy">Desired timeline</p>
              <div className="mt-3 space-y-2">
                {timelines.map((t) => (
                  <label key={t} className="flex min-h-11 cursor-pointer items-center gap-3 text-sm">
                    <input
                      type="radio"
                      name="timeline"
                      value={t}
                      checked={form.timeline === t}
                      onChange={() => setForm({ ...form, timeline: t })}
                      className="size-4 accent-brand-navy"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <label className="mt-6 block text-sm font-medium text-brand-navy" htmlFor="propertyType">
            Property type
          </label>
          <select
            id="propertyType"
            value={form.propertyType}
            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
            className="mt-2 w-full rounded-sm border border-brand-navy/20 bg-brand-light px-3 py-3 text-sm outline-none ring-brand-amber focus:ring-2"
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
          <legend className="font-heading text-xl font-extrabold text-brand-navy">
            Contact details
          </legend>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium" htmlFor="firstName">
                First name
              </label>
              <input
                id="firstName"
                required
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="mt-1 w-full rounded-sm border border-brand-navy/20 bg-brand-light px-3 py-3 text-sm outline-none ring-brand-amber focus:ring-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="lastName">
                Last name
              </label>
              <input
                id="lastName"
                required
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="mt-1 w-full rounded-sm border border-brand-navy/20 bg-brand-light px-3 py-3 text-sm outline-none ring-brand-amber focus:ring-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-sm border border-brand-navy/20 bg-brand-light px-3 py-3 text-sm outline-none ring-brand-amber focus:ring-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-sm border border-brand-navy/20 bg-brand-light px-3 py-3 text-sm outline-none ring-brand-amber focus:ring-2"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium" htmlFor="address">
                Project address (optional)
              </label>
              <input
                id="address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="mt-1 w-full rounded-sm border border-brand-navy/20 bg-brand-light px-3 py-3 text-sm outline-none ring-brand-amber focus:ring-2"
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
                className="mt-1 w-full rounded-sm border border-brand-navy/20 bg-brand-light px-3 py-3 text-sm outline-none ring-brand-amber focus:ring-2"
              />
            </div>
          </div>
        </fieldset>
      )}

      {status === "error" ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {errorMsg || "Something went wrong. Please call us or try again."}
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          disabled={step === 1 || status === "submitting"}
          onClick={() => setStep((s) => (s > 1 ? ((s - 1) as Step) : s))}
          className="min-h-11 rounded-sm px-4 text-sm font-heading font-semibold uppercase tracking-wide text-brand-navy disabled:opacity-40"
        >
          Back
        </button>
        {step < 4 ? (
          <button
            type="button"
            disabled={!canContinue()}
            onClick={() => setStep((s) => (s < 4 ? ((s + 1) as Step) : s))}
            className="min-h-11 rounded-sm bg-brand-navy px-6 text-sm font-heading font-bold uppercase tracking-wide text-white disabled:opacity-40"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canContinue() || status === "submitting"}
            className="min-h-11 rounded-sm bg-brand-amber px-6 text-sm font-heading font-bold uppercase tracking-wide text-brand-navy disabled:opacity-40"
          >
            {status === "submitting" ? "Sending…" : "Submit estimate request"}
          </button>
        )}
      </div>
    </form>
  );
}
