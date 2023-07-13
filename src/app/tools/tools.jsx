import { tools } from "@/utils/data";
import { Card } from "@/components/card/card";

export const Tools = () => {
  return (
    <section className="space-y-10">
      <h1 className="text-4xl capitalize font-semibold flex items-center gap-2">
        <span className="w-10 h-1.5 bg-primary inline-block"></span> Tools
      </h1>
      <div className="flex flex-wrap gap-8">
        {tools.map((skill) => (
          <Card data={skill} key={skill.name} />
        ))}
      </div>
    </section>
  );
};
