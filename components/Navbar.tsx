"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const current = pathname.endsWith("/") ? pathname : `${pathname}/`;

  return (
    <header className="z-40 bg-navy-900 text-white md:sticky md:top-0">
      <div className="wrap flex flex-col md:h-18 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-2.5 py-3 font-bold md:py-0">
          <span className="grid size-9 place-items-center rounded-lg bg-emerald-600 text-navy-950">
            <Icon name="drop" />
          </span>
          <span className="leading-tight">{site.name}</span>
        </Link>

        <div className="flex items-center gap-8">
          <nav aria-label="Main" className="grid flex-1 grid-cols-3 md:flex md:gap-1">
            {links.map(({ href, label }) => {
              const active = current === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b-[3px] px-3 py-3 text-center font-semibold transition-colors md:py-5 ${
                    active
                      ? "border-emerald-500 text-white"
                      : "border-transparent text-navy-200 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <a href={site.phoneHref} className="btn-primary hidden md:inline-flex">
            <Icon name="phone" className="size-5" />
            {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
