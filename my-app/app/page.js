import {HeroSection} from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonial";
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
   <Services/>
   <Projects/>
   <Resume/>
   {/* <Testimonials/> */}
   {/* <Pricing/> */}
   <BackgroundLines/>
   <Footer/>
   </>
  );
}
