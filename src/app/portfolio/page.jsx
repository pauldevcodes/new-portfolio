"use client";
import { useState } from "react";
import { ProjectLists } from "@/utils/data";
import Image from "next/image";
import { karla } from "../fonts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const handleNextClick = () => {
    setIndex(index + 1);
    if (index === (ProjectLists.length - 1)) {
      setIndex(0);
    }
  };
  const handlePrevClick = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(ProjectLists.length - 1);
    }
  };
  let project = ProjectLists[index];

  return (
    <section className=" pt-36 px-8 md:px-10 xl:px-[160px]">
      {/* <button onClick={handleNextClick}>Next</button>
            <button onClick={handlePrevClick}>Prev</button> */}
      <Image src={project.img} alt="project pic" className=" w-full h-1/2" />
      <div className=" mt-14 flex flex-col gap-y-12 lg:flex-row lg:gap-x-12">
        <div className=" flex flex-col items-start gap-y-5 flex-1">
          <div className=" bg-gray-300 h-[1px] w-full md:w-1/2"></div>
          <h2 className={`${karla.className} text-4xl text-slate-900`}>
            {project.name}
          </h2>
          <p className=" text-slate-600 text-sm md:text-base">{project.info}</p>
          <p className=" text-xs text-emerald-600 font-bold">{project.tools}</p>
          <a
            href={project.url}
            target="_blank"
            className=" px-8 py-4 border-2 border-emerald-900 border-solid text-emerald-900 text-sm font-semibold uppercase w-fit rounded cursor-pointer duration-200 hover:text-white hover:bg-emerald-900 hover:shadow-md hover:shadow-emerald-900/50"
          >
            View website
          </a>
          <div className=" bg-gray-300 h-[1px] w-full md:w-1/2"></div>
        </div>
        <div className=" flex-1">
          <h2 className={`${karla.className} text-4xl text-slate-900 mb-5`}>
            Project Background
          </h2>
          <p className=" text-slate-600 text-sm md:text-base">
            {project.background}
          </p>
        </div>
      </div>
      <div className=" mt-10 flex items-center justify-between">
        <button onClick={handlePrevClick} className=" text-slate-600 flex flex-row items-center gap-x-2">
          <ChevronLeftIcon width={20} />
          <span className=" text-sm md:text-base">Previous Project</span>
        </button>
        <button onClick={handleNextClick} className=" text-slate-600 flex flex-row items-center gap-x-2">
          <span className=" text-sm md:text-base">Next Project</span>
          <ChevronRightIcon width={20} />
        </button>
      </div>
    </section>
  );
}
