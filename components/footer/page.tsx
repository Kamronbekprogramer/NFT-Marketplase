import Image from "next/image";
import HeaderLogo from "@/public/logo.png";
import Discard from "@/public/DiscordLogo.svg";
import Youtube from "@/public/YoutubeLogo.svg";
import Twitter from "@/public/TwitterLogo.svg";
import Instagram from "@/public/InstagramLogo.svg";

const Index = () => {
  return (
    <div className="Footer w-[1519px] h-[334px] px-[195px] py-10 bg-neutral-700 flex-col justify-start items-center gap-[30px] inline-flex">
      <div className="FooterInfo justify-between items-start inline-flex">
        <div className="NftMarketplaceInfo w-[327.41px] pr-[84px] flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="Logo w-[243.41px] h-8 relative">
            <Image src={HeaderLogo} alt="img" />
            <div className="Storefront w-8 h-8 left-0 top-0 absolute"></div>
          </div>
          <div className="AdditionalInfo flex-col justify-start items-start gap-5 flex">
            <div className="NftMarketplaceUiCreatedWithAnimaForFigma w-[238px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
              NFT marketplace UI created with Anima for Figma.
            </div>
            <div className="CommunityInfo flex-col justify-start items-start gap-[15px] flex">
              <div className="JoinOurCommunity w-[238px] h-[18px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
                Join our community
              </div>
              <div className="Icons justify-start items-start gap-2.5 inline-flex">
                <div className="Discordlogo cursor-pointer w-8 h-8 relative">
                  <Image src={Discard} alt="img" />
                </div>
                <div className="Youtubelogo cursor-pointer w-8 h-8 relative">
                  <Image src={Youtube} alt="img" />
                </div>
                <div className="Twitterlogo cursor-pointer w-8 h-8 relative">
                  <Image src={Twitter} alt="img" />
                </div>
                <div className="Instagramlogo cursor-pointer w-8 h-8 relative">
                  <Image src={Youtube} alt="img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Explore w-60 flex-col justify-start items-start gap-[25px] inline-flex">
          <div className="Explore  text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">
            Explore
          </div>
          <div className="Pages cursor-pointer flex-col justify-start items-start gap-5 flex">
            <div className="Marketplace text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
              Marketplace
            </div>
            <div className="Rankings cursor-pointer text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
              Rankings
            </div>
            <div className="ConnectAWallet cursor-pointer text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
              Connect a wallet
            </div>
          </div>
        </div>
        <div className="Subscribe flex-col justify-start items-start gap-[25px] inline-flex">
          <div className="JoinOurWeeklyDigest text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">
            Join our weekly digest
          </div>
          <div className="SubscribeFormInfo flex-col justify-start items-start gap-5 flex">
            <div className="GetExclusivePromotionsUpdatesStraightToYourInbox w-[330px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
              Get exclusive promotions & updates straight to your inbox.
            </div>
            {/* <div className="SubscribeForm w-[420px] h-[60px] pl-5 py-4 bg-white rounded-[20px] justify-start items-center gap-3 inline-flex">
              <div className="EnterYourEmailHere grow shrink basis-0 text-zinc-800 text-base font-normal font-['Work Sans'] leading-snug">
                Enter your email here
              </div>
              <div className="Button w-[179px] px-[50px] py-5 bg-purple-500 rounded-[20px] justify-end items-center gap-3 flex">
                <div className="Button text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">
                  Subscribe
                </div>
              </div>
            </div> */}
            <div className="SubscribeForm self-stretch h-[60px] pl-5 py-4 bg-white rounded-[20px] justify-start items-center gap-3 inline-flex">
              <input
                type="email"
                placeholder="Enter your email here"
                className="EnterYourEmailHere grow shrink basis-0 text-zinc-800 text-base font-normal font-['Work Sans'] leading-snug outline-none bg-transparent"
              />
              <div className="Button w-[211px] px-[50px] py-5 cursor-pointer bg-purple-500 rounded-[20px] justify-center items-center gap-3 flex">
                <div className="Button text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Frame239 h-[33px] flex-col justify-start items-start gap-5 flex">
        <div className="Divider self-stretch h-[0px] border border-zinc-500"></div>
        <div className="NftMarketUseThisTemplateFreely self-stretch text-stone-300 text-xs font-normal font-['Work Sans'] leading-[13.20px]">
          Ⓒ NFT Market. Use this template freely.
        </div>
      </div>
    </div>
  );
};

export default Index;
