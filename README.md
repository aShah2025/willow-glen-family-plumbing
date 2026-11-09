# Willow Glen Family Plumbing

A 3-page marketing site for a fictional San Jose plumber, built with Next.js (App Router, static export) and Tailwind CSS. All names, reviews, phone numbers, and license details are placeholders.

## Run it

```bash
npm install
npm run dev
```

## Build static files

```bash
npm run build
npm run preview
```

`npm run build` writes the site to `out/`, which can be uploaded to any static host.

## Connect the forms

There is no backend, so the forms validate input and show a confirmation but don't send data anywhere. To receive leads, post the form data to a service such as Formspree in `handleSubmit` in `components/CallbackForm.tsx` and `components/EstimateForm.tsx`.

Business details and the service list are in `lib/site.ts`.
