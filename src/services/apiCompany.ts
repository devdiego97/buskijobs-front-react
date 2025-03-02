import axios from "axios"
import { baseURL } from "../config/axios.config"
import {ICompany } from "../interfaces/company"



export type TCompany={
    idcreator:number,
    name:string,
    logo:string | File,
    about:string,
    cnpj:string,
    email:string,
    instagram:string,
    site:string,
    linkedin:string,
    tel:string,
    city:string,
    state:string,
}

export default {
    getCompanyFromUser:async(idcreator:number)=>{
        try{
            const response=await axios.get<ICompany>(`${baseURL}users/${idcreator}/companys`)
             if(response.status=200){
               return response.data    
            }else{
                return {error:'não existe usuário'}
            }
        }catch(e){
            console.error("Error em  getCompanyFromUser:", e)
            return { error: "Falha em buscar empresa pelo id do recrutador" }
        }
    },
    getCompanyId:async(id:number)=>{
        try{
            const response=await axios.get<ICompany>(`${baseURL}companys/${id}`)
            if(response.status === 200){
                return response.data
            }else{
                return 'algo deu errado'
            }
        }catch(e){

        }
    },
    createCompanyFromUser:async(data:TCompany)=>{
        try{
            const response=await axios.post(`${baseURL}companys`,data,{
                 headers: {
                    'Content-Type': 'multipart/form-data'
                  }
            })
            if(response.status === 200){
                return response.data
            }else{
                return 'algo deu errado'
            }
        }catch(e){

        }
    },
   
    updateCompanyFromUser:async(id:number)=>{
        try{
            const response=await axios.get<ICompany>(`${baseURL}companys/${id}`)
            if(response.status === 200){
                return response.data
            }else{
                return 'algo deu errado'
            }
        }catch(e){

        }
    },
    deleteCompanyFromUser:async(id:number)=>{
        try{
            const response=await axios.delete(`${baseURL}companys/${id}`)
            if(response.status === 200){
                return response.data
            }else{
                return 'algo deu errado'
            }
        }catch(e){

        }
    },
    
}