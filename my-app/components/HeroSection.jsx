import { Skills } from "@/components/Skills";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Cover } from "@/components/ui/cover";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { ShootingStars } from "@/components/ui/ShootingStars";
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Dawood junaid",
    designation: "Software Engineer",
    image:
      "/images/sir dawood.jpg",
  },
];
export default function HeroSection() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.4fr] lg:gap-[290px]" >
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
        <a href="/">
          <Image
            src="/images/logo.png"
            width={120}
            height={80}
            className="h-full max-h-[80px] object-contain object-center"
            alt="logo"
          />
        </a>
        <div className="flex flex-col justify-center h-[80%]">
          <span className="text-[#4e69e0] font-[600]">Hello I'm</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:pb-10 relative z-20 font-bold tracking-tight">
            Rekhta 
            Menahil, <br />
            Full-stack <Cover>Developer</Cover>.
          </h2>
          <a
            href="#"
            className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]"
          >
            Let’s Work Together &rarr;
          </a>
          <div className="flex flex-row mt-[60px]">
            <AnimatedTooltip items={people} />
          </div>
          <p className="max-w-xl  text-[1rem] text-start mt-[10px] md:text-lg text-neutral-700 dark:text-neutral-400">
            Our Team Members
          </p>
        </div>
      </div>
      {/* add your professional image */}
      {/* <div className="w-full h-full flex items-end bg-[#0d0d0e]">
        <Image
          src="/images/model2.png"
          width={800}
          height={1200}
          className="w-full max-h-[90vh] object-contain object-bottom"
          alt="model"
        />
      </div> */}
      <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">
        <a
          href="#contact"
          className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-[#333333] text-white font-[600]rounded-[30px] mx-auto pb-[2px]"
        >
          Hire Me
        </a>

        <h2 className="bg-clip-text lg:mt-[100px] text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
          About Me
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          I am a web developer specializing in building clean, scalable, and user-focused applications.
        </p>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
           With a strong foundation in full-stack development, I focus on writing efficient code, solving complex problems, and delivering solutions that create real impact.
        </p>
        <Skills />
      </div>

      <ShootingStars className="z-[-1]" />
      <StarsBackground className="z-[-1]" />
    </div>
  );
}
