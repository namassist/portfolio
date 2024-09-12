export default function SectionTitle({
  title,
  reverse = false,
}: {
  title: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-10 sm:gap-20 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <h1 className="relative capitalize text-3xl md:text-5xl font-sans font-black">
        {title}{" "}
        <span className="inline-block absolute bottom-1 -right-4 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#ECE9E6] to-[#FFFFFF]"></span>
      </h1>
      <span className="w-full h-[1px] bg-zinc-400"></span>
    </div>
  );
}
