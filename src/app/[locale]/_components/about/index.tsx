import React from "react";
import { slugs } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionTitle from "@/components/section-title";
import IconCloud from "@/components/magicui/icon-cloud";
import { SquareTerminal } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("about");
  const t = useTranslations("about");

  return (
    <motion.section
      className="w-full pt-32 pb-10 overflow-hidden"
      id="about"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="container mx-auto lg:px-24">
        <SectionTitle title={t("section")} />
        <div className="overflow-hidden w-full flex flex-col gap-5 mt-10 space-y-5 sm:flex-row sm:space-y-0">
          <div className="w-full md:w-8/12 space-y-6 text-sm sm:text-base">
            <p className="leading-relaxed text-foreground/90">
              {t("paragraph1")}
            </p>
            <p className="leading-relaxed text-foreground/90">
              {t("paragraph2")}
            </p>
            <p className="leading-relaxed text-foreground/90">
              {t("paragraph3")}
            </p>
          </div>
          <div className="relative flex flex-col w-full max-w-fit items-center justify-center overflow-hidden rounded-lg bg-transparent md:w-4/12">
            <h4 className="flex items-center">
              <SquareTerminal className="text-indigo-500 text-2xl" />
              <span className="font-bold ml-2">Skillsets</span>
            </h4>
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
