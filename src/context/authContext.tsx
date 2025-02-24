import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { ICurriculum } from "../interfaces/curriculum"
import { CompanyInterface } from "../interfaces/company"
import axios from "axios"


type props={
    children:ReactNode
}

type TUser={
    photo?:string | null,
    name:string,
    lastname:string,
    email:string,
    password:string,
    type:string,
    tel:string
}

type User={
    id?:number,
    photo?:string | null,
    name:string,
    lastname:string,
    email:string,
    password:string,
    type:string,
    tel:string,
    company?:CompanyInterface
}
type SigInType={
    user:User,
    token:string,
    status:boolean
}

type ContextType={
    user:User | null,
    setUser:(user:User | null)=>void,
    curriculumContext:ICurriculum | null,
    company:CompanyInterface | null,
    setCompany:(company:CompanyInterface | null)=>void,
    setCurriculumContext:(curriculum:ICurriculum | null)=>void,
    SigIn:(user:User,token:string)=>void,
    SigUp:(user:TUser,token:string)=>void,
    SigOut:()=>void
}


const contextAuth=createContext<ContextType>({} as ContextType)

export const AuthProvider=({children}:props)=>{
    const [user,setUser]=useState<User | null>(null)
    const [curriculumContext,setCurriculumContext]=useState<ICurriculum | null>(null)
    const [company,setCompany]=useState<CompanyInterface | null>(null)
    
useEffect(()=>{
    const storageUser=localStorage.getItem('@u')
    const storageCurriculum=localStorage.getItem('@curri')
    if(storageUser || storageCurriculum){
        const storageUserParsed=JSON.parse(storageUser as string)
        setUser(storageUserParsed)
        const storageCurriculumParsed=JSON.parse(storageCurriculum as string)
        setCurriculumContext(storageCurriculumParsed)
    }

 
},[])





useEffect(()=>{
    const getPaylist=async ()=>{
        const  url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL41dMNqXopt85RhRgFp_jdoI5Bz7DUG-c&key=AIzaSyBjD3sffFjgdJa0d_9EWnBWifm6y8pnMKw`
       const response=await axios.get(url)
       console.log(response)
    }
getPaylist()

},[])

const SigIn=async(user:User,token:string)=>{
    localStorage.setItem('@u',JSON.stringify(user))
    localStorage.setItem('@token',JSON.stringify(token))
    setUser(user)
}

const SigUp=async(user:TUser,token:string)=>{
    if(user !== undefined && token !==undefined){
        localStorage.setItem('@u',JSON.stringify(user))
        localStorage.setItem('@token',JSON.stringify(token))
        setUser(user)
    }else{
        console.log('nao tem dados no storage')
    }
 
}
const SigOut=()=>{
    if(user){
        setUser(null)
        setCurriculumContext(null)
        localStorage.removeItem('@u')
        localStorage.removeItem('@token')
        localStorage.removeItem('@curri')
        localStorage.clear()
    }
}



const values={
    user,setUser,SigIn,SigOut,SigUp,curriculumContext,setCurriculumContext,company,setCompany
}
    return <contextAuth.Provider value={values}>
        {children}
    </contextAuth.Provider>
}

export const useAuthContext=()=>useContext(contextAuth)