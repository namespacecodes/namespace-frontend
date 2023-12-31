import Cookies from "universal-cookie"

export const CLIENT_ID = "592801535190-kko27lmsml1jv54qtf45cttdhpcbrc6i.apps.googleusercontent.com"
export const callContent="Unlock the potential of Namespace's 1:1 Call feature, effortlessly connecting with users who seek your distinctive skills & expertise.Enhance your professional journey with high-quality video calls, offering clients a rich, engaging experience."
export const newsLetterContent="Introducing our Newsletter feature—a platform for professionals to engage their audience through compelling writing. Craft captivating newsletters to captivate and monetize your readership, turning insights into income as you build your subscribers."
export const guidesContent="Unleash your creativity and expertise with our Guides and Toolkits feature. Effortlessly market and sell your crafted guides and toolkits, from fitness routines to artworks. Monetize your unique creations, offering valuable resources to your audience."
export const BASEURL= "https://name-space.onrender.com"
// export const BASEURLLOCAL="http://localhost:8000"
// https://name-space.onrender.com
const cookies= new Cookies()
export const user_id= cookies.get('user_id')
export const HEADERS={
    headers:{
        Authorization:`Bearer ${cookies.get("token")}`
    }
}