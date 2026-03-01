"use client"
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { Cover } from "@/components/ui/cover";

export function Services() {
  const features = [
    {
      title: "Front-End Development",
      description:
        "Crafting responsive, accessible, and user-focused interfaces with modern frameworks.",
      icon: <IconTerminal2 size={28} />,
    },
    {
      title: "Back-End Development",
      description:
        "Designing secure, scalable and efficient server-side systems.",
      icon: <IconAdjustmentsBolt size={28} />,
    },
    {
      title: "DevOps & Deployment",
      description:
        "Streamlining workflows with CI/CD, cloud deployment and automation.",
      icon: <IconCloud size={28} />,
    },
    {
      title: "Collaboration & Teamwork",
      description:
        "Driving projects from concept to launch in cross-functional teams.",
      icon: <IconRouteAltLeft size={28} />,
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32">

      <div className="w-[90%] max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
            <Cover>Services</Cover>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
            Delivering high-quality solutions tailored to modern digital needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}

        </div>

      </div>

    </section>
  );
}

const Feature = ({ title, description, icon }) => {
  return (
    <div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 group">

      <div className="text-blue-500 mb-6">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white mb-3 group-hover:translate-x-1 transition duration-300">
        {title}
      </h3>

      <p className="text-sm text-neutral-400 leading-relaxed">
        {description}
      </p>

    </div>
  );
};
