import { baseURL } from "../config/axios.config";
import axios from "axios";


export interface UserType{
    name: string,
    photo?:File | null,
    lastname: string,
    email:string,
    password:string,
    tel:string,
    type:string
}

type dataSignIn={
    email:string,
    password:string,
    type:string
}

export const apiAuth={
   
        sigIn:async(data:dataSignIn):Promise<any>=>{
         if(data){
            try{
              let response=await axios.post(`${baseURL}auth/sigin`,data)
              return response
            }catch(e){
             return e
            }
        }
 
 
     },
     sigUp:async(user:UserType):Promise<any>=>{
        if(user){
            try{
              let response=await axios.post(`${baseURL}auth/sigup`,user)
              return response
            }catch(e){
             return e
            }
        }
        }

}