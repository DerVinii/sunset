"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Mobile Sticky-Leiste (Plan Kap. 4):
 * - Übernimmt denselben kontextsensitiven CTA wie der Header.
 * - Werktags tagsüber: Anrufen primär. Abends/Wochenende: WhatsApp/Termin-Check primär
 *   (damit niemand um 21 Uhr in einer anonymen Mailbox landet).
 */
export function StickyBar() {
  const pathname = usePathname() ?? "/";
  const [businessHours, setBusinessHours] = useState(true);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = So, 6 = Sa
    const hour = now.getHours();
    setBusinessHours(day >= 1 && day <= 5 && hour >= 9 && hour < 17);
  }, []);

  const isEquipment = pathname.startsWith("/mieten") || pathname.startsWith("/partyservice");
  const ctaHref = isEquipment
    ? `${pathname.startsWith("/mieten") ? "/mieten" : "/partyservice"}#anfrage`
    : `${pathname === "/" ? "" : pathname}#termincheck`;
  const ctaLabel = isEquipment ? "Verfügbarkeit anfragen" : "Verfügbarkeit prüfen";

  const call = (
    <a
      key="call"
      href={`tel:${site.phone}`}
      className={`flex flex-1 flex-col items-center justify-center rounded-lg px-2 py-2 text-sm font-semibold ${
        businessHours
          ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
          : "border border-stone-300 text-stone-700 dark:border-stone-700 dark:text-stone-300"
      }`}
    >
      Anrufen
      <span className="text-[10px] font-normal opacity-75">{site.phoneHours}</span>
    </a>
  );

  const whatsapp = (
    <a
      key="wa"
      href="/kontakt#whatsapp"
      className={`flex flex-1 items-center justify-center rounded-lg px-2 py-2 text-sm font-semibold ${
        businessHours
          ? "border border-stone-300 text-stone-700 dark:border-stone-700 dark:text-stone-300"
          : "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
      }`}
    >
      WhatsApp
    </a>
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-stone-50/95 p-2 backdrop-blur lg:hidden dark:border-stone-800 dark:bg-stone-950/95">
      <div className="flex gap-2">
        {businessHours ? [call, whatsapp] : [whatsapp, call]}
        <a
          href={ctaHref}
          className="flex flex-[1.4] items-center justify-center rounded-lg bg-sunset px-2 py-2 text-center text-sm font-semibold text-white"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
