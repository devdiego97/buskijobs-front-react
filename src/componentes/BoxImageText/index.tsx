import { HTMLAttributes, ReactNode } from "react"
import { Box } from "./style"
import { Card } from "rsuite"



export interface IBoxImageText extends HTMLAttributes<HTMLDivElement>{
    children:ReactNode,
    urlImage:string,
    height:string;
    radius?:string
}
export default ({children,...rest}:IBoxImageText)=>{
    return <Card>
        <Box  {...rest}>
        <div className="overlay"></div>
        <div className="conteudo">
           {children}
        </div>
    
    
    </Box>
    </Card>
}