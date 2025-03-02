import { ReactNode, useEffect } from "react"
import {  useNavigate } from "react-router-dom"
import useAuthStore from "../../zustand/auth.zustand"

type Props={
    children:ReactNode
}
export  const PrivateCandidate=({children}:Props)=>{
    const {user}=useAuthStore()
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(user?.type  === 'recrutador' ){
            navigate('/painel/recrutador/')
        }
    },[])
    
    if(user?.type === 'candidato'){
        return children
    }
}