import { BASEURL, HEADERS } from "@/constants"
import Cookies from 'universal-cookie';


import axios from "axios"

const cookies= new Cookies()
const user_id= cookies.get('user_id')
export const getUserDetails= async({querykey}:any)=>{
    
    const body={
        user_id:user_id
    }
    return await  axios.post(`${BASEURL}/users/getUserById`,body,HEADERS).then((res)=>res.data)
}

export const getUserServices=async()=>{
    const body={
        user_id:user_id
    }
    return await axios.post(`${BASEURL}/service/getService`,body,HEADERS).then((res)=>res.data)
}

export const getUserSocialMedia= async({querykey}:any)=>{
    const body={
        user_id:user_id
    }
    return await axios.post(`${BASEURL}/socialmedia/getSocialMediaProfile`,body,HEADERS).then((res)=>res.data)
}

export const getAvailability= async()=>{
    const body={
        user_id:user_id
    }
    return await axios.post(`${BASEURL}/getAvailability`,body,HEADERS).then((res)=>res.data)
}

export const getProfile = async({queryKey}:any)=>{
    const [_key, {profileName}] = queryKey
    return await axios.get(`${BASEURL}/profile/${profileName}`,HEADERS).then((res)=>res.data)
}