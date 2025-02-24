import { Container } from "./style"
import {  IApplication } from "../../interfaces/application"
import LocaltionSVG from "../../assets/svgs/location"
import { Link } from "react-router-dom"
import Salary from "../../assets/svgs/salary"
import Company from "../../assets/svgs/company"

type Props={
    application:IApplication

}
export const CardApplication=({application}:Props)=>{
   
    
    return <Container>
        <div className="top">
           <div className="header">
                <h2>{application.job.title}</h2>
                <span>{application.job.category?.name}</span>
           </div>
           <div className="divider"></div>

        </div>
        <div className="info">
            <div className="left">
                <span>
                   <Salary />
                    R${application.job.salary.toString().replace('.',',')}
                </span>
                <span>
                    <Company />
                    {application.job.company?.name}
                </span>
                <span> 
                    <LocaltionSVG />
                    {application.job.city}/{application.job.state}
                </span>
            </div>
            <div className="right">
               <Link to={`/candidaturas/${application.id}`} >detalhes</Link>
            </div>
        </div>
        <div className="state">
            <small>Candidatou  em {application.date}</small>
        </div>
    </Container>
}