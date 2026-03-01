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
  <div className="relative w-full overflow-x-hidden">
  <div className="grid lg:grid-cols-2 items-center w-[90%] max-w-[1200px] mx-auto py-16 md:py-20 lg:py-28 gap-12 lg:gap-20">

    {/* LEFT SIDE */}
    <div className="flex flex-col justify-center">

      <a href="/" className="mb-8">
        <Image
          src="/images/logo.png"
          width={120}
          height={80}
          className="object-contain"
          alt="logo"
        />
      </a>

      <span className="text-[#4e69e0] font-semibold mb-2">
        Hello I'm
      </span>

      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">

        Rekhta Menahil <br />
        <span className="inline-block mt-2">
          Full-stack <Cover>Developer</Cover>
        </span>
      </h1>

      <p className="mt-6 max-w-md text-sm md:text-base text-neutral-700 dark:text-neutral-400">
        I build clean, scalable and user-focused web applications that solve real problems.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-[#4e69e0] text-white font-semibold text-center hover:bg-[#3d56c5] transition-all"
        >
          Hire Me
        </a>

        <a
          href="#projects"
          className="px-6 py-3 rounded-full border border-neutral-600 text-white font-semibold text-center hover:bg-white/10 transition-all"
        >
          View Projects
        </a>

      </div>

    </div>

    <div className="hidden lg:flex justify-center items-end">
      {/* for the image (future consideration) */}
      {/* 
      <Image
        src="/images/model2.png"
        width={800}
        height={1200}
        className="max-h-[85vh] object-contain object-bottom"
        alt="model"
      />
      */}
    </div>

  </div>

  {/* Background Effects */}
  <ShootingStars className="z-[-1]" />
  <StarsBackground className="z-[-1]" />

</div>
  );
}
