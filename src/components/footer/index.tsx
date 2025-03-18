import { useTranslations } from "next-intl";
import React from "react";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer>
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center text-sm font-secondary-sans py-5 border-neutral-800 border-t-2">
          <p>
            © {new Date().getFullYear()} | Chairul An&apos;aam Maulidin.{" "}
            {t("title")}
          </p>
          <p>{t("created")} &#10084; in Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
