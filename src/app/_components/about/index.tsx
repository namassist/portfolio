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
          <div className="w-full md:w-8/12 space-y-5 text-sm sm:text-base">
            <p className="leading-relaxed text-foreground/90">
              Hi, I&apos;m Chairul Anaam Maulidin, a Fullstack Web Developer
              with over a year of experience in crafting dynamic and responsive
              web applications. My expertise lies in leveraging modern
              frameworks like Next.js, React.js, and Laravel to build
              applications that not only meet client needs but also scale
              efficiently as they grow.
            </p>
            <p className="leading-relaxed text-foreground/90">
              I have a strong foundation in both frontend and backend
              development, enabling me to understand and optimize the full
              lifecycle of a web project. Im particularly passionate about
              creating user-friendly interfaces and ensuring that every line of
              code I write contributes to the overall performance and security
              of the application.
            </p>
            <p className="leading-relaxed text-foreground/90">
              I&apos;m currently seeking new opportunities where I can
              contribute my skills to exciting projects and further develop my
              expertise as a developer. Im eager to join a team that values
              innovation and collaboration.
            </p>
          </div>
          <div className="relative flex flex-col h-full w-full max-w-fit items-center justify-center overflow-hidden rounded-lg bg-transparent md:w-4/12">
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
