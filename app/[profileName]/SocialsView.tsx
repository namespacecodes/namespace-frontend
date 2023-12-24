import React from 'react'

// import Facebook from '../../public/socialmedia/fbcolor.svg'
import Facebook from '../../public/socialmedia/fbcolor.svg'
import Instagram from '../../public/socialmedia/instacolor.svg'
import X from '../../public/socialmedia/xcolor.svg'
import LinkedIn from '../../public/socialmedia/linkedincolor.svg'
import YouTube from '../../public/socialmedia/ytcolor.svg'


// import Instagram from '../../public/socialmedia/instacolor.svg'
// import X from '../../public/socialmedia/xcolor.svg'
// import LinkedIn from '../../public/socialmedia/linkedincolor.svg'
// import YouTube from '../../public/socialmedia/youtube.svg'


import Image from 'next/image'
const SocialsView = ({data}:any) => {
    // const data=[
    //     {
    //         social_media_name:"Facebook",
    //         profile_link:"",
    //         profile_id:1
    //     },
    //     {
    //         social_media_name:"Instagram",
    //         profile_link:"",
    //         profile_id:2
    //     },
    //     {
    //         social_media_name:"X",
    //         profile_link:"",
    //         profile_id:3
    //     },
    //     {
    //         social_media_name:"LinkedIn",
    //         profile_link:"",
    //         profile_id:4
    //     }
    // ]
    let space= "justify-center"
    if(data?.length>2) space="justify-between"
  return (
    <div className={` ${space} pt-[3vh] flex flex-1 flex-row w-[60vw] md:w-[50vw]`}>
    {data?.map((item:any,index:any)=>{
         let src = Facebook
         if (item.social_media_name === "Instagram") src = Instagram
         if (item.social_media_name === "X") src = X
         if (item.social_media_name === "LinkedIn") src = LinkedIn
         if (item.social_media_name === "YouTube") src = YouTube
         return(
             <a key={item.profile_id}  href={item.profile_link} target="_blank">
                 <Image alt={item.social_media_name} src={src} />
             </a>
             )
    })}
    
 </div>
  )
}

export default SocialsView