import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function Resume() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[30px]" id="resume">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>Freelancing</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">2019 - 2023</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Work as a FullStack Developer
            </p>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>AxcelerateAI</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">May 2019 - May 2023</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Work as a FullStack Developer
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>Govt College</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">2019 - 2023</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              FSC Computer-Science
            </p>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>ABC University</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">2022 - 2025</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Software Developer
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
