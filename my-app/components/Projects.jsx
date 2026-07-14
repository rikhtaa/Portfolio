"use client";

import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "B2B SaaS Platform",
    title: "AI-Powered Customer Support",
    description:
      "A multi-tenant customer support SaaS with an embeddable AI chat widget. RAG-powered AI agents handle chat and voice calling via Vapi, with org-scoped auth and role-based access control.",
    stack: ["Next.js", "Convex", "Turborepo", "Clerk", "Vapi"],
    link: "https://support-platform-web-xi.vercel.app",
  },
  {
    category: "E-commerce Website",
    title: "Multi-Vendor Marketplace",
    description:
      "A multi-vendor e-commerce platform built with 10+ independent microservices in an Nx monorepo. API gateway with rate limiting, Kafka event streaming, JWT auth with token rotation, and Stripe payments.",
    stack: ["Next.js", "Nx Monorepo", "MongoDB", "Kafka", "Stripe"],
    link: "https://github.com/rikhtaa/multi-vendor-ecommerce-saas",
  },
  {
    category: "Spline Animation",
    title: "Immersive 3D Interactive Design",
    description:
      "A 3D interactive UI built with Spline and React — exploring how 3D scenes can be embedded and controlled directly inside a web app while staying performant.",
    stack: ["React", "Spline"],
    link: "https://react-spline-interactive-ui.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16">
      <h2 className="max-w-6xl mx-auto text-3xl md:text-5xl font-bold text-white mb-12">
        Recent Projects
      </h2>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl p-6
             transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1
             hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          >
            <p className="text-blue-500 text-xs font-semibold tracking-wide uppercase mb-2">
              {project.category}
            </p>

            <h3 className="text-white text-xl font-bold mb-3 leading-snug">
              {project.title}
            </h3>

            <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-neutral-400 border border-neutral-700 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-white font-semibold hover:text-blue-400 transition-colors"
              >
                View project <ArrowUpRight size={16} strokeWidth={2} />
              </a>
            ) : (
              <span className="text-sm text-neutral-600">Private repo</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}