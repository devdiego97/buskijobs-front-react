import { ReactNode, useEffect } from "react"
import { useAuthContext } from "../../context/authContext"
import { useLocation, useNavigate } from "react-router-dom"

type Props={
    children:ReactNode
}
export  const PrivateCandidate=({children}:Props)=>{
    const {pathname}=useLocation()
    const {user}=useAuthContext()
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(user?.type=== 'recrutador' ){
            navigate('/painel/recrutador/')
        }
    },[])
    
    if(user?.type=== 'candidato'){
        return children
    }
}