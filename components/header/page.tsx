'use client'

import React, { useState } from "react";
import User from "@/public/User.svg";
import Home from "@/public/logo.png";
import Hamburger from "@/public/menu.svg"; 
import Close from "@/public/close.svg"; 
import Image from "next/image";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="Navigation w-full h-[100px] px-[50px] py-5 bg-zinc-800 flex justify-between items-center">
        <div className="NavLogo flex items-center gap-2.5">
          <div className="Logo w-[243.41px] h-8 relative cursor-pointer">
            <Image src={Home} alt="logo" className="bg-transparent w-41" />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10"
            onClick={toggleMenu}
          >
            <Image src={menuOpen ? Close : Hamburger} alt="menu" />
          </button>
          <div
            className={`lg:flex ${menuOpen ? "flex" : "hidden"} flex-col lg:flex-row items-center gap-2.5 fixed lg:relative top-[80px] right-0 lg:top-0 lg:right-auto bg-zinc-800 lg:bg-transparent w-full lg:w-auto h-[calc(100%-520px)] lg:h-auto p-5 lg:p-0 rounded-none lg:rounded-none shadow-lg lg:shadow-none z-50`}
          >
            <div className="Marketplace w-full lg:w-[139px] px-5 rounded-[20px] flex justify-center items-center gap-3">
              <div className="cursor-pointer text-center text-white text-base font-semibold font-['Work Sans'] leading-snug hover:text-purple-600 hover:scale-105">
                Marketplace
              </div>
            </div>
            <div className="Rankings w-full lg:w-28 px-5 rounded-[20px] flex justify-center items-center gap-3">
              <div className="cursor-pointer text-center text-white text-base font-semibold font-['Work Sans'] leading-snug hover:text-purple-600 hover:scale-105">
                Rankings
              </div>
            </div>
            <div className="ConnectAWallet w-full lg:w-[174px] px-5 rounded-[20px] flex justify-center items-center gap-3">
              <div className="cursor-pointer text-center text-white text-base font-semibold font-['Work Sans'] leading-snug hover:text-purple-600 hover:scale-105">
                Connect a wallet
              </div>
            </div>
            <div className="SignUp w-full lg:w-[156px] px-[30px] bg-purple-500 rounded-[20px] hover:scale-105 flex justify-center items-center gap-3">
              <div className="User w-5 h-5 relative">
                <Image src={User} alt="user" />
              </div>
              <div className="cursor-pointer text-center py-2 text-white text-base font-semibold font-['Work Sans'] leading-snug">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
