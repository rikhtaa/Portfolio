"use client"
import { Cover } from "@/components/ui/cover";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { ShootingStars } from "@/components/ui/ShootingStars";
import useAppSound from "@/app/hooks/useAppSound";

export function HeroSection() {
  const [play] = useAppSound("/sounds/button_sound.mp3");

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-center">

      <div className="max-w-2xl px-6 sm:px-10 lg:px-16">

        <p className="animate-fade-in-up text-blue-500 font-semibold text-sm mb-5 tracking-wide">
          Hi, I&apos;m
        </p>

        <h1
          className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white"
          style={{ animationDelay: "100ms" }}
        >
          Rekhta Menahil
        </h1>

        <h2
          className="animate-fade-in-up mt-4 text-3xl sm:text-4xl lg:text-5xl text-neutral-300 font-semibold"
          style={{ animationDelay: "200ms" }}
        >
          Backend <Cover>Developer</Cover>
        </h2>

        <p
          className="animate-fade-in-up mt-6 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto"
          style={{ animationDelay: "300ms" }}
        >
          Building full-stack applications with a focus on backend engineering.
        </p>

        <div className="animate-fade-in-up mt-8" style={{ animationDelay: "400ms" }}>
          <a
            href="#projects"
            onClick={() => play()}
            className="inline-block px-7 py-3 rounded-full border border-neutral-600 text-white font-semibold
             hover:bg-white/20 hover:text-blue-400 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
        </div>

      </div>
      {/* BACKGROUND */}
      <ShootingStars className="z-[-1]" />
      <StarsBackground className="z-[-1]" />

    </section>
  );
}