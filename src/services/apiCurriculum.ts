import axios from "axios"
import { baseURL } from "../config/axios.config"
import { ICurriculum } from "../interfaces/curriculum"

interface  TCurriculum {
    iduser:number,
    name: string,
    office: string;
    email:string,
    lastname:string,
    tel:string,
    city:string,
    state:string,
    dateNasc:string,
    pcd:number,
    deficiency: string | null,
    about:string,
    linkedin:string | null,
    github:string | null,
}


export const apiCurriculum={
    getCurriculumAll:async():Promise<ICurriculum[] | any>=>{
        try{
            const  response=await axios.get(`${baseURL}curriculuns`) 
            if(response.status === 200){
                return response.data
            }
        }catch(e){
            console.log(e)
        }
    },
    getCurriculumFromUser:async(iduser:number):Promise<ICurriculum | any>=>{
        try{
            const  response=await axios.get(`${baseURL}users/${iduser}/curriculuns`) 
            if(response.status === 200){
                return response.data
            }
        }catch(e){
            console.log(e)
        }
    },
    getCurriculumId:async(id:number):Promise<ICurriculum | any>=>{
        try{
            const  response=await axios.get(`${baseURL}curriculuns/${id}`) 
            if(response.status === 200){
                return response.data
            }

        }catch(e){
            console.log(e)
        }

    },
    createCurriculum:async(data:TCurriculum):Promise<ICurriculum | any>=>{
        try{
            const  response=await axios.post(`${baseURL}curriculuns`,data) 
            if(response.status === 200){
                return response.data
            }
        }catch(e){
            console.log(e)
        }
    },

    updateCurriculum:async(data:TCurriculum):Promise<ICurriculum | any>=>{
        try{
            const  response=await axios.post(`${baseURL}curriculuns`,data) 
            if(response.status === 200){
                return response.data
            }
        }catch(e){
            console.log(e)
        }
    },
    deleteCurriculum:async(idcurriculum:number)=>{
        try{
            const  response=await axios.delete(`${baseURL}curriculuns/${idcurriculum}`) 
            if(response.status === 200){
                return response.data
            }

        }catch(e){
            console.log(e)
        }
    }






}