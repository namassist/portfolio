import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../assets/icons";

export const About = () => {
  return (
    <section className="pt-14 pb-5 bg-[#25343E]" id="about">
      <div className="container mx-auto space-y-1">
        <h3 className="font-semibold text-lg text-[#FF499E]">About Me</h3>
        <h2 className="font-semibold text-2xl">Do You Know Me?</h2>
        <div className="w-full flex space-x-4">
          <span className="w-[5%] bg-[#FF499E] h-1.5 mt-2"></span>
          <div className="space-y-10">
            <p className="text-lg">
              Hello! I'm Chairul, based in Cirebon, Jawa barat who enjoys
              Developing things that live on the internet.{" "}
              <strong className="font-semibold">
                {" "}
                I develop exceptional websites, web apps and mobile apps.
              </strong>
              <br />
              Shortly after graduating from SMK Negeri 1 Jamblang, I majored in
              Information Technology at Semarang Polytechnic, where I could
              learn and deepen my role as a Fullstack Developer Here are a few
              technologies I've been working with recently:
            </p>
            <ul className="flex space-x-10 items-center">
              <a href="#">
                <InstagramIcon w={30} h={30} />
              </a>
              <a href="#">
                <TwitterIcon w={33} h={33} />
              </a>
              <a href="#">
                <LinkedinIcon w={30} h={30} />
              </a>
              <a href="#">
                <GithubIcon w={33} h={33} />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
