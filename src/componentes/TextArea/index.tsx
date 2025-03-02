
import { TextareaHTMLAttributes } from "react"
import { ContainerTextArea } from "./style"



export interface TextAreaInterface extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    p?:string,
    w?:string,
    h?:string,
    m?:string,
    bx?:string,
    bdRadius?:string | number,
    bg?:string 
    fsize?:number	
}


export const TextArea=({...rest}:TextAreaInterface)=>{
    return <ContainerTextArea {...rest} ></ContainerTextArea>
}