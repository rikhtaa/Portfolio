"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiTailwindcss,
  SiVercel,
  SiTurborepo,
  SiPython,
  SiConvex,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const skills = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-neutral-300" },
  { name: "Convex", icon: SiConvex, color: "text-orange-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-neutral-200" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Turborepo", icon: SiTurborepo, color: "text-red-400" },
  { name: "Python", icon: SiPython, color: "text-yellow-300" },
];

export function Skills() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 px-5 sm:px-10 lg:px-16 flex justify-center">
      <div className="w-full max-w-4xl rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/60 p-5 sm:p-8 lg:p-10 text-left">
        <h3 className="text-lg sm:text-2xl font-bold text-neutral-100 mb-6 sm:mb-8">
          Skills &amp; Technologies
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl
                     border border-neutral-800 bg-neutral-900/70
                     hover:border-neutral-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Icon className={cn("h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0", color)} />
              <span className="text-xs sm:text-sm text-neutral-200 font-medium whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}