"use client";

import { type FormEvent, useEffect, useState } from "react";
import Field from "@/components/Field";
import Icon from "@/components/Icon";
import { emailError, type FieldErrors, phoneError, services, site } from "@/lib/site";

const urgencyOptions = [
  { value: "routine", label: "Routine", hint: "Within a few days" },
  { value: "urgent", label: "Urgent", hint: "Today if possible" },
];

type Submitted = { name: string; serviceName: string; urgent: boolean };

export default function EstimateForm() {
  const [service, setService] = useState("");
  const [urgency, setUrgency] = useState("routine");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState<Submitted | null>(null);

  // Service cards on the home page link here with ?service=<slug>.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("service");
    if (services.some((item) => item.slug === slug)) setService(slug as string);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name")).trim();

    const next: FieldErrors = {};
    if (!name) next.name = "Enter your name.";
    const badPhone = phoneError(String(data.get("phone")));
    if (badPhone) next.phone = badPhone;
    const badEmail = emailError(String(data.get("email")));
    if (badEmail) next.email = badEmail;
    if (!service) next.service = "Choose a service.";
    setErrors(next);

    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    const serviceName =
      services.find((item) => item.slug === service)?.name ?? "Something else";
    setSubmitted({ name, serviceName, urgent: urgency === "urgent" });
    window.scrollTo({ top: 0 });
  }

  function reset() {
    setService("");
    setUrgency("routine");
    setErrors({});
    setSubmitted(null);
  }

  const describe = (id: string) => ({
    "aria-invalid": !!errors[id],
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
  });

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-lg shadow-navy-900/5 sm:p-8">
      <div aria-live="polite">
        {submitted && (
          <div className="py-8 text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <Icon name="check" className="size-9" />
            </span>
            <h2 className="mt-5 text-3xl font-bold">Request received</h2>
            <p className="mx-auto mt-3 max-w-md text-lg">
              Thanks, {submitted.name}. We have your {submitted.serviceName.toLowerCase()} request
              and will follow up with a flat-rate estimate
              {submitted.urgent ? " today" : " within one business day"}.
            </p>
            {submitted.urgent && (
              <a href={site.phoneHref} className="btn-primary mt-6">
                <Icon name="phone" className="size-5" />
                Need us sooner? Call {site.phone}
              </a>
            )}
            <div className="mt-6">
              <button
                type="button"
                onClick={reset}
                className="cursor-pointer font-semibold text-navy-900 underline"
              >
                Submit another request
              </button>
            </div>
          </div>
        )}
      </div>

      {!submitted && (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <h2 className="text-2xl font-bold">Request a Free Estimate</h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <input id="name" name="name" autoComplete="name" className="field-input" {...describe("name")} />
            </Field>
            <Field id="phone" label="Phone" error={errors.phone}>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className="field-input" {...describe("phone")} />
            </Field>
          </div>

          <Field id="email" label="Email" error={errors.email}>
            <input id="email" name="email" type="email" autoComplete="email" className="field-input" {...describe("email")} />
          </Field>

          <Field id="service" label="Service Needed" error={errors.service}>
            <select
              id="service"
              name="service"
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="field-input"
              {...describe("service")}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
              <option value="other">Something else</option>
            </select>
          </Field>

          <fieldset>
            <legend className="mb-1.5 font-semibold text-navy-900">Urgency</legend>
            <div className="grid grid-cols-2 gap-1 rounded-xl bg-navy-50 p-1">
              {urgencyOptions.map((option) => (
                <label key={option.value} className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="urgency"
                    value={option.value}
                    checked={urgency === option.value}
                    onChange={() => setUrgency(option.value)}
                    className="peer sr-only"
                  />
                  <span className="block rounded-lg px-3 py-2.5 text-center transition-colors peer-checked:bg-navy-900 peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-emerald-600">
                    <span className="block font-bold">{option.label}</span>
                    <span className="block text-sm">{option.hint}</span>
                  </span>
                </label>
              ))}
            </div>
            {urgency === "urgent" && (
              <p className="mt-2 text-sm">
                Active leak or no water? Calling is fastest:{" "}
                <a href={site.phoneHref} className="font-bold text-navy-900 underline">
                  {site.phone}
                </a>
              </p>
            )}
          </fieldset>

          <Field id="message" label="Message" optional>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="What's going on, and where in your home?"
              className="field-input"
            />
          </Field>

          <button type="submit" className="btn-primary w-full">
            Request My Free Estimate
          </button>
        </form>
      )}
    </div>
  );
}
