import React, { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [modalOn, setModalOn] = useState(false);
  function toggleModal() {
    setModalOn(!modalOn);
  }

  return (
    <>
      <nav className="fixed flex items-center justify-center h-15 w-full z-50">
        <div className="hidden lg:block lg:w-40 h-full bg-gradient-to-r from-white/0 to-white/80"></div>
        <div className="flex items-center justify-between w-full h-full bg-white/80">
          <div className="flex items-center">
            {/* LOGO */}
            <div className="flex gap-2 items-center justify-center px-4 sm:px-10 py-5">
              <img src="../../themewagon/navbar/Logo.png" alt="Logo" className="w-5" />
              <p className="text-xl font-bold bg-gradient-to-r from-[#C381DB] to-[#4E92F9] bg-clip-text text-transparent">
                Klean
              </p>
            </div>
            {/* NAVIGATION LINKS */}
            <ul className="hidden md:flex justify-center md:gap-5 lg:gap-8 text-black  font-light text-xs">
              <li>
                <Link to="/" className="flex items-center gap-1">
                  <span className="hover:text-[#4E92F9]">Home</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-3 hidden lg:block">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-1">
                  <span className="hover:text-[#4E92F9]">Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-3 hidden lg:block">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/details" className="flex items-center gap-1">
                  <span className="hover:text-[#4E92F9]">Details</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-3 hidden lg:block">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/features" className="flex items-center gap-1">
                  <span className="hover:text-[#4E92F9]">Features</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-3 hidden lg:block">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="flex items-center gap-1">
                  <span className="hover:text-[#4E92F9]">Projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-3 hidden lg:block">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/team" className="flex items-center gap-1">
                  <span className="hover:text-[#4E92F9]">Team</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-3 hidden lg:block">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-1">
                  <span className="hover:text-[#4E92F9]">Contact</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-3 hidden lg:block">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          {/* BUTTONS */}
          <div className="flex flex-row items-center gap-2 pr-4 lg:ml-3 lg:w-50">
            <button className="text-[#4E92F9] text-sm pr-3 hover:text-blue-300 cursor-pointer">
              Log In
            </button>
            <button className="text-sm bg-white drop-shadow-[0_0_10px_rgba(0,0,255,0.3)] p-2 px-3 rounded-lg transition-all duration-200 hover:drop-shadow-[0_0_15px_rgba(161,82,255,0.6)] cursor-pointer">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C381DB] to-[#4E92F9]">
                Sign Up
              </span>
            </button>
            <div
              onClick={toggleModal}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-[#C381DB]">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {modalOn && (
                <div className="absolute top-0 right-0">
                  <ul className="w-50 flex flex-col justify-center p-4 gap-3 text-purple-950 text-xl bg-gradient-to-r to-purple-200 from-indigo-200 shadow-2xl/80 rounded-bl-2xl">
                    <li>
                      <Link to="/" className="flex items-center gap-1">
                        <span className="hover:text-[#4E92F9]">Home</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-3 hidden lg:block">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Link>
                    </li>
                    <hr className="border-slate-100"/>
                    <li>
                      <Link to="/services" className="flex items-center gap-1">
                        <span className="hover:text-[#4E92F9]">Services</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-3 hidden lg:block">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Link>
                    </li>
                    <hr className="border-slate-100"/>
                    <li>
                      <Link to="/details" className="flex items-center gap-1">
                        <span className="hover:text-[#4E92F9]">Details</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-3 hidden lg:block">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Link>
                    </li>
                    <hr className="border-slate-100"/>
                    <li>
                      <Link to="/features" className="flex items-center gap-1">
                        <span className="hover:text-[#4E92F9]">Features</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-3 hidden lg:block">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Link>
                    </li>
                    <hr className="border-slate-100"/>
                    <li>
                      <Link to="/projects" className="flex items-center gap-1">
                        <span className="hover:text-[#4E92F9]">Projects</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-3 hidden lg:block">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Link>
                    </li>
                    <hr className="border-slate-100"/>
                    <li>
                      <Link to="/team" className="flex items-center gap-1">
                        <span className="hover:text-[#4E92F9]">Team</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-3 hidden lg:block">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Link>
                    </li>
                    <hr className="border-slate-100"/>
                    <li>
                      <Link to="/contact" className="flex items-center gap-1">
                        <span className="hover:text-[#4E92F9]">Contact</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-3 hidden lg:block">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* DROP DOWN */}
        </div>
        <div className="hidden lg:block lg:w-40 h-full bg-gradient-to-l from-white/0 to-white/80"></div>
      </nav>
      <div className="h-15 w-full"></div>
    </>
  );
}
