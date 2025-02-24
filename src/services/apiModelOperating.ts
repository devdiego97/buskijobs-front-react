import axios from "axios"
import { baseURL, baseUrlGov } from "../config/axios.config"
import { IModelOperating } from "../interfaces/modelOperating"


export default {
    getModelOperatins:async()=>{
        try{
            const response=await axios.get<IModelOperating[] | []>(`${baseURL}models-operating`)
            return response.data
        }catch(e){
            console.log(e)
        }
    },
    getModelOperantigId:async(id:number)=>{
        try{
            const response=await axios.get<IModelOperating>(`${baseURL}models-operating/${id}`)
            return response.data
        }catch(e){
            console.log(e)
        }
    }
}