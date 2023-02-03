import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="relative space-y-5 pb-20" id="footer">
      <div className="flex items-center">
        <div className="w-5/12 h-2 bg-[#FF499E]"></div>
        <div className="w-2/12">
          <h2 className="font-semibold text-2xl text-center">Say Hello!</h2>
        </div>
        <div className="w-5/12 h-2 bg-[#FF499E]"></div>
      </div>
      <div className="bg-[#FF499E] py-10">
        <div className="flex justify-center items-center space-x-14 mt-14">
          <div className="w-4/12 flex justify-center items-center bg-[#E5428E] py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span className="text-lg ml-3">chairulanmm@gmail.com</span>
          </div>
          <div className="w-4/12 flex justify-center items-center bg-[#E5428E] py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <span className="text-lg ml-3">(+62) 82114069625</span>
          </div>
        </div>
        <div className="mt-28 mb-14 flex justify-center items-center space-x-5">
          <button className="mt-0.5">
            <Icon icon="typcn:social-instagram" color="black" height="30" />
          </button>
          <button>
            <Icon icon="akar-icons:linkedin-fill" color="black" height="30" />
          </button>
          <button className="mt-0.5">
            <Icon icon="mdi:twitter" color="black" height="30" />
          </button>
          <button className="mt-1">
            <Icon icon="fe:github-alt" color="black" height="30" />
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-4/12 h-2 bg-[#FF499E]"></div>
        <div className="w-4/12">
          <h2 className="font-semibold text-2xl text-center">
            “Thanks For Scrolling”
          </h2>
        </div>
        <div className="w-4/12 h-2 bg-[#FF499E]"></div>
      </div>
    </footer>
  );
};
