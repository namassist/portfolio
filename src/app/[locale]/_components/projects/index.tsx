import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import SectionTitle from "@/components/section-title";
import { useTranslations } from "next-intl";

export default function Projects() {
  const { ref } = useSectionInView("projects");
  const t = useTranslations("projects");
  const portfolioItems = t.raw("items");

  return (
    <motion.section
      className="w-full pt-32 pb-10 overflow-hidden"
      id="projects"
      ref={ref}
    >
      <div className="container mx-auto lg:px-24">
        <SectionTitle title={t("section")} />
        <div className="w-full">
          <HoverEffect items={portfolioItems} />
        </div>
      </div>
    </motion.section>
  );
}
