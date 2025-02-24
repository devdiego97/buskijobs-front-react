import axios from "axios"
import { baseURL } from "../config/axios.config"
import { IContractType } from "../interfaces/contractType"

export default {
    getContractTypes:async()=>{
        try{
            const response=await axios.get<IContractType[] | []>(`${baseURL}contract-types`)
            return response.data
        }catch(e){
            console.log(e)
        }
    },
    getContratcTypeId:async(id:number)=>{
        try{
            const response=await axios.get<IContractType>(`${baseURL}contract-types/${id}`)
            return response.data
        }catch(e){
            console.log(e)
        }
    }
}