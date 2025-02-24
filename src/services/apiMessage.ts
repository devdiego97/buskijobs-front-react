import axios from "axios";
import { baseURL } from "../config/axios.config";



export default {
    getMensagensFromUserById:async(idcandidate:number)=>{
        try{
            const  response=await axios.get(`${baseURL}messages/candidates/${idcandidate}`) 
            if(response.status === 200){
               return response.data
            }
        }catch(e){
            console.log(e)
        }

    },
    getMensagensFromRecruiterById:async(idrecruiter:number)=>{
        try{
            const  response=await axios.get(`${baseURL}messages/recruiter/${idrecruiter}`) 
            if(response.status === 200){
               return response.data
            }
        }catch(e){
            console.log(e)
        }

    },
    getMensageFromId:async()=>{
        try{

        }catch(e){
            
        }
    },

}