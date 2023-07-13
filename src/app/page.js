import Link from "next/link";
import Image from "next/image";
import profileImage from "../../public/images/pictures.png";
import Github from "../../public/icons/github.png";
import Telegram from "../../public/icons/telegram.png";
import Linkedin from "../../public/icons/linkedin.png";
import { About } from "./about/about";
import { Experiences } from "./experiences/experiences";
import { Projects } from "./projects/projects";
import { Skills } from "./skills/skills";
import { Tools } from "./tools/tools";
import { socialMedia } from "@/utils/data";

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100vh_-_8rem)] flex flex-col-reverse justify-center md:flex-row lg:justify-between items-center text-white">
        <div className="space-y-5">
          <h4 className="text-base text-center mt-5 md:mt-0 md:text-lg md:text-left lg:text-lg">
            Hi there, my name is
          </h4>
          <h1 className="text-3xl text-center md:text-left md:text-5xl lg:text-7xl font-semibold text-primary">
            Chairul Anaam <br /> Maulidin
          </h1>
          <p className="text-secondary text-base text-center lg:text-lg md:text-left md:w-8/12">
            I am a final-year student who has a passion for frontend
            development. I am proficient in building responsive web designs and
            implementing modern frontend frameworks and libraries.
          </p>
          <div className="flex gap-4 justify-center items-center md:justify-start">
            {socialMedia.map((socmed) => (
              <Link
                href={socmed.url}
                className="border-2 border-primary p-2 rounded-full w-14 h-14 flex justify-center items-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                {socmed.icons}
              </Link>
            ))}
          </div>
        </div>
        <Image
          src={profileImage}
          alt="foto chairul anaam maulidin"
          className="w-[250px] h-[250px] md:w-[500px] md:h-[500px]"
          priority={true}
        />
      </section>
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Tools />
    </>
  );
}
