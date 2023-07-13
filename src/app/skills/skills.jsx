import { skills } from "@/utils/data";
import { Card } from "@/components/card/card";

export const Skills = () => {
  return (
    <section className="py-40 space-y-10" id="skills">
      <h1 className="text-4xl capitalize font-semibold flex items-center gap-2">
        <span className="w-10 h-1.5 bg-primary inline-block"></span> Tech Stack
      </h1>
      <div className="flex flex-wrap gap-8">
        {skills.map((skill) => (
          <Card data={skill} key={skill.name} />
        ))}
      </div>
    </section>
  );
};
