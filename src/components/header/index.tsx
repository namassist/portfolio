"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "usehooks-ts";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";

export default function Header() {
  const t = useTranslations("menus");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  console.log(activeSection);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[34rem] sm:rounded-full dark:bg-background/30 dark:border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] right-5 h-[4rem] -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 sm:left-1/2 sm:right-auto">
        {!isDesktop && (
          <Drawer
            direction="bottom"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <div className="h-[80vh] py-10">
                <ul className="flex flex-col flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-neutral-300 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                  {t.raw("items").map((link: any, index: number) => (
                    <motion.li
                      className="h-3/4 flex items-center justify-center relative"
                      key={link.link}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                    >
                      <Link
                        className={clsx(
                          "capitalize flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-neutral-300 dark:hover:text-neutral-300/50",
                          {
                            "dark:hover:text-[#004e92] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#000428] dark:to-[#004e92]":
                              activeSection === link.slug,
                          }
                        )}
                        href={link.link}
                        onClick={() => {
                          setActiveSection(link.name);
                          setTimeOfLastClick(Date.now());
                        }}
                      >
                        {link.name}
                        {link.slug === activeSection && (
                          <motion.span
                            className="rounded-sm absolute inset-0 -z-10 bg-gradient-to-r from-[#ECE9E6] to-[#FFFFFF]"
                            layoutId="activeSection"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          ></motion.span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </DrawerContent>
          </Drawer>
        )}

        {isDesktop && (
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-neutral-300 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {t.raw("items").map((link: any, index: number) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.link}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "capitalize flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-neutral-300 dark:hover:text-neutral-300/50",
                    {
                      "dark:hover:text-[#004e92] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#000428] dark:to-[#004e92]":
                        activeSection === link.slug,
                    }
                  )}
                  href={link.link}
                  onClick={() => {
                    setActiveSection(link.slug);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.slug === activeSection && (
                    <motion.span
                      className="rounded-full absolute inset-0 -z-10 bg-gradient-to-r from-[#ECE9E6] to-[#FFFFFF]"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
