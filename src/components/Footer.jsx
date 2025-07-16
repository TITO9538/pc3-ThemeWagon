import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full min-h-[850px] flex flex-col justify-between bg-violet-200/30 bg-[url('../../themewagon/footer/BackgroundElements.png')] bg-cover bg-center">
        <section className="w-full min-h-[430px] flex flex-col justify-center items-center">
          <h3 className="w-fit text-xl font-bold md:font-normal sm:text-2xl md:text-4xl lg:text-5xl lg:h-20 bg-gradient-to-r from-[#C381DB] to-[#4E92F9] bg-clip-text text-transparent">
            Exclusively by ThemeWagon
          </h3>
          <p className="text-xs text-gray-500 text-center px-4 py-3 max-w-100">
            Klean is an elegant HTML5 template and a perfect starting point for your next SaaS
            oriented site, carefully curated by ThemeWagon
          </p>
          <button className="bg-gradient-to-r from-[#C381DB] to-[#4E92F9] px-7 py-2 text-white text-sm rounded-3xl mt-5 drop-shadow-[0_10px_5px_rgba(0,0,255,0.3)]">
            Download Free
          </button>
        </section>
        <footer className="w-full flex flex-col items-center justify-between px-5 bg-white/30 min-h-[420px] md:min-h-[320px] backdrop-blur-md">
          <section className="flex flex-col w-80 md:w-180 lg:w-250">
            <div className="h-55 md:h-30 my-10 flex flex-col md:flex-row items-center justify-between">
              <div className="flex gap-3 mb-5 md:gap-10 md:mb-0 text-gray-400 text-xs font-light">
                <div>
                  <h3 className="text-gray-700 text-sm font-medium mb-3">About</h3>
                  <span>
                    <p>Prices</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Career</p>
                  </span>
                </div>
                <div>
                  <h3 className="text-gray-700 text-sm font-medium mb-3">Resources</h3>
                  <span>
                    <p>Terms</p>
                    <p>Help</p>
                    <p>Privacy</p>
                  </span>
                </div>
                <div>
                  <h3 className="text-gray-700 text-sm font-medium mb-3">Team</h3>
                  <span>
                    <p>Developer</p>
                    <p>Designer</p>
                  </span>
                </div>
                <div>
                  <h3 className="text-gray-700 text-sm font-medium mb-3">Blog</h3>
                  <span>
                    <p>CEO</p>
                    <p>Lifestyle</p>
                    <p>Article</p>
                    <p>Tech</p>
                  </span>
                </div>
              </div>
              <div className="h-full flex flex-col items-start gap-4">
                <h3 className="text-gray-700 text-sm font-medium">Follow Us</h3>
                <div className="flex gap-1">
                  <img src="../../themewagon/footer/Frame 402.svg" alt="facebook" className="w-6" />
                  <img src="../../themewagon/footer/Frame 403.svg" alt="twiter" className="w-6" />
                  <img src="../../themewagon/footer/Frame 404.svg" alt="linkedin" className="w-6" />
                  <img src="../../themewagon/footer/Frame 405.svg" alt="youtube" className="w-6" />
                </div>
                <h3 className="text-gray-700 text-sm font-medium">Subscribe to our newsletter</h3>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-65 pl-8 px-4 py-2 rounded-full bg-white/30 border border-white text-xs text-[#A2BDE5] font-extralight focus:outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4 text-[#A2BDE5] absolute top-2 left-3 z-50">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <img src="../../themewagon/footer/Button.svg" alt="Button to send" className="absolute top-[3px] left-57 z-50"/>
                </div>
              </div>
            </div>
            <hr className="my-5 border-indigo-200" />
            <div className="flex flex-col md:flex-row items-center justify-between text-xs font-light text-gray-500">
              <div className="flex gap-3">
                <span>All rights Reserved</span>
                <span className="font-medium">© Your Company, 2021</span>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center">Made with</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-3 text-red-400">
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                <span className="font-medium">Themewagon</span>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}
