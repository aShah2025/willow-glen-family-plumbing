import Link from "next/link";
import CallbackForm from "@/components/CallbackForm";
import Icon, { type IconName } from "@/components/Icon";
import { services, site } from "@/lib/site";

const trust: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Licensed & Insured", text: "Fully covered work by background-checked plumbers." },
  { icon: "tag", title: "Upfront Flat-Rate Pricing", text: "You approve the price before any work starts." },
  { icon: "clock", title: "Same-Day Service", text: "Call by mid-afternoon and we'll be there today." },
];

export default function HomePage() {
  return (
    <>
      <section className="wrap grid items-center gap-10 py-10 md:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <p className="kicker">Family-run in Willow Glen for 15+ years</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            24/7 Fast, Honest Plumbing in San Jose
          </h1>
          <p className="mt-5 max-w-xl text-lg sm:text-xl">
            A real local plumber answers, day or night. You get a flat price before we start, and
            the job is done right the first time.
          </p>
          <a href={site.phoneHref} className="btn-primary mt-7 text-lg">
            <Icon name="phone" className="size-5" />
            Call {site.phone}
          </a>
        </div>
        <CallbackForm />
      </section>

      <section aria-label="Why choose us" className="bg-navy-50">
        <div className="wrap py-10">
          <h2 className="kicker">Why Choose Us</h2>
          <ul className="mt-5 grid gap-6 md:grid-cols-3">
            {trust.map((item) => (
              <li key={item.title} className="flex gap-3.5">
                <Icon name={item.icon} className="mt-0.5 size-7 text-emerald-700" />
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-0.5">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-14 md:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">What we fix</h2>
        <p className="mt-3 max-w-2xl text-lg">
          From a midnight leak to a whole-home repipe, one crew handles it from start to finish.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/contact/?service=${service.slug}`}
              className="group flex flex-col rounded-2xl border border-navy-100 p-6 transition hover:border-emerald-600 hover:shadow-lg hover:shadow-navy-900/5"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-navy-900 text-white">
                <Icon name={service.icon} />
              </span>
              <h3 className="mt-4 text-xl font-bold">{service.name}</h3>
              <p className="mt-2 flex-1">{service.blurb}</p>
              <span className="mt-4 font-bold text-emerald-700 group-hover:underline">
                Get a free estimate
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
