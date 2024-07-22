import React from "react";
import Image from "next/image";
import Pleaseholder from "@/public/Image Placeholder.png";
import Rocket from "@/public/RocketLaunch.svg";
import Avatar from "@/public/Avatar.png";

const Index = () => {
  return (
    <div className="HeroSection w-full px-6 lg:px-[235px] py-20 bg-zinc-800 flex flex-col lg:flex-row justify-center items-center gap-[30px]">
      <div className="HeroSectionFrame h-auto lg:h-[544px] flex flex-col lg:flex-row justify-start items-start gap-[30px]">
        <div className="HeroTextButtons flex-grow flex flex-col justify-start items-start gap-[30px]">
          <div className="HeadlineSubhead flex flex-col justify-start items-start gap-5">
            <div className="DiscoverDigitalArtCollectNfts text-white text-[36px] lg:text-[67px] font-semibold font-['Work Sans'] capitalize leading-[45px] lg:leading-[73.70px]">
              Discover digital art & Collect NFTs
            </div>
            <div className="NftMarketplaceUiCreatedWithAnimaForFigmaCollectBuyAndSellArtFromMoreThan20kNftArtists text-white text-[16px] lg:text-[22px] font-normal font-['Work Sans'] capitalize leading-7 lg:leading-9">
              NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
            </div>
          </div>
          <div className="Button h-[50px] lg:h-[60px] px-[30px] lg:px-[50px] bg-purple-500 rounded-[20px] flex justify-center items-center cursor-pointer hover:scale-105">
            <div className="Rocketlaunch w-5 h-5 relative">
              <Image src={Rocket} alt="rocket" />
            </div>
            <div className="Button text-center text-white text-base font-semibold font-['Work Sans'] leading-snug ml-3">
              Get Started
            </div>
          </div>
          <div className="AdditionalInfo w-full flex-wrap flex flex-col lg:flex-row justify-start items-start gap-[30px]">
            <div className="TotalSale flex-grow flex flex-wrap   flex-col justify-center items-center">
              <div className="text-white text-[28px] font-bold font-['Space Mono'] capitalize leading-[39.20px]">
                240k+
              </div>
              <div className="text-white text-2xl font-normal font-['Work Sans'] capitalize leading-[38.38px]">
                Total Sale
              </div>
            </div>
            <div className="Auctions flex-grow flex  flex-col justify-start items-start">
              <div className="text-white text-[28px] font-bold font-['Space Mono'] capitalize leading-[39.20px]">
                100k+
              </div>
              <div className="text-white text-2xl font-normal font-['Work Sans'] capitalize leading-[38.38px]">
                Auctions
              </div>
            </div>
            <div className="Artists flex-grow flex flex-col justify-start items-start">
              <div className="text-white text-[28px] font-bold font-['Space Mono'] capitalize leading-[39.20px]">
                240k+
              </div>
              <div className="text-white text-2xl font-normal font-['Work Sans'] capitalize leading-[38.38px]">
                Artists
              </div>
            </div>
          </div>
        </div>
        <div className="HighlightedNft flex-grow flex flex-col justify-start items-center">
          <Image
            src={Pleaseholder}
            alt="pleaseholder"
            className="w-full lg:w-[555px] rounded-tl-[20px] rounded-tr-[20px]"
          />
          <div className="Frame230 w-full h-auto lg:h-[109px] p-5 bg-neutral-700 rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-center gap-2.5">
            <div className="SpaceWalking text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
              Space Walking
            </div>
            <div className="ArtistCard w-full flex justify-start items-center gap-3">
              <div className="Avatar flex justify-center items-center">
                <Image
                  src={Avatar}
                  alt="avatar"
                  className="w-6 h-6 rounded-[120px]"
                />
              </div>
              <div className="DishStudio text-white text-base font-normal font-['Work Sans'] leading-snug">
                Animakid
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
