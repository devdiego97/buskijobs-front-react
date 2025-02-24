import axios from "axios"
import { baseURL } from "../config/axios.config"
import { IApplication } from "../interfaces/application"


export const apiApplication={
    
    getApplications:async(idcurriculum:number)=>{
        try{
            let response=await  axios.get(`${baseURL}curriculuns/${idcurriculum}/applications`)
            let applications=response.data
            return applications

        }catch(e){
            console.log(e)
        }
    },
    getApplicationId:async(id:number)=>{
        try{
            let response=await  axios.get(`${baseURL}applications/${id}`)
            let application=response.data
            return application

        }catch(e){
            console.log(e)
        }
    },
    verifyApplicationId:async(idcurriculum:number,idjob:number):Promise<IApplication[] | any>=>{
        try{
            let response=await  axios.get(`${baseURL}curriculuns/${idcurriculum}/applications`)
            let applications=response.data as IApplication[]
           const verifyApplication=applications.some(i=>i.curriculum.id === idcurriculum && i.idjob === idjob)
            return verifyApplication

        }catch(e){
            console.log(e)
        }
    },
    addApplication:async(idcurriculum:number,idjob:number,date:string):Promise<any>=>{
        try{
            const response = await axios.post(`${baseURL}applications`,{idcurriculum,idjob,date})
            if(response.status === 403){
               return false
            }else{
                return true   
            }
   
        }catch(e){
         console.log(e)
        }
       },
       deleteApplicationId:async(id:number)=>{
        try{
            let response=await  axios.delete(`${baseURL}applications/${id}`)
            console.log(response.data)
        }catch(e){
            console.log(e)
        }
    },
}