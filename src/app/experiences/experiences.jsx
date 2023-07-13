import { experiences } from "@/utils/data";

export const Experiences = () => {
  return (
    <section className="py-40 space-y-10" id="experiences">
      <h1 className="text-4xl capitalize font-semibold">My Experiences</h1>
      <div className="space-y-14">
        {experiences?.map((exp) => (
          <div className="flex gap-5" key={exp.name}>
            <span className="w-14 h-2 mt-2 bg-primary"></span>
            <div className="text-secondary">
              <h1 className="text-2xl text-gray-50 font-semibold">
                {exp.name}
              </h1>
              <h4 className="text-base mt-1 font-medium lg:text-lg">
                {exp.path} |{" "}
                <span>
                  {exp.start} - {exp.end}
                </span>
              </h4>
              <ul className="text-base list-disc ml-7 mt-3 space-y-2 lg:text-lg">
                {exp?.information?.map((inf) => (
                  <li key={inf.id}>{inf.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
