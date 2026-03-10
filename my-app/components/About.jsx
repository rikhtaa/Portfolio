"use client";

import { Cover } from "@/components/ui/cover";

export  function About() {
  return (
    <section id="about" className="relative min-h-[100svh] flex items-center justify-center text-center px-6 sm:px-10 lg:px-16">
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          About <Cover>Me</Cover>
        </h1>

        <p class="text-neutral-400 text-lg sm:text-xl leading-relaxed mb-6">
  Hi, I’m <span class="text-blue-500 font-semibold">Rekhta Menahil</span>, a 2nd-year Computer Science student and Full-Stack Developer focused on 
  <span class="font-semibold text-white">backend engineering and system design</span>.
</p>

<p class="text-neutral-400 text-lg sm:text-xl leading-relaxed mb-6">
  I’m currently building a microservices-based MERN application to learn how production-grade systems are designed, 
  including secure authentication, scalable APIs, and distributed services.
</p>

<p class="text-neutral-400 text-lg sm:text-xl leading-relaxed">
  Outside of coding, I enjoy reading, exploring new technologies, 
  and learning Japanese.
</p>
      </div>
    </section>
  );
}
