import ProfileImage from "../../assets/img/avatar.png";
import Background from "../../assets/img/bg.png";
import { Socmed } from "../Socmed";

export const Hero = () => {
  return (
    <div className="container mx-auto">
      <section className="w-full min-h-[calc(100vh-5rem)] flex justify-center items-center space-x-7 relative">
        <div className="h-full its-me w-4/12 relative">
          <p className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl">
            Hi there, im
          </p>
          <h2 className="text-[#FF499E] font-extrabold 2xl:text-8xl xl:text-7xl lg:text-6xl text-5xl mt-2">
            Chairul
          </h2>
          <span className="font-extrabold 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl">
            An'aam Maulidin
          </span>
          <p className="2xl:text-2xl xl:text-xl lg:text-lg text-base mt-3">
            Im
            <span className="border-b-2 border-[#FF499E]">
              {" "}
              Frontend Web Developer
            </span>
          </p>
          <button
            type="submit"
            className="bg-[#FF499E] 2xl:px-6 2xl:py-3 xl:px-4 xl:py-2 px-3 py-1.5 rounded-lg font-medium mt-6 text-[#0D1E29] 2xl:text-xl xl:text-lg text-base cursor-pointer"
          >
            Contact Me
          </button>
          <Socmed />
        </div>
        <div className="photos w-4/12">
          <img
            src={ProfileImage}
            alt="profile"
            className="2xl:scale-125 scale-[.9]"
          />
        </div>
        <div className="introduction w-4/12 h-96 flex flex-col justify-end">
          <span className="2xl:text-xl xl:text-lg lg:text-base text-sm">
            I'm a{" "}
            <strong className="text-[#FF499E]">Frontend Web Developer </strong>
            based in Cirebon, Jawa barat specializing in Development exceptional
            websites, applications, and everything in between.
          </span>
        </div>
        <img
          src={Background}
          className="absolute opacity-40 xl:scale-125 xl:bottom-[25%] scale-[.9] bottom-[10%]"
        />
      </section>
    </div>
  );
};
