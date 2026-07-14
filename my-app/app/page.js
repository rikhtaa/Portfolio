import {HeroSection} from "@/components/HeroSection";
import { Projects } from "@/components/Projects";
import {Footer} from "@/components/Footer";
import { HeroNav } from "@/components/Navbar";
import { BackgroundLines } from "@/components/ui/BackgroundLines";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";

export default function Home() {
  return (
   <>
   <HeroNav/>
   <HeroSection/>
   <Skills/>
   <About/>
   <Projects/>
   <BackgroundLines/>
   <Footer/>
   </>
  );
}
