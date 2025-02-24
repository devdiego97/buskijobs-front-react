import axios from "axios"
import { baseURL } from "../config/axios.config"
import { ILevels } from "../interfaces/levels"


export default {

    getAllLevels:async()=>{
        try{
            const response=await axios.get<ILevels[]>(`${baseURL}levels`)
            if(response.status === 200){
                return response.data
            }else{
                return 'algo deu errado'
                console.log(response.data)
            }


        }catch(e){
            console.log(e)
        }
    },
    getLevelId:async(id:number)=>{
            try{
                const response=await axios.get<ILevels>(`${baseURL}levels/${id}`)
                return response.data
                

            }catch(e){
                console.log(e)
            }
    }

}