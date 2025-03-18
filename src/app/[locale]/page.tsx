"use client";

import { useMediaQuery } from "usehooks-ts";
import About from "@/app/[locale]/_components/about";
import Contact from "@/app/[locale]/_components/contact";
import Experiences from "@/app/[locale]/_components/experiences";
import Projects from "@/app/[locale]/_components/projects";
import Header from "@/components/header";
import Hero from "@/app/[locale]/_components/hero";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import LocalSwitcher from "@/components/local-switcher";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main className="relative w-full">
      <Header />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
      <LocalSwitcher />
    </main>
  );
}
