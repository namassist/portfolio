import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Github from "../../../public/icons/github.png";
import { projects } from "@/utils/data";

export const Projects = () => {
  return (
    <section id="projects" className="py-40">
      <h1 className="text-4xl capitalize font-semibold text-center mb-10">
        Projects
      </h1>
      <div className="flex flex-wrap gap-5">
        {projects.map((project) => (
          <div className="w-full lg:w-[calc(33.33%_-_.9rem)] flex-col justify-between border-primary border-2 rounded-lg px-6 py-6 space-y-5 md:mb-5">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold capitalize">{project.title}</h1>
              <div className="flex gap-2 items-center">
                <Link href={project.repo}>
                  <FiGithub size={25} />
                </Link>
                <Link href={project.url}>
                  <FiExternalLink size={25} />
                </Link>
              </div>
            </div>
            <p className="leading-relaxed">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
