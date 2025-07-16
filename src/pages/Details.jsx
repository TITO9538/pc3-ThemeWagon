import React from "react";

export default function Details() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-20 my-15 mt-30 md:flex-row">
        <div>
          <img
            src="../../themewagon/3.details/illustration3.png"
            alt="illustration3"
            className="w-70 md:w-100"
          />
        </div>
        <div className="w-70 md:w-90 flex flex-col gap-8 md:gap-3 text-[#5A6980] text-sm">
          <h4 className="text-xl font-medium text-[#242A33]">
            A creative team which builds stunning UI/UX
          </h4>
          <p>
            Today, I'd like to show you some incredible Sign Up screen app UI ideas and concepts
            that offer a modern user experience. The most stunning, cutting-edge UI/UX.
          </p>
          <p>
            Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a
            perfect choice, carefully curated by{" "}
            <span className="text-[#242A33] font-semibold">ThemeWagon</span>
          </p>
          <button className="w-30 h-9 border rounded-xl border-violet-400 bg-clip-text text-transparent bg-gradient-to-r from-[#C381DB] to-[#4E92F9]">
            Read More
          </button>
        </div>
      </section>
      <img src="../../themewagon/3.details/illustration1.png" alt="" className="absolute top-30 z-[-100]"/>
      <img src="../../themewagon/3.details/illustration2.png" alt="" className="absolute top-90 right-0 z-[-100]"/>
      <section className="flex flex-col items-center justify-center gap-20 my-15 md:flex-row mb-30">
        <div className="md:hidden">
          <img
            src="../../themewagon/3.details/illustration6.png"
            alt="illustration3"
            className="w-70 md:w-100"
          />
        </div>
        <div className="w-70 md:w-90 flex flex-col gap-8 md:gap-3 text-[#5A6980] text-sm">
          <h4 className="text-xl font-medium text-[#242A33]">
            Devoted to defining the cutting edge
          </h4>
          <p>
            "This new creation is cutting-edge technology," says the researcher, "whose study
            originates from a business at the forefront of space science."
          </p>
          <p>
            Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a
            perfect choice, carefully curated by ThemeWagon
            <span className="text-[#242A33] font-semibold">ThemeWagon</span>
          </p>
          <button className="w-30 h-9 border rounded-xl border-violet-400 bg-clip-text text-transparent bg-gradient-to-r from-[#C381DB] to-[#4E92F9]">
            Read More
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="../../themewagon/3.details/illustration6.png"
            alt="illustration3"
            className="w-70 md:w-100"
          />
        </div>
      </section>
    </>
  );
}
