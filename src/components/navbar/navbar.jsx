"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { navigation } from "../../utils/data";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const navbar = document.querySelector("nav");
    const button = document.querySelector(".download");
    const line = document.querySelector(".cust");

    const handleScroll = () => {
      const homeSection = document.querySelector("#home");
      const aboutSection = document.querySelector("#about");
      const experiencesSection = document.querySelector("#experiences");
      const projectsSection = document.querySelector("#projects");
      const skillsSection = document.querySelector("#skills");

      const currentSection =
        window.scrollY < aboutSection.offsetTop
          ? homeSection
          : window.scrollY + 20 < experiencesSection.offsetTop
          ? aboutSection
          : window.scrollY + 20 < projectsSection.offsetTop
          ? experiencesSection
          : window.scrollY + 20 < skillsSection.offsetTop
          ? projectsSection
          : skillsSection;

      if (window.scrollY > 0) {
        navbar.classList.add(
          "sticky",
          "top-0",
          "bg-primary",
          "z-10",
          "shadow-md"
        );
        button.classList.add("bg-gray-50", "text-primary");
        line.classList.remove("border-primary");

        setActiveSection(currentSection.id);
      } else {
        navbar.classList.remove(
          "sticky",
          "top-0",
          "bg-primary",
          "z-10",
          "shadow-md"
        );
        button.classList.remove("bg-gray-50", "text-primary");
        line.classList.add("border-primary");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event, id) => {
    event.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOffCanvas(false);
  };

  return (
    <nav className="py-5 h-32 transition-all duration-500">
      <div className="md:mx-auto container">
        <div className="flex justify-between items-center border-b-2 border-primary pb-4 cust">
          <Link href="/">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
              Chairulanmm
            </h1>
          </Link>
          <button
            className="block lg:hidden"
            onClick={() => {
              setOffCanvas(!offCanvas);
            }}
          >
            <HiMenuAlt3 size={30} />
          </button>
          <div
            className={`w-full h-full fixed top-0 lg:static bg-primary md:bg-transparent md:w-auto z-10 p-10 lg:p-0 transition-all duration-100 ${
              offCanvas ? "right-0" : "-right-full"
            }`}
          >
            <ul className="flex flex-col space-y-5 lg:justify-end lg:items-center lg:space-y-0 lg:flex-row gap-14 text-lg">
              <button
                className="absolute top-14 right-14 lg:hidden"
                onClick={() => {
                  setOffCanvas(false);
                }}
              >
                <IoClose size={30} />
              </button>
              {navigation.map((nav) => (
                <Link
                  href={nav.id}
                  onClick={(e) => handleClick(e, nav.id)}
                  className={` transition-all duration-300 capitalize
                  ${
                    activeSection === nav.name
                      ? "underline underline-offset-8 decoration-white decoration-4"
                      : ""
                  } `}
                >
                  {nav.name}
                </Link>
              ))}
            </ul>
          </div>
          <button className="hidden lg:block border-2 border-primary px-6 py-2 rounded-lg text-lg font-medium download transition-all duration-500">
            <a href="/CV.pdf">Download CV</a>
          </button>
        </div>
      </div>
    </nav>
  );
}
