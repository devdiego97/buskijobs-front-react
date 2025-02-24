import axios from "axios"
import { baseURL } from "../config/axios.config"


export default {

    addSkill:async(idcurriculum:number,name:string)=>{
        try{
            const response=await axios.post(`${baseURL}skills`,{idcurriculum,name})
            if(response.status === 200){
                console.log(true)
            }else{
                console.log(false)
            }
        }catch(e){
            console.log(`algo deu errado {e}`)
        }
    },
    deleteSkillId:async(id:number)=>{
        try{
            const response=await axios.delete(`${baseURL}skills/${id}`)
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