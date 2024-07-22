import React from "react";
import Image from "next/image";
import Art from "@/public/art Icon.png";
import Pahaitpush from "@/public/PaintBrush.svg";
import Collectibles from "@/public/collectibles.png";
import Musik from "@/public/musik.png";
import Photo from "@/public/photo.png";
import Vidio from "@/public/vidio.png";
import Utility from "@/public/utility.png";
import World from "@/public/worlds.png";
import Sport from "@/public/sport.png";
import Swatches from "@/public/Swatches.svg";
import MusikNotes from "@/public/MusicNotes.svg";
import Camera from "@/public/Camera.svg";
import VidioCam from "@/public/VideoCamera.svg";
import Magis from "@/public/MagicWand.svg";
import Basketbool from "@/public/Basketball.svg";
import Planet from "@/public/Planet.svg";

const Index = () => {
  return (
    <div>
      <div className="BrowseCategories w-[1381px] h-[928px]  py-20 bg-zinc-800 flex-col justify-start items-center gap-[60px] inline-flex">
        <div className="SectionHeadline h-[46px] flex-col justify-start items-start gap-2.5 flex">
          <div className="BrowseCategories self-stretch grow shrink basis-0 text-white text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">
            Browse Categories
          </div>
        </div>
        <div className="CategoryCardsGrid flex-col justify-start items-start gap-[30px] flex">
          <div className="CategoryCardsRow self-stretch justify-start items-start gap-[30px] inline-flex">
            <div className="CategoryCard grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
              <div className="PhotoIcon w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="ImagePlaceholder w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                  <Image
                    className="ImagePlaceholder grow shrink basis-0 self-stretch rounded-tl-[20px] rounded-tr-[20px]"
                    src={Art}
                    alt="imh"
                  />
                </div>
                <div className="CategoryIcon w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                  <div className="Paintbrush w-[100px] h-[100px] relative">
                    <Image src={Pahaitpush} alt="img" />
                  </div>
                </div>
              </div>
              <div className="CollectionName self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                <div className="CategoryName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                  Art
                </div>
              </div>
            </div>
            <div className="CategoryCard grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
              <div className="PhotoIcon w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="ImagePlaceholder w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                  <Image
                    className="ImagePlaceholder grow shrink basis-0 self-stretch rounded-tl-[20px] rounded-tr-[20px]"
                    src={Collectibles}
                    alt="img"
                  />
                </div>
                <div className="CategoryIcon w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                  <div className="Swatches w-[100px] h-[100px] relative">
                    <Image src={Swatches} alt="img" />
                  </div>
                </div>
              </div>
              <div className="CollectionName self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                <div className="CategoryName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                  Collectibles
                </div>
              </div>
            </div>
            <div className="CategoryCard grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
              <div className="PhotoIcon w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="ImagePlaceholder w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                  <Image
                    className="ImagePlaceholder grow shrink basis-0 self-stretch rounded-tl-[20px] rounded-tr-[20px]"
                    src={Musik}
                    alt="img"
                  />
                </div>
                <div className="CategoryIcon w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                  <div className="Musicnotes w-[100px] h-[100px] relative">
                    <Image src={MusikNotes} alt="img" />
                  </div>
                </div>
              </div>
              <div className="CollectionName self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                <div className="CategoryName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                  Music
                </div>
              </div>
            </div>
            <div className="CategoryCard grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
              <div className="PhotoIcon w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="ImagePlaceholder w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                  <Image
                    className="ImagePlaceholder grow shrink basis-0 self-stretch rounded-tl-[20px] rounded-tr-[20px]"
                    src={Photo}
                    alt="img"
                  />
                </div>
                <div className="CategoryIcon w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                  <div className="Camera w-[100px] h-[100px] relative">
                    <Image src={Camera} alt="img" />
                  </div>
                </div>
              </div>
              <div className="CollectionName self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                <div className="CategoryName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                  Photography
                </div>
              </div>
            </div>
          </div>
          <div className="CategoryCardsRow self-stretch justify-start items-start gap-[30px] inline-flex">
            <div className="CategoryCard grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
              <div className="PhotoIcon w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="ImagePlaceholder w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                  <Image
                    className="ImagePlaceholder grow shrink basis-0 self-stretch rounded-tl-[20px] rounded-tr-[20px]"
                    src={Vidio}
                    alt="img"
                  />
                </div>
                <div className="CategoryIcon w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                  <div className="Videocamera w-[100px] h-[100px] relative">
                    <Image src={VidioCam} alt="img" />
                  </div>
                </div>
              </div>
              <div className="CollectionName self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                <div className="CategoryName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                  Video
                </div>
              </div>
            </div>
            <div className="CategoryCard grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
              <div className="PhotoIcon w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="ImagePlaceholder w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                  <Image
                    className="ImagePlaceholder grow shrink basis-0 self-stretch rounded-tl-[20px] rounded-tr-[20px]"
                    src={Utility}
                    alt="img"
                  />
                </div>
                <div className="CategoryIcon w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                  <div className="Magicwand w-[100px] h-[100px] relative">
                    <Image src={Magis} alt="img" />
                  </div>
                </div>
              </div>
              <div className="CollectionName self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                <div className="CategoryName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                  Utility
                </div>
              </div>
            </div>
            <div className="CategoryCard grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
              <div className="PhotoIcon w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="ImagePlaceholder w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                  <Image
                    className="ImagePlaceholder grow shrink basis-0 self-stretch rounded-tl-[20px] rounded-tr-[20px]"
                    src={Sport}
                    alt="img"
                  />
                </div>
                <div className="CategoryIcon w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                  <div className="Basketball w-[100px] h-[100px] relative">
                    <Image src={Basketbool} alt="img" />
                  </div>
                </div>
              </div>
              <div className="CollectionName self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                <div className="CategoryName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                  Sport
                </div>
              </div>
            </div>
            <div className="CategoryCard grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
              <div className="PhotoIcon w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="ImagePlaceholder w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                  <Image
                    className="ImagePlaceholder grow shrink basis-0 self-stretch rounded-tl-[20px] rounded-tr-[20px]"
                    src={World}
                    alt="img"
                  />
                </div>
                <div className="CategoryIcon w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                  <div className="Planet w-[100px] h-[100px] relative">
                    <Image src={Planet} alt="img" />
                  </div>
                </div>
              </div>
              <div className="CollectionName self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                <div className="CategoryName self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                  Virtual Worlds
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
