import { HTMLAttributes, ReactNode } from "react"
import { Container } from "./style"


export interface DivInterface extends HTMLAttributes<HTMLDivElement>{
children:ReactNode
bg?:string,
m?:string,
p?:string,

} 


export const Box=({children}:DivInterface)=>{
    return <Container bg={'#e0e0e0f8' }>{children}</Container>
}