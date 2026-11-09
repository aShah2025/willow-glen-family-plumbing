"use client";

import { type FormEvent, useState } from "react";
import Field from "@/components/Field";
import Icon from "@/components/Icon";
import { type FieldErrors, phoneError, site } from "@/lib/site";

export default function CallbackForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sentTo, setSentTo] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name")).trim();
    const phone = String(data.get("phone"));

    const next: FieldErrors = {};
    if (!name) next["cb-name"] = "Enter your name.";
    const badPhone = phoneError(phone);
    if (badPhone) next["cb-phone"] = badPhone;
    setErrors(next);

    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }
    setSentTo(name);
  }

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/10 sm:p-7">
      <div aria-live="polite">
        {sentTo && (
          <div className="py-6 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <Icon name="check" className="size-8" />
            </span>
            <h2 className="mt-4 text-2xl font-bold">Thanks, {sentTo}!</h2>
            <p className="mt-2">
              We got your request and will call you back shortly. Water running right now? Call{" "}
              <a href={site.phoneHref} className="font-bold text-navy-900 underline">
                {site.phone}
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {!sentTo && (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Get a quick callback</h2>
            <p className="mt-1">Leave your number and a local plumber will call you.</p>
          </div>
          <Field id="cb-name" label="Name" error={errors["cb-name"]}>
            <input
              id="cb-name"
              name="name"
              autoComplete="name"
              className="field-input"
              aria-invalid={!!errors["cb-name"]}
              aria-describedby={errors["cb-name"] ? "cb-name-error" : undefined}
            />
          </Field>
          <Field id="cb-phone" label="Phone" error={errors["cb-phone"]}>
            <input
              id="cb-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="field-input"
              aria-invalid={!!errors["cb-phone"]}
              aria-describedby={errors["cb-phone"] ? "cb-phone-error" : undefined}
            />
          </Field>
          <button type="submit" className="btn-primary w-full">
            Call Me Back
          </button>
        </form>
      )}
    </div>
  );
}
