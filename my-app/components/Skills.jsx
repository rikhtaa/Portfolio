"use client";
import { animate, motion } from "motion/react";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { SiReact, SiNodedotjs, SiDocker, SiTypescript, SiNextdotjs } from "react-icons/si";

export function Skills() {
  return (
    <div className="flex flex-col mt-[8px] justify-start items-center">
      <h3 className="text-xl mb-[-50px] md:mb-[-100px] font-bold text-neutral-200">
        Skills
      </h3>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </div>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [".circle-1", { scale, transform }, { duration: 0.8 }],
    [".circle-2", { scale, transform }, { duration: 0.8 }],
    [".circle-3", { scale, transform }, { duration: 0.8 }],
    [".circle-4", { scale, transform }, { duration: 0.8 }],
    [".circle-5", { scale, transform }, { duration: 0.8 }],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <ReactLogo className="h-5 w-5" />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <NodeLogo className="h-6 w-6" />
        </Container>
        <Container className="circle-3">
          <DockerLogo className="h-8 w-8" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <TypeScriptLogo className="h-6 w-6" />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <NextLogo className="h-6 w-6" />
        </Container>
      </div>
    </div>
  );
};

export const ReactLogo = ({ className }) => (
  <SiDocker className={cn("text-blue-400", className)} />
);

export const NodeLogo = ({ className }) => (
  <SiNodedotjs className={cn("text-green-500", className)} />
);

export const DockerLogo = ({ className }) => (
<SiReact className={cn("text-cyan-400", className)} />
);

export const TypeScriptLogo = ({ className }) => (
  <SiTypescript className={cn("text-blue-600", className)} />
);

export const NextLogo = ({ className }) => (
  <SiNextdotjs className={cn("text-gray-900 dark:text-white", className)} />
);

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
         shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
        className
      )}
    >
      {children}
    </div>
  );
};
