import axios from "axios"
import { baseURL } from "../config/axios.config"

type Tdata={
    idcurriculum:number,
    school:string,
    name:string
    end:string,
    start:string,
    type:string,
    active:number,
}

export default {
    addTrainning:async(data:Tdata)=>{
        try{
            const response=await axios.post(`${baseURL}trainnings`,data)
            if(response.status === 200){
                console.log(true)
            }else{
                console.log(false)
            }
        }catch(e){
            console.log(e)
        }
    },
    deleteTrainningId:async(id:number)=>{
        try{
            const response=await axios.delete(`${baseURL}trainnings/${id}`)
            if(response.status === 200){
                console.log(true)
            }else{
                console.log(false)
            }
        }catch(e){
            console.log(e)
        }
    }
}