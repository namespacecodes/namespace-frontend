import { BASEURL, HEADERS } from "@/constants"
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";

const cookies = new Cookies();
import axios from "axios"

 export const user_id=cookies.get("user_id")

export const getUserDetails= async({querykey}:any)=>{
    
    const body={
        user_id
    }
    return await  axios.post(`${BASEURL}/users/getUserById`,body,HEADERS).then((res)=>res.data)
}

export const getUserServices=async()=>{
    const body={
        user_id
    }
    return await axios.post(`${BASEURL}/service/getService`,body,HEADERS).then((res)=>res.data)
}

export const getUserSocialMedia= async({querykey}:any)=>{
    const body={
        user_id
    }
    return await axios.post(`${BASEURL}/socialmedia/getSocialMediaProfile`,body,HEADERS).then((res)=>res.data)
}

export const getAvailability= async()=>{
    const body={
        user_id
    }
    return await axios.post(`${BASEURL}/getAvailability`,body,HEADERS).then((res)=>res.data)
}