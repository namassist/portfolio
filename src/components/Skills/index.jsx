import { skills } from "../../data/Skill";
import { Card } from "../Card";
import BangJS from "../../assets/img/bg-js.png";

export const Skills = () => {
  return (
    <section className="pt-14 relative h-[530px]" id="skills">
      <div className="container mx-auto">
        <h2 className="font-semibold text-2xl text-center mb-10">My Skills</h2>
        <div className="flex space-x-14 justify-center items-center">
          {skills.map((skill) => {
            return <Card img={skill.img} title={skill.title} />;
          })}
        </div>
      </div>
      <img
        src={BangJS}
        className="absolute -top-[35%] -right-[10%] scale-[.80]"
      />
    </section>
  );
};
