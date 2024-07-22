// import React from 'react'
// import Image from 'next/image'
// import Cosmonaf from '@/public/cosmonaf.png'
// import Messege from '@/public/EnvelopeSimple.svg'

// const Index = () => {
//   return (
//     <div className="SubscribeWidget w-[1519px] h-[550px] px-[195px] pt-10 pb-20 bg-zinc-800 flex-col justify-start items-center gap-2.5 inline-flex">
//       <div className="SubscribeWidget w-[1050px] p-[60px] bg-neutral-700 rounded-[20px] justify-start items-center gap-20 inline-flex">
//         <Image className="Photo grow shrink basis-0 h-[310px] rounded-[20px]" src={Cosmonaf} alt='img' />
//         <div className="Frame179 w-[425px] flex-col justify-start items-start gap-10 inline-flex">
//           <div className="HeadlineSubhead self-stretch h-[172px] flex-col justify-start items-start gap-2.5 flex">
//             <div className="JoinOurWeeklyDigest self-stretch text-white text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">
//               Join our weekly digest
//             </div>
//             <div className="GetExclusivePromotionsUpdatesStraightToYourInbox self-stretch text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">
//               Get exclusive promotions & updates straight to your inbox.
//             </div>
//           </div>
//           <div className="SubscribeForm self-stretch h-[60px] pl-5 py-4 bg-white rounded-[20px] justify-start items-center gap-3 inline-flex">
//             <input 
//               type="email" 
//               placeholder="Enter your email here" 
//               className="EnterYourEmailHere grow shrink basis-0 text-zinc-800 text-base font-normal font-['Work Sans'] leading-snug outline-none bg-transparent"
//             />
//             <div className="Button w-[211px] px-[50px] py-5 cursor-pointer bg-purple-500 rounded-[20px] justify-end items-center gap-3 flex">
//               <div className="Envelopesimple w-5 h-5 relative">
//                 <Image src={Messege} alt='sms'/>
//               </div>
//               <div className="Button text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">
//                 Subscribe
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Index


import React from 'react'
import Image from 'next/image'
import Cosmonaf from '@/public/cosmonaf.png'
import Messege from '@/public/EnvelopeSimple.svg'

const Index = () => {
  return (
    <div className="SubscribeWidget w-full max-w-[1519px] h-auto px-5 py-10 bg-zinc-800 flex flex-col justify-start items-center">
      <div className="SubscribeWidget w-full max-w-[1050px] p-8 sm:p-[60px] bg-neutral-700 rounded-[20px] flex flex-col sm:flex-row justify-start items-center gap-8 sm:gap-20">
        <Image className="Photo w-full sm:w-auto h-auto max-h-[310px] rounded-[20px]" src={Cosmonaf} alt="img" />
        <div className="Frame179 w-full sm:w-[425px] flex flex-col justify-start items-start gap-8 sm:gap-10">
          <div className="HeadlineSubhead w-full flex flex-col justify-start items-start gap-2.5">
            <div className="JoinOurWeeklyDigest w-full text-white text-[24px] sm:text-[38px] font-semibold capitalize leading-tight sm:leading-[45.60px]">
              Join our weekly digest
            </div>
            <div className="GetExclusivePromotionsUpdatesStraightToYourInbox w-full text-white text-[16px] sm:text-[22px] font-normal capitalize leading-6 sm:leading-9">
              Get exclusive promotions & updates straight to your inbox.
            </div>
          </div>
          <div className="SubscribeForm w-full h-[60px] pl-5 py-4 bg-white rounded-[20px] flex items-center gap-3">
            <input 
              type="email" 
              placeholder="Enter your email here" 
              className="EnterYourEmailHere w-full text-zinc-800 text-base font-normal outline-none bg-transparent"
            />
            <button className="Button flex items-center justify-center gap-3 w-[211px] px-6 py-3 bg-purple-500 rounded-[20px] text-white text-base font-semibold">
              <div className="Envelopesimple w-5 h-5 relative">
                <Image src={Messege} alt="sms" />
              </div>
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index

