import React from "react";
import Image from "next/image";
import Kepitreal from "@/public/kepitrial.png";
import Rosket from "@/public/RocketLaunch2.svg";
import DigiLab from "@/public/digilab.png";
import Gravity from '@/public/gravity.png';
import Juaniye from '@/public/juaniye.png'
import Whale from '@/public/whale.png'
import Fox from '@/public/fox.png'
import Shromiye from '@/public/shromiee.png'
import Robotika from '@/public/robotika.png'
import Rusty from '@/public/Rusty.png'
import Animakid from '@/public/animakid.png'
import Dotku from '@/public/dotku.png'
import Ghiblear from '@/public/ghiblear.png'

const Index = () => {
  return (
    <div className="TopRatedArtists w-[1381px] h-[1195px] px-[195px] py-20 bg-zinc-800 flex-col justify-start items-center gap-[60px] inline-flex">
      <div className="SectionHeadlineButton w-[1050px] h-[91px] justify-start items-end gap-[100px] inline-flex">
        <div className="SectionHeadline w-[703px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="Heading self-stretch justify-start items-start gap-2.5 inline-flex">
            <div className="TopCreators grow shrink basis-0 text-white text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">
              Top creators
            </div>
          </div>
          <div className="Subhead self-stretch justify-start items-start gap-2.5 inline-flex">
            <div className="CheckoutTopRatedCreatorsOnTheNftMarketplace grow shrink basis-0 text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">
              Checkout Top Rated Creators on the NFT Marketplace
            </div>
          </div>
        </div>
        <div className="Button w-[247px] px-[50px] rounded-[20px] cursor-pointer hover:scale-105 border-2 border-purple-500 justify-center items-center gap-3 flex">
          <div className="Rocketlaunch w-5 h-5 relative">
            <Image src={Rosket} alt="img" />
          </div>
          <div className="Button text-center text-white text-sm py-3 font-semibold font-['Work Sans'] leading-snug">
            View Rankings
          </div>
        </div>
      </div>
      <div className="ArtistCardsGrid flex-col flex-wrap justify-start items-start gap-[30px] flex">
        <div className="ArtistCardsRow w-[1050px] justify-start items-start gap-[30px] inline-flex">
          <div className="ArtistCard grow shrink hover:scale-105 basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start inline-flex">
              <div className="flex justify-center text-right text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                1
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    src={Kepitreal}
                    alt="img"
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[100%]"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                Keepitreal
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>

          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start gap-2.5 inline-flex">
              <div className=" text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                2
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[100px]"
                    src={DigiLab}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                DigiLab
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start gap-2.5 inline-flex">
              <div className=" text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                3
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[100px]"
                    src={Gravity}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                GravityOne
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start gap-2.5 inline-flex">
              <div className=" text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                4
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[100px]"
                    src={Juaniye}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                Juanie
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ArtistCardsRow w-[1050px] justify-start items-start gap-[30px] inline-flex">
          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start gap-2.5 inline-flex">
              <div className=" text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                5
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[100px]"
                    src={Whale}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                BlueWhale
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start gap-2.5 inline-flex">
              <div className=" text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                6
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[100px]"
                    src={Fox}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                mr fox
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start gap-2.5 inline-flex">
              <div className=" text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                7
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[120px]"
                    src={Shromiye}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                Shroomie
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start gap-2.5 inline-flex">
              <div className=" text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                8
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[120px]"
                    src={Robotika}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                robotica
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ArtistCardsRow w-[1050px] justify-start items-start gap-[30px] inline-flex">
          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start gap-2.5 inline-flex">
              <div className=" text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                9
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[120px]"
                    src={Rusty}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                RustyRobot
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start gap-2.5 inline-flex">
              <div className=" text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                10
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[120px]"
                    src={Animakid}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                animakid
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center items-start gap-2.5 inline-flex">
              <div className=" text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                11
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[120px]"
                    src={Dotku}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                Dotgu
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
          <div className="ArtistCard grow hover:scale-105 shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="RankingNumber w-[30px] bg-zinc-800 rounded-[20px] justify-center  gap-2.5 inline-flex">
              <div className=" text-start text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">
                12
              </div>
            </div>
            <div className="ArtistAvatar flex-col justify-start items-end flex">
              <div className="Avatar w-[110px] justify-start items-start gap-2.5 inline-flex">
                <div className="Asset122 w-[120px] h-[120px] justify-center items-center flex">
                  <Image
                    className="AvatarPlaceholder w-[120px] h-[120px] rounded-[120px]"
                    src={Ghiblear}
                    alt="img   "
                  />
                </div>
              </div>
            </div>
            <div className="ArtistInfo self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
              <div className="DishStudio self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                Ghiblier
              </div>
              <div className="AdditionalInfo self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="TotalSales grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">
                  Total Sales:
                </div>
                <div className="53Eth grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                  34.53 ETH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
