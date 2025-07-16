import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="text-[#242A33] text-2xl font-medium mt-8 mb-3 md:text-3xl">Our Projects</h3>
        <p className="w-70 text-[#5A6980] font-light text-sm text-center md:w-120 mb-15">
          A project is a single or team activity, combining research and design with best effort.
          Here are some of our team's projects
        </p>
      </div>
      <section className="w-60 md:w-200 my-5 mb-30 p-3 bg-white/40 backdrop-blur-md border-2 rounded-2xl border-white md:grid md:grid-cols-3 md:grid-rows-[auto_140px_auto]">
        <img
          src="../../themewagon/5.projects/image1.png"
          className="w-full h-auto rounded-xl object-cover row-start-1 p-2"
          alt="Project 1"
        />
        <img
          src="../../themewagon/5.projects/image3.png"
          className="w-full h-auto rounded-xl object-cover row-span-2 row-start-1 p-2"
          alt="Project 2"
        />
        <img
          src="../../themewagon/5.projects/image5.png"
          className="w-full h-auto rounded-xl object-cover row-start-1 p-2"
          alt="Project 3"
        />
        <img
          src="../../themewagon/5.projects/image2.png"
          className="w-full h-auto rounded-xl object-cover row-span-2 row-start-2 p-2"
          alt="Project 4"
        />
        <img
          src="../../themewagon/5.projects/image4.png"
          className="w-full h-full rounded-xl object-cover row-start-3 p-2"
          alt="Project 5"
        />
        <img
          src="../../themewagon/5.projects/image6.png"
          className="w-full h-auto rounded-xl object-cover row-span-2 row-start-2 p-2"
          alt="Project 6"
        />
      </section>
    </div>
  );
}
