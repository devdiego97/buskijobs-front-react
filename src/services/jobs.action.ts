import axios  from "axios"
import { baseURL } from "../config/axios.config"
import { IJob, PaginatedResult } from "../interfaces/job"

type JDataPost={
    companyid:number,
    categoryid:number,
    title:string,
    city:string | null,
    state:string | null,
    salary:string | string,
    description:string,
    location:string,
    benefits:string,
    requirements:string,
    level:string,
    createDate:string,
    expireDate:string,
    exclusivepcd:string | number,
    contractType:string
}

interface PaginationOptions {
    page: number;
    pageSize: number;
    sortBy: string;
    sortOrder: 'ASC' | 'DESC';
  }

  

export const apiJobs={
    getAllJobs: async (options: PaginationOptions): Promise<PaginatedResult | any> =>{
           try{
            const { page, pageSize, sortBy, sortOrder } = options;
            const response = await axios.get(`${baseURL}jobs`, {
              params: {
                page,
                pageSize,
                sortBy,
                sortOrder,
              },
            })
            return response.data
            }catch(e){
                console.log(e)
            }
        
    },
    getAllJobsFromCompany:async(companyid:number):Promise<IJob[] | any>=>{
       
        try{
            let response=await  axios.get(`${baseURL}companys/${companyid}/jobs`)
            let jobs=response.data
            return jobs
        }catch(e){
            console.log(e)
        }
    
    },
    getJobId:async(id:number):Promise<IJob | any>=>{
        try{
            const response=await axios.get(`${baseURL}jobs/${id}`)
            return response.data
        }catch(e){
            return e
        }
    },
    createNewJob:async(data:JDataPost):Promise<IJob | any>=>{
        try{
            const response=await axios.post<IJob>(`${baseURL}jobs`,data)
           if(response.status === 200){
                console.log('requisicao ok')
           }else{
            console.log('requisicao false')
           }
        }catch(e){
            return e
        }
    },
    updateJobId:async()=>{
        try{
          
        }catch(e){
            return e
        }
    },
    deleteJobId:async(id:number)=>{
        try{
          const response=await axios.delete(`${baseURL}jobs/${id}`)
          if(response.status == 200){
            console.log(response.data)
          }
        }catch(e){
            return e
        }
    },
}