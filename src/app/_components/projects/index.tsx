import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { portfolio } from "@/lib/data";
import SectionTitle from "@/components/section-title";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.section
      className="w-full pt-32 pb-10 overflow-hidden"
      id="projects"
      ref={ref}
    >
      <div className="container mx-auto lg:px-24">
        <SectionTitle title="projects" />
        <div className="w-full">
          <HoverEffect items={portfolio} />
        </div>
      </div>
    </motion.section>
  );
}
