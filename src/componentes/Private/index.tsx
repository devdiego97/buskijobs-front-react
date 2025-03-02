
import { ReactNode } from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthStore from '../../zustand/auth.zustand'

type props={
    children:ReactNode
}
export default ({children}:props)=>{
    const {user}=useAuthStore()
    const navigate=useNavigate()
    if(!user){
        navigate("/")
    }else{
        return children
    }
}
