import { ReactNode } from "react"
import { Container } from "./style"

type Props={
    children:ReactNode,
    titlePage?:string
}

export const ContentPage=({children,titlePage}:Props)=>{
    return <Container>
       <div className="content">
       <h2>{titlePage}</h2>
        {children} 
       </div>
    </Container>
}