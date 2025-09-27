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
      icon: <IconTerminal2 />,
    },
    {
      title: "Back-End Development",
      description:
        "Designing and building secure, scalable, and efficient server-side systems.",
      icon: <IconAdjustmentsBolt />,
    },

    {
       title: "DevOps & Deployment",
      description: "Streamlining development workflows with CI/CD, cloud deployment, and automation.",
       icon: <IconCloud />,
     },
     {
      title: "Collaboration & Teamwork",
      description: "Thriving in cross-functional teams and driving projects from concept to launch.",
      icon: <IconRouteAltLeft />,
    },
  
  ];
  return (
    <div className="flex flex-col" id="services">
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-white text-xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>Our Services</Cover>
        </h2>
        <p className="max-w-xl  text-[1rem] mt-[20px]text-center mt-[10px] md:text-lg text-neutral-700 dark:text-neutral-400">
          We Provide You Quality Of Services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
