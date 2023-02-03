import {
  Navbar,
  Hero,
  About,
  Skills,
  Education,
  Projects,
  Footer,
} from "./components";

export default function App() {
  return (
    <div className="bg-[#0D1E29] font-poppins text-white relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}
