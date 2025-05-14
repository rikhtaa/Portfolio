"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome
} from "@tabler/icons-react";
import { Code2Icon, DollarSignIcon, MailIcon, Settings2Icon, StarIcon } from "lucide-react";
import { GoProjectRoadmap } from "react-icons/go";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Services",
      icon: (
        <Code2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Projects",
      icon: (
        <Settings2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Resume",
      icon: (
        <GoProjectRoadmap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#resume",
    },
    {
      title: "Testimonials",
      icon: (
        <StarIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#testimonials",
    },

    {
      title: "Pricing",
      icon: (
        <DollarSignIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#pricing",
    },
    {
      title: "Contact",
      icon: (
        <MailIcon  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
      <FloatingDock 
        // only for demo, remove for production
        items={links} />
    </div>
  );
}
