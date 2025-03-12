import React from "react";
import { slugs } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionTitle from "@/components/section-title";
import IconCloud from "@/components/magicui/icon-cloud";
import { SquareTerminal } from "lucide-react";

export default function About() {
  const { ref } = useSectionInView("About");

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
        <SectionTitle title="about" />
        <div className="overflow-hidden w-full flex flex-col gap-5 mt-10 space-y-5 sm:flex-row sm:space-y-0">
          <div className="w-full md:w-8/12 space-y-10 text-sm sm:text-base">
            <p className="leading-relaxed text-foreground/90">
              Hi, I&apos;m Chairul Anaam Maulidin, a Frontend Engineer
              specializing in React, Next.js, and Flutter. With a strong
              foundation in frontend development, I build high-quality
              applications by applying best practices, ensuring efficiency,
              security, and scalability.
            </p>
            <p className="leading-relaxed text-foreground/90">
              I thrive in dynamic environments, quickly adapting to new
              technologies and delivering solutions that enhance user
              experience. My flexibility in working with various programming
              languages allows me to craft robust, maintainable, and performant
              applications.
            </p>
            <p className="leading-relaxed text-foreground/90">
              I&apos;m seeking new opportunities to collaborate with innovative
              teams, contribute my expertise, and grow as a developer.
              Let&apos;s build something great together!
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
