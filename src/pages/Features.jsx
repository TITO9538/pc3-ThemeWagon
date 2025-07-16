import React from "react";

export default function Features() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="text-[#242A33] text-2xl font-medium mt-8 mb-3 md:text-3xl">Features</h3>
        <p className="w-70 text-[#5A6980] font-light text-sm text-center md:w-120 mb-15">
          We provide a number of excellent features that will undoubtedly improve the user
          experience. We also provide a better support system
        </p>
      </div>
      <section className="grid grid-cols-1 place-content-center place-items-center mb-30 sm:grid-cols-2 md:grid-cols-3">
        <article className="w-60 text-center flex flex-col items-center justify-center gap-1 m-10">
          <img src="../../themewagon/4.features/icon1.png" alt="features" className="w-25"/>
          <h4 className="text-sm text-[#6C7E99] font-medium mt-3">Encrypted Mail</h4>
          <p className="text-xs text-[#7E92B2] font-light">A process of encrypting email communications</p>
        </article>
        <article className="w-60 text-center flex flex-col items-center justify-center gap-1 m-10">
          <img src="../../themewagon/4.features/icon2.png" alt="features" className="w-25"/>
          <h4 className="text-sm text-[#6C7E99] font-medium mt-3">Display Sharing</h4>
          <p className="text-xs text-[#7E92B2] font-light">With other participants, you may share your screen</p>
        </article>
        <article className="w-60 text-center flex flex-col items-center justify-center gap-1 m-10">
          <img src="../../themewagon/4.features/icon3.png" alt="features" className="w-25"/>
          <h4 className="text-sm text-[#6C7E99] font-medium mt-3">Private Notebook</h4>
          <p className="text-xs text-[#7E92B2] font-light">Private Notebook is an application that is protected</p>
        </article>
        <article className="w-60 text-center flex flex-col items-center justify-center gap-1 m-10">
          <img src="../../themewagon/4.features/icon4.png" alt="features" className="w-25"/>
          <h4 className="text-sm text-[#6C7E99] font-medium mt-3">App App Assistance</h4>
          <p className="text-xs text-[#7E92B2] font-light">App Assistant is quickly and effectively ran the system</p>
        </article>
        <article className="w-60 text-center flex flex-col items-center justify-center gap-1 m-10">
          <img src="../../themewagon/4.features/icon5.png" alt="features" className="w-25"/>
          <h4 className="text-sm text-[#6C7E99] font-medium mt-3">Multiple Printing</h4>
          <p className="text-xs text-[#7E92B2] font-light">Our canvas prints are crafted on top-notch canvas.</p>
        </article>
        <article className="w-60 text-center flex flex-col items-center justify-center gap-1 m-10">
          <img src="../../themewagon/4.features/icon6.png" alt="features" className="w-25"/>
          <h4 className="text-sm text-[#6C7E99] font-medium mt-3">Free Sketch</h4>
          <p className="text-xs text-[#7E92B2] font-light">Our canvas prints are crafted on top-notch canvas.</p>
        </article>
      </section>
    </div>
  );
}
