import React from "react";
import Image from "next/image";
import PrimaryDog from "@/public/Primary Photo Placeholder.png";
import SecondaryDog from "@/public/Secondary Photo Placeholder.png";
import SecondaryDog2 from "@/public/dog secondary.png";
import MiniDog from "@/public/mini dog.png";
import Qoziqorin from "@/public/qoziqorin.png";
import QoziqorinMini from "@/public/qoziqorin mini.png";
import QoziqorinMini2 from "@/public/qoziqorin mini 2.png";
import MenAvatar from "@/public/men avatar.png";
import Robot from "@/public/Robot.png";
import RobotMini from "@/public/Robot mini.png";
import RobotMini2 from "@/public/Robot mini 2.png";
import RobotAvatar from "@/public/robot avatar.png";

const Index = () => {
  return (
    <div className="w-full bg-zinc-800 py-20 flex flex-col items-center gap-[60px]">
      <div className="flex flex-col items-center gap-2.5">
        <div className="text-white text-2xl md:text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">
          Trending Collection
        </div>
        <div className="text-white text-lg md:text-[22px] font-normal font-['Work Sans'] capitalize leading-9 text-center">
          Checkout our weekly updated trending collection.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-[30px] max-w-[1050px]">
        <div className="w-full lg:w-[330px] bg-zinc-800 rounded-[20px] flex flex-col justify-start items-start gap-[15px]">
          <div className="w-full flex flex-col justify-start items-start gap-[15px]">
            <Image
              src={PrimaryDog}
              alt="dog"
              className="w-full h-[330px] rounded-[20px]"
            />
            <div className="flex justify-start items-start gap-[15px] w-full">
              <Image
                src={SecondaryDog}
                alt="dog"
                className="w-1/3 h-[100px] rounded-[20px]"
              />
              <Image
                src={SecondaryDog2}
                alt="dog"
                className="w-1/3 h-[100px] rounded-[20px]"
              />
              <div className="w-1/3 h-[100px] px-[15px] py-8 bg-purple-500 rounded-[20px] flex justify-center items-center">
                <div className="text-center text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">
                  1025+
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2.5">
            <div className="text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
              DSGN Animals
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="w-6 h-6 flex justify-center items-center">
                <Image
                  src={MiniDog}
                  alt="dog"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <div className="text-white text-base font-normal font-['Work Sans'] leading-snug">
                MrFox
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[330px] bg-zinc-800 rounded-[20px] flex flex-col justify-start items-start gap-[15px]">
          <div className="w-full flex flex-col justify-start items-start gap-[15px]">
            <Image
              src={Qoziqorin}
              alt="img"
              className="w-full h-[330px] rounded-[20px]"
            />
            <div className="flex justify-start items-start gap-[15px] w-full">
              <Image
                src={QoziqorinMini}
                alt="img"
                className="w-1/3 h-[100px] rounded-[20px]"
              />
              <Image
                src={QoziqorinMini2}
                alt="img"
                className="w-1/3 h-[100px] rounded-[20px]"
              />
              <div className="w-1/3 h-[100px] px-[15px] py-8 bg-purple-500 rounded-[20px] flex justify-center items-center">
                <div className="text-center text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">
                  1025+
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2.5">
            <div className="text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
              Magic Mushrooms
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="w-6 h-6 flex justify-center items-center">
                <Image
                  src={MenAvatar}
                  alt="img"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <div className="text-white text-base font-normal font-['Work Sans'] leading-snug">
                Shroomie
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[330px] bg-zinc-800 rounded-[20px] flex flex-col justify-start items-start gap-[15px]">
          <div className="w-full flex flex-col justify-start items-start gap-[15px]">
            <Image
              src={Robot}
              alt="img"
              className="w-full h-[330px] rounded-[20px]"
            />
            <div className="flex justify-start items-start gap-[15px] w-full">
              <Image
                src={RobotMini}
                alt="img"
                className="w-1/3 h-[100px] rounded-[20px]"
              />
              <Image
                src={RobotMini2}
                alt="img"
                className="w-1/3 h-[100px] rounded-[20px]"
              />
              <div className="w-1/3 h-[100px] px-[15px] py-8 bg-purple-500 rounded-[20px] flex justify-center items-center">
                <div className="text-center text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">
                  1025+
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2.5">
            <div className="text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
              Disco Machines
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="w-6 h-6 flex justify-center items-center">
                <Image
                  src={RobotAvatar}
                  alt="img"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <div className="text-white text-base font-normal font-['Work Sans'] leading-snug">
                BeKind2Robots
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

