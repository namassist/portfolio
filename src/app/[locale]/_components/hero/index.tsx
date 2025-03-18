import Ripple from "@/components/magicui/ripple";
import AvatarCircles from "@/components/magicui/avatar-circles";
import ShinyButton from "@/components/magicui/shiny-button";
import PulsatingButton from "@/components/ui/pulsating-button";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const { ref } = useSectionInView("home");
  const t = useTranslations("hero");

  return (
    <motion.section
      className="relative flex min-h-screen w-full overflow-hidden flex-col items-center justify-center rounded-lg"
      id="#"
      ref={ref}
    >
      <Ripple />
      <div className="flex flex-col justify-center items-center space-y-6 z-50 max-w-2xl">
        <AvatarCircles avatarUrls="/profile.webp" />
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          {t("title")}
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-400 max-w-lg text-center mx-auto">
          {t("description")}
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
              {t("btn_download")}
            </PulsatingButton>
          </Link>
          <Link href="#projects">
            <ShinyButton text={t("btn_view_work")} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
