import axios from "axios"
import { baseURL } from "../config/axios.config"



type  TUser={
    name: string,
    lastname: string,
    email: string,
    password: string,
    tel: string,
    type: string,
    photo?: string | null | undefined
    
}

export const apiUsers={
    getUsersAll:async()=>{
        try{

        
        }catch(e){

        }
    },
    getUserById:async()=>{
        try{

        }catch(e){
            
        }
    },
   updateUser:async(id:number,data:TUser)=>{
         try{
             const response=await axios.put(`${baseURL}users/${id}`,data)
             if(response.status === 200){
                console.log('atualizado usuario com sucesso')
                return true
             }else{
                 console.log('algo deu errado')
                 return false
             }
         }catch(e){
        
         }
    }
}