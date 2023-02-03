export const Card = ({ img, title }) => {
  return (
    <div className="bg-[#FF499E] w-44 h-40 p-5 flex flex-col items-center justify-center space-y-4 rounded-lg">
      <img src={img} alt="skill" className="w-[40px]" />
      <p className="text-[#0D1E29] text-sm">{title}</p>
    </div>
  );
};
