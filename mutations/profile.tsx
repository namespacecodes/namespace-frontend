import { BASEURL, HEADERS } from "@/constants"

import axios from "axios"
import Cookies from "universal-cookie"
const cookies= new Cookies()
const user_id= cookies.get('user_id')
export const updateUser= ({name,bio,more_info}:any)=>{
    const body:any={}
    body["user_id"]=user_id
    if (name) body["name"]=name
    if (bio) body["bio"]=bio
    if (more_info) body["more_info"]=more_info 
    return axios.put(`${BASEURL}/users/updateUser`,body,HEADERS)
}

export const updateServices=({description,more_info,price,duration,service_name,service_id}:any)=>{
    const body:any={}
    body["service_id"]=service_id
    if (description) body["description"]=description
    if (more_info) body["more_info"]=more_info
    if (price) body["price"]=price
    if (duration) body["duration"]=duration
    if (service_name) body["service_name"]=service_name
    return axios.put(`${BASEURL}/service/updateService`,body,HEADERS)
}

// export const updateAvailability=({})
export const updateSocialMediaProfile= ({profile_id,profile_link,user_id,social_media_name}:any)=>{
    const body:any={}
    body["user_id"]=user_id
    if (profile_id) body["profile_id"]=profile_id
    if (profile_link) body["profile_link"]=profile_link
    if (social_media_name) body["social_media_name"]=social_media_name
    return axios.put(`${BASEURL}/socialmedia/updateSocialMediaProfile`,body,HEADERS)

}