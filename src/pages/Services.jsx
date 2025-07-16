import React from "react";

export default function Services() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="text-[#242A33] text-2xl font-medium mt-8 mb-3 md:text-3xl">Service</h3>
        <p className="w-70 text-[#5A6980] font-light text-sm text-center md:w-120 mb-15">
          We offer youth with chances for career development in their practice. We also support a
          wide range of services to ensure client satisfaction
        </p>
      </div>
      <img
        src="../../public/themewagon/2.services/illustration1.png"
        alt="illustration1"
        className="w-50 absolute top-40 right-40 z-[-10]"
      />
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row mb-10">
        <article className="h-[450px] w-[300px] flex flex-col items-center justify-center border border-white bg-white/20 backdrop-blur-md rounded-3xl drop-shadow-[0_0_10px_rgba(0,0,225,0.1)]">
          <div className="h-[50%] flex items-center justify-center">
            <img src="../../themewagon/2.services/icon1.png" alt="icon1" className="w-30" />
          </div>
          <div className="h-[50%] flex flex-col items-center justify-between px-8">
            <h4 className="text-[#485466] font-medium text-xl">Send Texts Instantly</h4>
            <p className="text-[#5A6980] text-sm font-light">
              Financial planning, forecasting and adjusting rapidly with customer demands and
              budgets.
            </p>
            <div className="text-[#4E92F9] flex gap-2 pr-20 pb-5">
              <p>Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </article>
        <article className="h-[450px] w-[300px] flex flex-col items-center justify-center border border-white bg-white/80 backdrop-blur-md rounded-3xl drop-shadow-[0_0_10px_rgba(0,0,225,0.2)]">
          <div className="h-[50%] flex items-center justify-center">
            <img src="../../themewagon/2.services/icon2.png" alt="icon1" className="w-30" />
          </div>
          <div className="h-[50%] flex flex-col items-center justify-between px-8">
            <h4 className="text-[#485466] font-medium text-xl">Better Organized</h4>
            <p className="text-[#5A6980] text-sm font-light">
              Latest technology and experienced guidance, trained HR specialists to keep updated.
            </p>
            <div className="text-[#4E92F9] flex gap-2 pr-20 pb-5">
              <p>Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </article>
        <article className="h-[450px] w-[300px] flex flex-col items-center justify-center border border-white bg-white/20 backdrop-blur-md rounded-3xl drop-shadow-[0_0_10px_rgba(0,0,225,0.1)]">
          <div className="h-[50%] flex items-center justify-center">
            <img src="../../themewagon/2.services/icon3.png" alt="icon1" className="w-30" />
          </div>
          <div className="h-[50%] flex flex-col items-center justify-between px-8">
            <h4 className="text-[#485466] font-medium text-xl">Analytical Statistics</h4>
            <p className="text-[#5A6980] text-sm font-light">
              Messages, real-time reminders, memos, and many more will keep your team in sync.
            </p>
            <div className="text-[#4E92F9] flex gap-2 pr-20 pb-5">
              <p>Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
