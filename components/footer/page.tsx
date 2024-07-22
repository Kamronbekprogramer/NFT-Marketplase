import Image from "next/image";
import HeaderLogo from "@/public/logo.png";
import Discard from "@/public/DiscordLogo.svg";
import Youtube from "@/public/YoutubeLogo.svg";
import Twitter from "@/public/TwitterLogo.svg";
import Instagram from "@/public/InstagramLogo.svg";

const Index = () => {
  return (
    <div className="Footer w-full max-w-[1519px] h-auto px-5 py-10 bg-neutral-700 flex flex-col justify-start items-center gap-8 sm:gap-4">
      <div className="FooterInfo w-full flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-4">
        <div className="NftMarketplaceInfo flex flex-col gap-8 sm:gap-4 w-full sm:w-1/3">
          <div className="Logo w-full max-w-[243.41px] h-8 relative">
            <Image src={HeaderLogo} alt="Logo" layout="fill" objectFit="contain" />
          </div>
          <div className="AdditionalInfo flex flex-col gap-5">
            <div className="NftMarketplaceUiCreatedWithAnimaForFigma text-stone-300 text-base font-normal">
              NFT marketplace UI created with Anima for Figma.
            </div>
            <div className="CommunityInfo flex flex-col gap-4">
              <div className="JoinOurCommunity text-stone-300 text-base font-normal">
                Join our community
              </div>
              <div className="Icons flex gap-2.5">
                <div className="Discordlogo cursor-pointer w-8 h-8 relative">
                  <Image src={Discard} alt="Discord" layout="fill" objectFit="contain" />
                </div>
                <div className="Youtubelogo cursor-pointer w-8 h-8 relative">
                  <Image src={Youtube} alt="YouTube" layout="fill" objectFit="contain" />
                </div>
                <div className="Twitterlogo cursor-pointer w-8 h-8 relative">
                  <Image src={Twitter} alt="Twitter" layout="fill" objectFit="contain" />
                </div>
                <div className="Instagramlogo cursor-pointer w-8 h-8 relative">
                  <Image src={Instagram} alt="Instagram" layout="fill" objectFit="contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Explore flex flex-col gap-5 sm:w-1/3">
          <div className="text-white text-lg font-bold capitalize">
            Explore
          </div>
          <div className="Pages flex flex-col gap-5">
            <div className="Marketplace text-stone-300 text-base font-normal">
              Marketplace
            </div>
            <div className="Rankings cursor-pointer text-stone-300 text-base font-normal">
              Rankings
            </div>
            <div className="ConnectAWallet cursor-pointer text-stone-300 text-base font-normal">
              Connect a wallet
            </div>
          </div>
        </div>
        <div className="Subscribe flex flex-col gap-5 sm:w-1/3">
          <div className="JoinOurWeeklyDigest text-white text-lg font-bold capitalize">
            Join our weekly digest
          </div>
          <div className="SubscribeFormInfo flex flex-col gap-5">
            <div className="GetExclusivePromotionsUpdatesStraightToYourInbox text-stone-300 text-base font-normal">
              Get exclusive promotions & updates straight to your inbox.
            </div>
            <div className="SubscribeForm flex items-center bg-white rounded-2xl p-2">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 text-zinc-800 text-base font-normal outline-none px-3 py-2 bg-transparent"
              />
              <button className="Button bg-purple-500 text-white text-base font-semibold px-6 py-2 rounded-2xl ml-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Frame239 w-full flex flex-col gap-5">
        <div className="Divider h-[1px] border border-zinc-500"></div>
        <div className="NftMarketUseThisTemplateFreely text-stone-300 text-xs">
          Ⓒ NFT Market. Use this template freely.
        </div>
      </div>
    </div>
  );
};

export default Index;

