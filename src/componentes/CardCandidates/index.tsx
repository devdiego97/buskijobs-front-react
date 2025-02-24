import { Container } from "./style"
import { Link } from "react-router-dom"
import { ICurriculum } from "../../interfaces/curriculum"
import { baseURL } from "../../config/axios.config"
import { useAuthContext } from "../../context/authContext"



type  props={
    curriculum:ICurriculum
}


export const CardCandidates = ({curriculum}:props)=>{
    const {user}=useAuthContext()


    return <Container>
        <div className="top">
            <div className="cx-img">
                {curriculum.user.photo !== null && <img src={`${baseURL}public/images/${curriculum.user.photo}`}  />}
                {curriculum.user.photo === null && <img src={`/assets/user.png`}  alt="" />}
            </div>
            <div className="cx-info">
                <h2 className="name"> {curriculum.user?.name} {curriculum.user.lastname}</h2>
            </div>
        </div>
        <div className="divider"></div>
        <div className="cargo">
           <small>{curriculum.office}</small>
        </div>
        <div className="divider"></div>
        <div className="action">
            <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/profissionais/${curriculum.name.toLowerCase()}/${curriculum.id}`}>ver mais</Link>
        </div>
    </Container>
}