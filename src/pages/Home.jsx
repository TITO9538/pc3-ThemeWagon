import React from "react";
import Services from "./Services";
import Details from "./Details";
import Features from "./Features";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center text-gray-700 md:flex-row">
        <div className="w-60 mt-10 mb-[-30px] flex flex-col items-center font-light text-center md:mb-0 sm:ml-10 md:items-start md:text-start md:ml-10 md:w-150 lg:ml-40">
          <h2 className="w-fit text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#C381DB] to-[#4E92F9] bg-clip-text text-transparent">Bootstrap 5 theme</h2>
          <p className="text-xl lg:text-2xl">crafted <span className="font-medium">by ThemeWagon</span></p>
          <p className="text-xs lg:text-sm">
            ThemeWagon offers an wide array of category-oriented Free and Premium Bootstrap HTML
            Templates and Themes.{" "}
          </p>
          <button className="w-35 h-8 text-white mt-5 text-sm font-medium rounded-md bg-gradient-to-r from-[#C381DB] to-[#4E92F9]">Check Demo</button>
        </div>
        <div className="[mask-image:linear-gradient(to_top,black,transparent)] md:ml-10">
          <img src="../../themewagon/1.home/Illusration.png" alt="Illusration" />
        </div>
      </div>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
      <div className="flex flex-col items-center gap-3 my-2 md:flex-row md:gap-15 md:my-8 md:justify-center lg:gap-30">
        <img src="../../themewagon/1.home/google.png" alt="google" className="w-20"/>
        <img src="../../themewagon/1.home/netflix.png" alt="netflix" className="w-20"/>
        <img src="../../themewagon/1.home/microsoft.png" alt="microsoft" className="w-20"/>
        <img src="../../themewagon/1.home/mailbuster.png" alt="mailbuster" className="w-20"/>
        <img src="../../themewagon/1.home/themewagon.png" alt="themewagon" className="w-20"/>
      </div>
      <div className="mt-5 mb-15 h-px w-full bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
      <Services></Services>
      <Details></Details>
      <Features></Features>
    </>
  );
}
