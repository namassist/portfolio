import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../assets/icons";

export const Socmed = () => {
  return (
    <div className="absolute flex flex-col top-4 -left-[24%] xl:-left-[16%] items-center space-y-5">
      <span className="bg-[#FF499E] h-10 w-0.5"></span>
      <a href="#">
        <InstagramIcon w={22} h={22} />
      </a>
      <a href="#">
        <LinkedinIcon w={22} h={22} />
      </a>
      <a href="#">
        <TwitterIcon w={22} h={22} />
      </a>
      <a href="#">
        <GithubIcon w={22} h={22} />
      </a>
    </div>
  );
};
