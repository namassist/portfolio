import { menus } from "../../data/Menu";

export const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="relative w-full flex justify-around items-center border-b-2 border-b-[#FF499E] h-16">
        <div className="w-2/12">
          <h1 className="text-[#FF499E] font-extrabold 2xl:text-5xl xl:text-4xl text-3xl">
            Chairul
          </h1>
        </div>
        <div className="w-8/12">
          <ul className="flex justify-center items-center xl:space-x-10 space-x-6">
            {menus.map((menu) => {
              return (
                <li
                  key={menu.path}
                  className={`font-normal xl:text-lg ${
                    menu.isActive ? "border-b-2 border-b-[#FF499E]" : ""
                  } `}
                >
                  <a href={menu.path}>{menu.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-2/12 flex justify-end">
          <button className="rounded-lg font-semibold border-2 border-[#FF499E] px-6 py-1 text-[#FF499E]">
            Resume
          </button>
        </div>
      </nav>
    </div>
  );
};
