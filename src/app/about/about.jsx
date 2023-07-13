export const About = () => {
  return (
    <section id="about" className="py-40 relative">
      <h4 className="text-primary text-base lg:text-xl font-semibold">
        About me
      </h4>
      <h1 className="text-3xl lg:text-4xl capitalize font-semibold mt-3">
        do you know me
      </h1>
      <div className="flex gap-5 mt-5">
        <span className="hidden lg:block md:w-16 xl:w-20 2xl:w-24 h-2 mt-2 bg-primary"></span>
        <div className="text-base space-y-8 md:text-xl md:w-8/12 lg:text-xl">
          <p className="md:leading-relaxed">
            With 1 year of hands-on experience in frontend development, I have
            cultivated a strong expertise in JavaScript technologies,
            particularly React.js, React Native, and Next.js. I am passionate
            about crafting visually appealing and engaging user interfaces that
            elevate the overall user experience.
          </p>
          <p className="md:leading-relaxed">
            I strive to create seamless and intuitive designs that captivate
            users and keep them coming back for more. Additionally, I am highly
            motivated to stay abreast of the latest technological advancements
            and continuously enhance my skills to deliver innovative solutions.
            I am excited to leverage my frontend development expertise to
            contribute to impactful projects and drive digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
};
