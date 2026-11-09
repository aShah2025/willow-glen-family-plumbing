import type { Metadata } from "next";
import EstimateForm from "@/components/EstimateForm";
import Icon from "@/components/Icon";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Request a free plumbing estimate in San Jose, or call our 24/7 emergency line.",
};

const hours = [
  ["Emergency line", "24 hours, 7 days"],
  ["Monday to Friday", "7:00 AM to 6:00 PM"],
  ["Saturday", "8:00 AM to 4:00 PM"],
  ["Sunday", "Emergencies only"],
];

export default function ContactPage() {
  return (
    <section className="wrap py-10 md:py-16">
      <p className="kicker">Contact</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Tell us what's going on
      </h1>
      <p className="mt-4 max-w-2xl text-lg">
        Estimates are free, and you'll have a flat price before any work begins.
      </p>

      <div className="mt-9 grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
        <EstimateForm />

        <aside className="space-y-9">
          <div className="space-y-3">
            <h2 className="text-xl font-bold">Reach us directly</h2>
            <a href={site.phoneHref} className="flex items-center gap-3 text-lg font-bold text-navy-900 hover:underline">
              <Icon name="phone" className="size-5 text-emerald-700" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:underline">
              <Icon name="mail" className="size-5 text-emerald-700" />
              <span className="break-all">{site.email}</span>
            </a>
          </div>

          <div>
            <h2 className="text-xl font-bold">Business hours</h2>
            <dl className="mt-3 divide-y divide-navy-100">
              {hours.map(([day, time]) => (
                <div key={day} className="flex justify-between gap-4 py-2">
                  <dt>{day}</dt>
                  <dd className="text-right font-semibold text-navy-900">{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <Icon name="pin" className="size-5 text-emerald-700" />
              San Jose service area
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
