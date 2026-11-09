import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="wrap flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-bold text-white">{site.name}</p>
          <p className="mt-1">San Jose, CA · {site.license}</p>
        </div>
        <div className="flex flex-col gap-1">
          <a href={site.phoneHref} className="font-semibold text-white hover:underline">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="break-all hover:underline">
            {site.email}
          </a>
        </div>
        <nav aria-label="Footer" className="flex gap-5">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about/" className="hover:underline">About</Link>
          <Link href="/contact/" className="hover:underline">Contact</Link>
        </nav>
      </div>
      <p className="wrap pb-8 text-sm">
        Demo site for a fictional business. Names, reviews, and license details are placeholders.
      </p>
    </footer>
  );
}
