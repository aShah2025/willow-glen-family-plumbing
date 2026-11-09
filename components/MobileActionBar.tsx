import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-navy-100 bg-white px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] md:hidden">
      <a href={site.phoneHref} className="btn-primary">
        <Icon name="phone" className="size-5" />
        Call Now
      </a>
      <Link href="/contact/" className="btn-outline">
        Free Estimate
      </Link>
    </div>
  );
}
