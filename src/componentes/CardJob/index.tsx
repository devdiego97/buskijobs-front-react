
import { Container } from "./style"
import { IJob } from "../../interfaces/job"
import { useLocation} from "react-router-dom"
import { Link } from "react-router-dom"
import SalaryIcon from './../../assets/svgs/salary'
import LocationIcon from './../../assets/svgs/location'
import CompanyIcon from './../../assets/svgs/company'
import { Text } from "rsuite"
type Props={
  job:IJob

}
export const CardJob=({job}:Props)=>{
   const location=useLocation()
  

    return <Container>
        <div className="top">
           <div className="header">
                <Text as="h5" maxLines={1}>{job.title}</Text>
                <span>{job.category?.name}</span>
            
           </div>
           <div className="data-job">
           {location.pathname.includes('/painel/') && <>
            {job.createDate && <p>Criada em {job.createDate}</p>}
            {job.expireDate && <p>Expira em {job.expireDate}</p>}
           </>}
           </div>
           <div className="divider"></div>

        </div>
        <div className="info">
            <div className="left">
                <span>
                    <SalaryIcon />
                    {job.salary  ? `R$ ${job.salary.toString().replace('.',',')}` : 'Salário não especificado'}
                </span>
                {!location.pathname.includes('/painel') && <span>
                    <LocationIcon />
                    {job?.modelOperating?.name !== 'Presencial' ? job.modelOperating?.name  : `${job.city}/${job.state}`}
                  </span>
                }
                  <span> 
                   <CompanyIcon />
                    {job.company && job.company.name}
                </span>

               
            </div>
            <div className="right">
                {!location.pathname.includes('painel') && 
                   <Link to={`/vagas/${job.id}`}  >detalhes</Link>
                }
                {location.pathname.includes('painel') && 
                   <Link to={{pathname:`/painel/admin/vagaspostadas/${job.id}`,}}>detalhes</Link>
                }
            </div>
        </div>
    </Container>
  
}