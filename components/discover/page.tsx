// import React from "react";
// import Image from "next/image";
// import Eye from "@/public/Eye.svg";
// import Distand from "@/public/distand.png";
// import MoonDaneer from "@/public/moonDaneer.png";
// import Life from "@/public/life.png";
// import Nebulakid from "@/public/nebulakid.png";
// import Astro from "@/public/astro.png";
// import Speseona from "@/public/speseona.png";

// const Index = () => {
//   return (
//     <div className="DiscoverMoreNfts w-[1519px] h-[780px] px-[195px] py-20 bg-zinc-800 flex-col justify-start items-center gap-[60px] inline-flex">
//       <div className="SectionHeadlineButton w-[1050px] justify-start items-end gap-[100px] inline-flex">
//         <div className="SectionHeadline grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
//           <div className="DiscoverMoreNfts self-stretch text-white text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">
//             Discover More NFTs
//           </div>
//           <div className="ExploreNewTrendingNfts self-stretch text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">
//             Explore new trending NFTs
//           </div>
//         </div>
//         <div className="Button w-[195px] px-[50px] cursor-pointer rounded-[20px] hover:scale-105 border-2 border-purple-500 justify-center items-center gap-3 flex">
//           <div className="Eye w-5 h-5 relative">
//             <Image src={Eye} alt="img" />
//           </div>
//           <div className="Button text-center text-white text-bace py-3  font-semibold font-['Work Sans'] leading-snug">
//             See All
//           </div>
//         </div>
//       </div>
//       <div className="NftCardsRow w-[1050px] justify-start items-start gap-[30px] inline-flex">
//         <div className="NftCard grow hover:scale-105 cursor-pointer shrink basis-0 h-[469px] bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
//           <div className="Image self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
//             <Image
//               className="ImagePlaceholder self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px]"
//               src={Distand}
//               alt="img"
//             />
//           </div>
//           <div className="NftInfo self-stretch h-[173px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
//             <div className="ArtstInfo self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex">
//               <div className="NftName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
//                 Distant Galaxy
//               </div>
//               <div className="ArtistAvatarName self-stretch justify-start items-start gap-3 inline-flex">
//                 <div className="Avatar justify-start items-start gap-2.5 flex">
//                   <div className="Asset122 w-6 h-6 justify-center items-center flex">
//                     <Image
//                       className="AvatarPlaceholder w-6 h-6 rounded-[120px]"
//                       src={MoonDaneer}
//                       alt="img"
//                     />
//                   </div>
//                 </div>
//                 <div className="NftArtist grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
//                   MoonDancer
//                 </div>
//               </div>
//             </div>
//             <div className="AdditionalInfo self-stretch justify-start items-start inline-flex">
//               <div className="Price grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
//                 <div className="Price self-stretch text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">
//                   Price
//                 </div>
//                 <div className="63Eth self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">
//                   1.63 ETH
//                 </div>
//               </div>
//               <div className="HighestBid grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
//                 <div className="HighestBid self-stretch text-right text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">
//                   Highest Bid
//                 </div>
//                 <div className="33Weth self-stretch text-right text-white text-base font-normal font-['Space Mono'] leading-snug">
//                   0.33 wETH
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="NftCard grow shrink hover:scale-105 cursor-pointer basis-0 h-[469px] bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
//           <div className="Image self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
//             <Image
//               className="ImagePlaceholder self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px]"
//               src={Life}
//               alt="img"
//             />
//           </div>
//           <div className="NftInfo self-stretch h-[173px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
//             <div className="ArtstInfo self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex">
//               <div className="NftName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
//                 Life On Edena
//               </div>
//               <div className="ArtistAvatarName self-stretch justify-start items-start gap-3 inline-flex">
//                 <div className="Avatar justify-start items-start gap-2.5 flex">
//                   <div className="Asset122 w-6 h-6 justify-center items-center flex">
//                     <Image
//                       className="AvatarPlaceholder w-6 h-6 rounded-[120px]"
//                       src={Nebulakid}
//                       alt="img"
//                     />
//                   </div>
//                 </div>
//                 <div className="NftArtist grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
//                   NebulaKid
//                 </div>
//               </div>
//             </div>
//             <div className="AdditionalInfo self-stretch justify-start items-start inline-flex">
//               <div className="Price grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
//                 <div className="Price self-stretch text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">
//                   Price
//                 </div>
//                 <div className="63Eth self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">
//                   1.63 ETH
//                 </div>
//               </div>
//               <div className="HighestBid grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
//                 <div className="HighestBid self-stretch text-right text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">
//                   Highest Bid
//                 </div>
//                 <div className="33Weth self-stretch text-right text-white text-base font-normal font-['Space Mono'] leading-snug">
//                   0.33 wETH
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="NftCard grow shrink hover:scale-105 cursor-pointer basis-0 h-[469px] bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
//           <div className="Image self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
//             <Image
//               className="ImagePlaceholder self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px]"
//               src={Astro}
//               alt="img"
//             />
//           </div>
//           <div className="NftInfo self-stretch h-[173px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
//             <div className="ArtstInfo self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex">
//               <div className="NftName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
//                 AstroFiction
//               </div>
//               <div className="ArtistAvatarName self-stretch justify-start items-start gap-3 inline-flex">
//                 <div className="Avatar justify-start items-start gap-2.5 flex">
//                   <div className="Asset122 w-6 h-6 justify-center items-center flex">
//                     <Image
//                       className="AvatarPlaceholder w-6 h-6 rounded-[120px]"
//                       src={Speseona}
//                       alt="img"
//                     />
//                   </div>
//                 </div>
//                 <div className="NftArtist grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
//                   Spaceone
//                 </div>
//               </div>
//             </div>
//             <div className="AdditionalInfo self-stretch justify-start items-start inline-flex">
//               <div className="Price grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
//                 <div className="Price self-stretch text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">
//                   Price
//                 </div>
//                 <div className="63Eth self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">
//                   1.63 ETH
//                 </div>
//               </div>
//               <div className="HighestBid grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
//                 <div className="HighestBid self-stretch text-right text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">
//                   Highest Bid
//                 </div>
//                 <div className="33Weth self-stretch text-right text-white text-base font-normal font-['Space Mono'] leading-snug">
//                   0.33 wETH
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;


import React from "react";
import Image from "next/image";
import Eye from "@/public/Eye.svg";
import Distand from "@/public/distand.png";
import MoonDaneer from "@/public/moonDaneer.png";
import Life from "@/public/life.png";
import Nebulakid from "@/public/nebulakid.png";
import Astro from "@/public/astro.png";
import Speseona from "@/public/speseona.png";

const Index = () => {
  return (
    <div className="DiscoverMoreNfts w-full max-w-[1519px] h-auto px-5 sm:px-[195px] py-20 bg-zinc-800 flex flex-col justify-start items-center gap-[60px]">
      <div className="SectionHeadlineButton w-full sm:w-[1050px] flex flex-col sm:flex-row justify-between items-end gap-[30px]">
        <div className="SectionHeadline flex flex-col justify-start items-start gap-2.5">
          <div className="DiscoverMoreNfts text-white text-[24px] sm:text-[38px] font-semibold capitalize leading-tight sm:leading-[45.60px]">
            Discover More NFTs
          </div>
          <div className="ExploreNewTrendingNfts text-white text-[16px] sm:text-[22px] font-normal capitalize leading-6 sm:leading-9">
            Explore new trending NFTs
          </div>
        </div>
        <div className="Button w-full sm:w-[195px] mt-4 sm:mt-0 px-[50px] py-3 cursor-pointer rounded-[20px] hover:scale-105 border-2 border-purple-500 flex justify-center items-center gap-3">
          <div className="Eye w-5 h-5">
            <Image src={Eye} alt="See all NFTs icon" />
          </div>
          <div className="Button text-center text-white text-base font-semibold">
            See All
          </div>
        </div>
      </div>
      <div className="NftCardsRow w-full sm:w-[1050px] flex flex-wrap justify-center sm:justify-start items-start gap-6 sm:gap-[30px]">
        <div className="NftCard w-full sm:w-[330px] h-auto hover:scale-105 cursor-pointer bg-neutral-700 rounded-[20px] flex flex-col justify-start items-center">
          <div className="Image w-full h-[296px] rounded-t-[20px] flex justify-start items-start">
            <Image className="w-full h-full rounded-t-[20px]" src={Distand} alt="Distant Galaxy" />
          </div>
          <div className="NftInfo w-full px-5 sm:px-[30px] pt-5 pb-[25px] flex flex-col justify-start items-start gap-[25px]">
            <div className="ArtstInfo w-full flex flex-col justify-start items-start gap-[5px]">
              <div className="NftName text-white text-[22px] font-semibold capitalize leading-[30.80px]">
                Distant Galaxy
              </div>
              <div className="ArtistAvatarName flex justify-start items-start gap-3">
                <div className="Avatar flex justify-center items-center w-6 h-6">
                  <Image className="w-6 h-6 rounded-full" src={MoonDaneer} alt="MoonDancer Avatar" />
                </div>
                <div className="NftArtist text-white text-base font-normal leading-snug">
                  MoonDancer
                </div>
              </div>
            </div>
            <div className="AdditionalInfo w-full flex justify-between items-start">
              <div className="Price flex flex-col justify-start items-start gap-2">
                <div className="Price text-zinc-500 text-xs font-normal leading-[13.20px]">
                  Price
                </div>
                <div className="63Eth text-white text-base font-normal leading-snug">
                  1.63 ETH
                </div>
              </div>
              <div className="HighestBid flex flex-col justify-center items-end gap-2">
                <div className="HighestBid text-right text-zinc-500 text-xs font-normal leading-[13.20px]">
                  Highest Bid
                </div>
                <div className="33Weth text-right text-white text-base font-normal leading-snug">
                  0.33 wETH
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="NftCard w-full sm:w-[330px] h-auto hover:scale-105 cursor-pointer bg-neutral-700 rounded-[20px] flex flex-col justify-start items-center">
          <div className="Image w-full h-[296px] rounded-t-[20px] flex justify-start items-start">
            <Image className="w-full h-full rounded-t-[20px]" src={Life} alt="Life on Edena" />
          </div>
          <div className="NftInfo w-full px-5 sm:px-[30px] pt-5 pb-[25px] flex flex-col justify-start items-start gap-[25px]">
            <div className="ArtstInfo w-full flex flex-col justify-start items-start gap-[5px]">
              <div className="NftName text-white text-[22px] font-semibold capitalize leading-[30.80px]">
                Life On Edena
              </div>
              <div className="ArtistAvatarName flex justify-start items-start gap-3">
                <div className="Avatar flex justify-center items-center w-6 h-6">
                  <Image className="w-6 h-6 rounded-full" src={Nebulakid} alt="NebulaKid Avatar" />
                </div>
                <div className="NftArtist text-white text-base font-normal leading-snug">
                  NebulaKid
                </div>
              </div>
            </div>
            <div className="AdditionalInfo w-full flex justify-between items-start">
              <div className="Price flex flex-col justify-start items-start gap-2">
                <div className="Price text-zinc-500 text-xs font-normal leading-[13.20px]">
                  Price
                </div>
                <div className="63Eth text-white text-base font-normal leading-snug">
                  1.63 ETH
                </div>
              </div>
              <div className="HighestBid flex flex-col justify-center items-end gap-2">
                <div className="HighestBid text-right text-zinc-500 text-xs font-normal leading-[13.20px]">
                  Highest Bid
                </div>
                <div className="33Weth text-right text-white text-base font-normal leading-snug">
                  0.33 wETH
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="NftCard w-full sm:w-[330px] h-auto hover:scale-105 cursor-pointer bg-neutral-700 rounded-[20px] flex flex-col justify-start items-center">
          <div className="Image w-full h-[296px] rounded-t-[20px] flex justify-start items-start">
            <Image className="w-full h-full rounded-t-[20px]" src={Astro} alt="Astro Fiction" />
          </div>
          <div className="NftInfo w-full px-5 sm:px-[30px] pt-5 pb-[25px] flex flex-col justify-start items-start gap-[25px]">
            <div className="ArtstInfo w-full flex flex-col justify-start items-start gap-[5px]">
              <div className="NftName text-white text-[22px] font-semibold capitalize leading-[30.80px]">
                AstroFiction
              </div>
              <div className="ArtistAvatarName flex justify-start items-start gap-3">
                <div className="Avatar flex justify-center items-center w-6 h-6">
                  <Image className="w-6 h-6 rounded-full" src={Speseona} alt="Speseona Avatar" />
                </div>
                <div className="NftArtist text-white text-base font-normal leading-snug">
                  Spaceone
                </div>
              </div>
            </div>
            <div className="AdditionalInfo w-full flex justify-between items-start">
              <div className="Price flex flex-col justify-start items-start gap-2">
                <div className="Price text-zinc-500 text-xs font-normal leading-[13.20px]">
                  Price
                </div>
                <div className="63Eth text-white text-base font-normal leading-snug">
                  1.63 ETH
                </div>
              </div>
              <div className="HighestBid flex flex-col justify-center items-end gap-2">
                <div className="HighestBid text-right text-zinc-500 text-xs font-normal leading-[13.20px]">
                  Highest Bid
                </div>
                <div className="33Weth text-right text-white text-base font-normal leading-snug">
                  0.33 wETH
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

