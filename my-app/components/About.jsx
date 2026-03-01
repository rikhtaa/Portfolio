"use client";

import { Cover } from "@/components/ui/cover";

export  function About() {
  return (
    <section id="about" className="relative min-h-[100svh] flex items-center justify-center text-center px-6 sm:px-10 lg:px-16">
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          About <Cover>Me</Cover>
        </h1>

        <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed mb-6">
          Hi, I’m <span className="text-blue-500 font-semibold">Rekhta Menahil</span>, a passionate Full-Stack Developer. 
          I enjoy building <span className="font-semibold text-white">clean, scalable, and user-focused web applications</span> 
          that solve real-world problems.
        </p>

        <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed mb-6">
          My journey started with curiosity and a love for coding. Over time, I’ve explored both front-end and back-end technologies, 
          learning to turn ideas into reality with elegant and efficient code.
        </p>

        <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed">
          When I’m not coding, I love exploring new tech trends, improving my design skills, and creating projects that make an impact. 
          Let’s build something amazing together!
        </p>
      </div>
    </section>
  );
}