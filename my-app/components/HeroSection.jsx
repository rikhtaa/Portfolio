"use client"
import { Cover } from "@/components/ui/cover";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { ShootingStars } from "@/components/ui/ShootingStars";

export  function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-center">

      <div className="max-w-2xl px-6 sm:px-10 lg:px-16">

        <p className="text-blue-500 font-semibold text-sm mb-5 tracking-wide">
          Hello, I’m
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
          Rekhta Menahil
        </h1>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-neutral-300 font-semibold">
            Full-Stack <Cover>Developer</Cover>
        </h2>

        <p className="mt-6 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
          I build clean, scalable and user-focused web applications that solve real problems.
        </p>

        <div className="mt-8">
          <a
  href="#contact"
  className="inline-block px-7 py-3 rounded-full border border-neutral-600 text-white font-semibold
             hover:bg-white/20 hover:text-blue-400 hover:scale-105 transition-all duration-300"
>
  Hire Me
</a>
        </div>

      </div>
         {/* BACKGROUND */}
      <ShootingStars className="z-[-1]" />
      <StarsBackground className="z-[-1]" />

    </section>
  );
}