import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Ripple from "@/components/magicui/ripple";
import AvatarCircles from "@/components/magicui/avatar-circles";
import ShinyButton from "@/components/magicui/shiny-button";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Sparkle } from "lucide-react";
import PulsatingButton from "@/components/ui/pulsating-button";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Hero() {
  const { ref } = useSectionInView("Home");

  return (
    <motion.section
      className="relative flex min-h-screen w-full overflow-hidden flex-col items-center justify-center rounded-lg"
      id="#"
      ref={ref}
    >
      <Ripple />
      <div className="flex flex-col justify-center items-center space-y-6 z-50 max-w-xl leading-snug">
        <AvatarCircles avatarUrls="/profile.webp" />
        <TypingAnimation
          className="text-2xl font-bold md:text-3xl lg:text-4xl text-center capitalize font-serif tracking-wider"
          text="Developing Modern Web Apps"
        />
        <p className="text-foreground/80 text-center text-sm">
          Skilled in Next.js, React.js and Tailwind CSS with a focus on
          delivering seamless user experiences
        </p>
        <div className="flex gap-3">
          <Link
            href="/curriculum-vitae.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            locale={false}
          >
            <PulsatingButton
              className="text-sm capitalize bg-foreground/80 dark:bg-foreground/80"
              pulseColor="#004e92"
            >
              Download CV
            </PulsatingButton>
          </Link>
          <Link href="#projects">
            <ShinyButton text="view my work" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

const Icons = {
  Sparkle: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sparkle animate-spin-slow text-emerald-400"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  ),
};
