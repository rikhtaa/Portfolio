import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonial";
// import {Contact} from '@/components/Contact'
import Footer from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { BackgroundLines } from "@/components/ui/BackgroundLines";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <Services/>
   <Projects/>
   <Resume/>
   <Testimonials/>
   <Pricing/>
   <BackgroundLines/>
   <Footer/>
   </>
  );
}
