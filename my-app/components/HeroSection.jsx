import { Skills } from "@/components/Skills";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Cover } from "@/components/ui/cover";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { ShootingStars } from "@/components/ui/ShootingStars";
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
export default function HeroSection() {
  return (
    <div
      className="w-full overflow-x-hidden min-h-screen grid 
                 lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]"
    >
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
          <span className="text-[#4e69e0] font-[600]">Its Me</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:pb-10 relative z-20 font-bold tracking-tight">
            Rekhta 
            Menahil, <br />
            Web <Cover>Developer</Cover>.
          </h2>
          <a
            href="#"
            className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]"
          >
            Hire Me &rarr;
          </a>
          <div className="flex flex-row mt-[60px]">
            <AnimatedTooltip items={people} />
          </div>
          <p className="max-w-xl  text-[1rem] text-start mt-[10px] md:text-lg text-neutral-700 dark:text-neutral-400">
            Our Team Members
          </p>
        </div>
      </div>
      <div className="w-full h-full flex items-end bg-[#0d0d0e]">
        <Image
          src="/images/model2.png"
          width={800}
          height={1200}
          className="w-full max-h-[90vh] object-contain object-bottom"
          alt="model"
        />
      </div>
      <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">
        <a
          href="#"
          className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-[#333333] text-white font-[600]rounded-[30px] mx-auto pb-[2px]"
        >
          Hire Me
        </a>

        <h2 className="bg-clip-text mt-[100px] text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
          About Me
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
        <Skills />
      </div>

      <ShootingStars className="z-[-1]" />
      <StarsBackground className="z-[-1]" />
    </div>
  );
}
