import axios from "axios"
import { baseURL } from "../config/axios.config"


type Tdata={
    idcurriculum:number,
    companyname:string,
    office:string,
    end:string,
    start:string,
    active:number,
    about:string
}
export default {
    addExperience:async(data:Tdata)=>{
        try{
            const response=await axios.post(`${baseURL}experiences`,data)
            if(response.status === 200){
                console.log(true)
            }else{
                console.log(false)
            }
        }catch(e){
            console.log(e)
        }
    },
    deleteExperienceId:async(id:number)=>{
        try{
            const response=await axios.delete(`${baseURL}experiences/${id}`)
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