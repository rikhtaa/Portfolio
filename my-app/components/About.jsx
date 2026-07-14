"use client";

import { Cover } from "@/components/ui/cover";

export function About() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center text-center px-6 sm:px-10 lg:px-16 py-16 sm:py-24 lg:py-28"
    >

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-5 sm:mb-6">
          About <Cover>Me</Cover>
        </h1>

        <p className="text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-5 sm:mb-6">
          Hi, I&apos;m <span className="text-blue-500 font-semibold">Rekhta Menahil</span>, a backend-focused developer who started coding at 18 with a web development course. Now a 2nd-year CS student working on{" "}
          <span className="font-semibold text-white">SaaS platforms and microservices</span>.
        </p>

        <p className="text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-5 sm:mb-6">
          At CodeBite, I built the backend for a coding battle platform, including challenge versioning, deterministic execution, and match resolution. Alongside that, I&apos;ve worked on a multi-tenant AI support SaaS with RAG agents and voice calling, and a multi-vendor e-commerce platform with microservices.
        </p>

        <p className="text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed">
          Outside of code, I like learning new things: currently reading more books, picking up Japanese, and exploring new tech.
        </p>
      </div>
    </section>
  );
}