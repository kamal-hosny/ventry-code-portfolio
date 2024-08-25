"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading text-center px-4">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid gap-8 mt-10 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <div
            className="h-[25rem] flex items-center justify-center w-full max-w-[20rem] lg:max-w-[24rem] xl:max-w-[28rem]"
            key={item.id}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <div className="border-[#141729] border-2 p-4 rounded-lg h-full flex flex-col justify-between">
                <div className="relative flex items-center justify-center overflow-hidden h-[20vh] lg:h-[30vh] mb-4">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img
                      src="/bg.png"
                      alt="bgimg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold text-lg lg:text-xl xl:text-2xl line-clamp-1">
                  {item.title}
                </h1>

                <p className="text-sm text-[#BEC1DD] mt-2 mb-4 line-clamp-2">
                  {item.des}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-2">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                      >
                        <img src={icon} alt="icon5" className="p-1 w-3/4" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm  text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ml-2 lg:ml-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
