"use client";

import { useMediaQuery } from "usehooks-ts";
import About from "@/app/_components/about";
import Contact from "@/app/_components/contact";
import Experiences from "@/app/_components/experiences";
import Projects from "@/app/_components/projects";
import Header from "@/components/header";
import Hero from "@/app/_components/hero";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (isDesktop) {
    return (
      <main className="relative w-full ">
        <Header />
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
      </main>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-2">
      <p>Under Construction!</p>
      <p>Use desktop for better experience</p>
    </div>
  );
}
