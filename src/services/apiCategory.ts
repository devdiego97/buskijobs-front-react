import axios from "axios"
import { baseURL } from "../config/axios.config"
import { ICategory } from "../interfaces/category"

export  default {
    getCategorys:async()=>{
        try{
            const response=await axios.get<ICategory[]>(`${baseURL}categorys`)
            if(response.status === 200){
                return response.data
            }else{
                return 'algo deu errado'
            }
        }catch(e){
            console.log(e)
        }
    },
    getCategoryId:async(id:number)=>{
        try{
            const response=await axios.get<ICategory>(`${baseURL}categorys/${id}`)
            if(response.status === 200){
                return response.data
            }else{
                return 'algo deu errado'
            }
        }catch(e){
            console.log(e)
        }
    }
}