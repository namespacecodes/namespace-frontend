import Image from "next/image"
import Calls from '../../../public/1:1calls.svg'
import NewsLetter from '../../../public/newsletter.svg'
import Docs from '../../../public/docs.svg'
import { callContent,newsLetterContent,guidesContent } from "@/constants"
import { poppins_semibold,poppins_home, poppins_400, poppins_500, poppins_300 } from "@/fonts/poppins"
const AboutCards = ({title}:any) => {
    let img=Docs
    let content=guidesContent
    if(title=="1:1 Calls") {
        img=Calls;
        content=callContent;
    }
    if(title==="Newsletter") {
        img=NewsLetter;
        content=newsLetterContent;
    }
  return (
    <div className={`${poppins_home.className} ${title==="1:1 Calls"?"md:mt-4":"md:mt-0"} w-fit flex-row flex flex-1  space-x-3 md:flex-col md:space-y-3 text-[16px] text-[#340181]`}> 
        <Image src={img} alt="meetings" width="72" height="72"/>
        <div className="md:flex-col">
        <div className={`${poppins_500.className} text-[18px] ${title!=="1:1 Calls"?"ml-3 md:ml-0":"mr-0"}`}>{title}</div>
        <div className={`whitespace-pre-line ${poppins_300.className} ${title!=="1:1 Calls"?"ml-3 md:ml-0":"mr-0"}`}>{content}</div>
        </div>
    </div>
  )
}

export default AboutCards