import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuthStore from "../../zustand/auth.zustand"

type Props={
    children:ReactNode
}
export  const PrivateRecruiter=({children}:Props)=>{
    const {user}=useAuthStore()
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(user?.type === 'candidato'){
            navigate('/vagas')
        }
    },[])
    
    if(user?.type === 'recrutador'){
        return children
    }
}