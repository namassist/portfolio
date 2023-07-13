import {
  DiGit,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiVisualstudio,
  DiNpm,
  DiGithubAlt,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiPostman,
  SiYarn,
  SiVite,
  SiWebpack,
  SiReactrouter,
} from "react-icons/si";
import {
  BiLogoFigma,
  BiLogoTelegram,
  BiLogoGmail,
  BiLogoInstagram,
} from "react-icons/bi";

export const navigation = [
  {
    id: "#home",
    name: "home",
  },
  {
    id: "#about",
    name: "about",
  },
  {
    id: "#experiences",
    name: "experiences",
  },
  {
    id: "#projects",
    name: "projects",
  },
  {
    id: "#skills",
    name: "skills",
  },
];

export const socialMedia = [
  {
    name: "Telegram",
    url: "https://t.me/namassist",
    icons: <BiLogoTelegram size={25} />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/chairulanmm/",
    icons: <BiLogoGmail size={25} />,
  },
  {
    name: "Github",
    url: "https://github.com/namassist",
    icons: <DiGithubAlt size={25} />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/chrlanmdn/",
    icons: <BiLogoInstagram size={25} />,
  },
];

export const skills = [
  {
    name: "Git",
    icons: <DiGit size={35} />,
    level: "Intermediate",
  },
  {
    name: "HTML",
    icons: <DiHtml5 size={35} />,
    level: "Advanced",
  },
  {
    name: "CSS",
    icons: <DiCss3 size={35} />,
    level: "Intermediate",
  },
  {
    name: "SASS",
    icons: <DiSass size={35} />,
    level: "Intermediate",
  },
  {
    name: "SASS",
    icons: <DiBootstrap size={35} />,
    level: "Intermediate",
  },
  {
    name: "Tailwind",
    icons: <SiTailwindcss size={35} />,
    level: "Intermediate",
  },
  {
    name: "Javascript",
    icons: <DiJavascript1 size={35} />,
    level: "Intermediate",
  },
  {
    name: "Node.js",
    icons: <DiNodejs size={35} />,
    level: "Intermediate",
  },
  {
    name: "React.js",
    icons: <DiReact size={35} />,
    level: "Intermediate",
  },
  {
    name: "Redux",
    icons: <SiRedux size={35} />,
    level: "Intermediate",
  },
  {
    name: "React Native",
    icons: <DiReact size={35} />,
    level: "Beginner",
  },
  {
    name: "Next.js",
    icons: <SiNextdotjs size={35} />,
    level: "Beginner",
  },
];

export const tools = [
  {
    name: "VSCode",
    icons: <DiVisualstudio size={35} />,
    level: "Text Editor",
  },
  {
    name: "Figma",
    icons: <BiLogoFigma size={35} />,
    level: "Tool Design",
  },
  {
    name: "Postman",
    icons: <SiPostman size={35} />,
    level: "Testing API",
  },
  {
    name: "NPM",
    icons: <DiNpm size={35} />,
    level: "Package Manager",
  },
  {
    name: "Yarn",
    icons: <SiYarn size={35} />,
    level: "Package Manager",
  },
  {
    name: "Vite",
    icons: <SiVite size={35} />,
    level: "Build Tool",
  },
  {
    name: "Webpack",
    icons: <SiWebpack size={35} />,
    level: "Build Tool",
  },
  {
    name: "Github",
    icons: <DiGithubAlt size={35} />,
    level: "Version Control",
  },
];

export const experiences = [
  {
    name: "Candradimuka Jabar Coding Camp",
    path: "React.js Web Frontend",
    start: "Aug 2021",
    end: "Sep 2021",
    information: [
      {
        id: 1,
        name: "Learn the basics of Git, HTML, CSS, and JavaScript ES6.",
      },
      {
        id: 2,
        name: "Learn the fundamental concepts of React JS.",
      },
      {
        id: 3,
        name: "Learn state management using React Context.",
      },
      {
        id: 4,
        name: "Deploy a React project.",
      },
    ],
  },
  {
    name: "Studi Independen Bersertifikat Batch 4",
    path: "React and React Native for Front End Developer di Hacktiv8",
    start: "Feb 2023",
    end: "Jun 2023",
    information: [
      {
        id: 1,
        name: "Learn the fundamental concepts of React.",
      },
      {
        id: 2,
        name: "Implement user interface development in React.",
      },
      {
        id: 3,
        name: "Learn state management using Redux.",
      },
      {
        id: 4,
        name: "Learn unit testing using RTL and Jest in React.",
      },
      {
        id: 5,
        name: "Deploy the project online using third-party services.",
      },
    ],
  },
  {
    name: "Unit Kegiatan Mahasiswa Polytechnic Computer Club",
    path: "Head of Software Department",
    start: "May 2021",
    end: "May 2022",
    information: [
      {
        id: 1,
        name: "Providing training on software development.",
      },
      {
        id: 2,
        name: "Generating products and portfolios related to software development.",
      },
      {
        id: 3,
        name: "Assisting with software related aspects in upcoming work programs.",
      },
    ],
  },
];

export const projects = [
  {
    title: "news app",
    repo: "https://github.com/namassist/news-app",
    url: "#",
    desc: "Web portal berita menggunakan ReactJS dan News API untuk mendapatkan data berita terkini berdasarkan keyword tertentu dan dilengkapi fitur menyimpan dan mencari berita",
  },
  {
    title: "e-commerce app",
    repo: "https://github.com/namassist/e-commerce",
    url: "https://nam-commerce.vercel.app/",
    desc: "Website E-Commerce menggunakan fakestore API dilengkapi dengan fitur login, registrasi, homepage, keranjang belanja, checkout, dan riwayat transaksi.",
  },
  {
    title: "movies app",
    repo: "https://github.com/namassist/movie-app",
    url: "https://moviesisst.vercel.app/",
    desc: "Website untuk menampilkan daftar film dari OMDB API dan dilengkapi dengan fitur detail, pencarian dan favorit film",
  },
  {
    title: "lintang nuswantara",
    repo: "https://github.com/namassist/lintang-nuswantara-landing-page",
    url: "https://lintangnuswantara.org",
    desc: "Landing page website untuk organisasi Lintang Nuswantara",
  },
  {
    title: "Bantoonusa",
    repo: "https://github.com/namassist/lintang-nuswantara-landing-page",
    url: "https://lintangnuswantara.org/services",
    desc: "Landing page website jasa pembuatan website bantoonusa",
  },
];
