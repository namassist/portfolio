import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const { ref } = useSectionInView("contacts");
  const t = useTranslations("contacts");

  return (
    <motion.section
      ref={ref}
      id="contacts"
      className="w-full pt-20 pb-10 overflow-hidden bg-background relative md:shadow-xl flex justify-center"
    >
      <div className="text-center max-w-xl">
        <h4 className="text-5xl font-black">{t("title")}</h4>
        <p className="mt-4 text-lg font-medium">{t("description")}</p>
        <Link href="mailto:chairulanmm@gmail.com">
          <Button variant="outline" className="mt-8">
            <Mail className="mr-2" />
            {t("cta_email")}
          </Button>
        </Link>
        <p className="mt-16 text-base font-semibold">{t("cta_socmed")}</p>
        <div className="flex justify-center items-center gap-6 mt-4">
          <Link
            href="https://web.facebook.com/chairulanam.maulidin/"
            className="hover:text-blue-700 duration-200"
          >
            <SiFacebook className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/chairulssr/"
            className="hover:text-blue-700 duration-200"
          >
            <SiInstagram className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/namassist/"
            className="hover:text-blue-700 duration-200"
          >
            <SiGithub className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/chairulanmm/"
            className="hover:text-blue-700 duration-200"
          >
            <SiLinkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
        )}
      />
    </motion.section>
  );
}
