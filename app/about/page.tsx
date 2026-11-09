import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Us",
  description: "A family-run plumbing company serving South Bay families for more than 15 years.",
};

const values = [
  { title: "Tell the truth", text: "If a repair can wait or a cheaper fix will hold, we say so." },
  { title: "Respect the home", text: "Shoe covers, drop cloths, and a clean workspace on every visit." },
  { title: "Stand behind it", text: "If something we fixed isn't right, we come back and make it right." },
];

const badges: { icon: IconName; label: string }[] = [
  { icon: "doc", label: "State Contractor License" },
  { icon: "shield", label: "General Liability Insurance" },
  { icon: "shield", label: "Workers' Compensation" },
  { icon: "check", label: "Trade Certification" },
];

const reviews = [
  {
    quote:
      "Our water heater failed on a Sunday night. They had a new one running by Monday lunch, for exactly the price they quoted.",
    name: "Maria T.",
    area: "Willow Glen",
  },
  {
    quote:
      "Another company told us we needed a full sewer replacement. These guys ran a camera, cleared a root clog, and saved us thousands.",
    name: "David K.",
    area: "Cambrian",
  },
  {
    quote:
      "They repiped our 1950s house and left it cleaner than they found it. Our kids even got to name the camera snake.",
    name: "Priya S.",
    area: "Almaden Valley",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="wrap grid gap-10 py-12 md:py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <p className="kicker">Our Story</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Your neighbors in the South Bay for 15+ years
          </h1>
          <div className="mt-6 space-y-4 text-lg">
            <p>
              Willow Glen Family Plumbing started with one van, one set of tools, and a promise to
              treat every customer like the family next door. More than 15 years later, we're still
              family-run and still based in San Jose.
            </p>
            <p>
              We've worked under Eichlers, in Craftsman crawlspaces, and in plenty of newer homes
              across the South Bay. Most of our work today comes from people whose parents or
              neighbors called us first, and we intend to keep earning those referrals.
            </p>
          </div>
        </div>
        <dl className="grid content-start gap-px self-start overflow-hidden rounded-2xl bg-navy-800 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["15+", "years serving South Bay families"],
            ["24/7", "live emergency response"],
            ["100%", "flat-rate quotes before work begins"],
          ].map(([value, label]) => (
            <div key={value} className="flex flex-col bg-navy-900 p-6 text-white">
              <dt className="order-2 mt-1 text-navy-200">{label}</dt>
              <dd className="order-1 text-4xl font-extrabold">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-navy-50">
        <div className="wrap py-14">
          <h2 className="text-3xl font-extrabold tracking-tight">What we value</h2>
          <ul className="mt-7 grid gap-7 md:grid-cols-3">
            {values.map((value) => (
              <li key={value.title} className="border-l-4 border-emerald-600 pl-4">
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="mt-1">{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-14">
        <h2 className="text-3xl font-extrabold tracking-tight">Licensing &amp; credentials</h2>
        <ul className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {badges.map((badge) => (
            <li
              key={badge.label}
              className="flex flex-col items-center rounded-xl border-2 border-dashed border-navy-200 p-5 text-center"
            >
              <Icon name={badge.icon} className="size-8 text-navy-600" />
              <p className="mt-2 font-semibold text-navy-900">{badge.label}</p>
              <p className="text-sm">Badge placeholder</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy-50">
        <div className="wrap py-14">
          <h2 className="text-3xl font-extrabold tracking-tight">What local customers say</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <figure key={review.name} className="flex flex-col rounded-2xl bg-white p-6">
                <p aria-label="Rated 5 out of 5 stars" className="text-lg tracking-widest text-emerald-700">
                  ★★★★★
                </p>
                <blockquote className="mt-3 flex-1 text-lg">“{review.quote}”</blockquote>
                <figcaption className="mt-4 font-bold text-navy-900">
                  {review.name} <span className="font-normal text-navy-600">· {review.area}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <Link href="/contact/" className="btn-primary mt-9">
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
