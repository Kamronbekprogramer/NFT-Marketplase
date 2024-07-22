import React from "react";
import Image from "next/image";
import Wallet from "@/public/wallet.png";
import Collection from "@/public/collection.png";
import Earning from "@/public/earning.png";

const Index = () => {
  return (
    <div className="HowItWorks w-[1519px] h-[738px] px-[195px] py-20 bg-zinc-800 flex-col justify-start items-center gap-12 inline-flex">
      <div className="SectionHeadline flex-col justify-start items-start gap-2.5 flex">
        <div className="HowItWorks w-[1050px] text-white text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">
          How it works
        </div>
        <div className="FindOutHowToGetStarted w-[1050px] text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">
          Find out how to get started
        </div>
      </div>
      <div className="CardRow justify-start items-start gap-[30px] inline-flex">
        <div className="InfoCard w-[330px] px-[30px] pt-2.5 pb-[30px] bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
          <div className="Icon w-[250px] h-[250px] relative">
            <Image src={Wallet} alt="img" />
          </div>
          <div className="CardDetails self-stretch h-[129px] flex-col justify-start items-center gap-2.5 flex">
            <div className="SetupYourWallet self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
              Setup Your wallet
            </div>
            <div className="SetUpYourWalletOfChoiceConnectItToTheNftMarketByClickingTheWalletIconInTheTopRightCorner self-stretch text-center text-white text-base font-normal font-['Work Sans'] leading-snug">
              Set up your wallet of choice. Connect it to the Animarket by
              clicking the wallet icon in the top right corner.
            </div>
          </div>
        </div>
        <div className="InfoCard w-[330px] self-stretch px-[30px] pt-2.5 pb-[30px] bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
          <div className="Icon w-[250px] h-[250px] relative">
            <Image src={Collection} alt="img" />
          </div>
          <div className="CardDetails self-stretch h-[107px] flex-col justify-start items-center gap-2.5 flex">
            <div className="SetupYourWallet self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
              Create Collection
            </div>
            <div className="SetUpYourWalletOfChoiceConnectItToTheNftMarketByClickingTheWalletIconInTheTopRightCorner self-stretch text-center text-white text-base font-normal font-['Work Sans'] leading-snug">
              Upload your work and setup your collection. Add a description,
              social links and floor price.
            </div>
          </div>
        </div>
        <div className="InfoCard w-[330px] self-stretch px-[30px] pt-2.5 pb-[30px] bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
          <div className="Icon w-[250px] h-[250px] relative">
            <Image src={Earning} alt="img" />
            <div className="Group w-[108.49px] h-[61.62px] left-[73.84px] top-[112.15px] absolute"></div>
          </div>
          <div className="CardDetails self-stretch h-[129px] flex-col justify-start items-center gap-2.5 flex">
            <div className="SetupYourWallet self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
              Start Earning
            </div>
            <div className="SetUpYourWalletOfChoiceConnectItToTheNftMarketByClickingTheWalletIconInTheTopRightCorner self-stretch text-center text-white text-base font-normal font-['Work Sans'] leading-snug">
              Choose between auctions and fixed-price listings. Start earning by
              selling your NFTs or trading others.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
