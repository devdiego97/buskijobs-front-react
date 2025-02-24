import { Link } from "react-router-dom"
import { Container } from "./style"
import Face from "../../assets/svgs/face"
import Whatss from "../../assets/svgs/whatss"
import Linked from "../../assets/svgs/linked"
import Insta from "../../assets/svgs/Insta"


export const Footer=()=>{
    
    return <Container>
        <div className="bx bx-1">
            <h3>Sobre Nós</h3>
            <p>
           Somos uma plataforma  plataforma oferece uma variedade de cursos pagos e gratuitos para impulsionar o 
           desenvolvimento profissional. Além disso, conectamos indivíduos a oportunidades de emprego emocionantes em diversos 
           setores. Seja você um iniciante buscando sua primeira oportunidade ou um profissional experiente em busca de novos desafios, 
           stamos aqui para ajudar a encontrar o ajuste perfeito. Para empregadores, fornecemos ferramentas intuitivas de recrutamento, 
           simplificando o processo de contratação desde a criação de perfis de empresa até a seleção de candidatos. Nossa plataforma serve
            como um espaço vibrante onde conexões são feitas e oportunidades são descobertas, capacitando indivíduos 
           a alcançarem seus objetivos profissionais e além. Junte-se a nós nesta jornada de aprendizado e crescimento.
            <div className="medias">
            <p> Nos Acompanhe nas Redes</p>
            <div className="media-icons">
                <Face />
                <Whatss />
                <Linked /> 
                <Insta />
                <span></span>
            </div>
           </div>
           </p>
        </div>
        <div className="bx bx-2">
          <h3>Encontre vagas por Estados</h3>
          <Link to={''}>Vagas para SP</Link>
          <Link to={''}>Vagas para RJ</Link>
          <Link to={''}>Vagas para MG</Link>
          <Link to={''}>Vagas para RR</Link>
          <Link to={''}>Vagas para BA</Link>
          <Link to={''}>Todos</Link>
        
        </div>
        <div className="bx bx-3">
        <h3>Encontre vagas por Categoria</h3>
          <Link to={''}>Vagas para TI</Link>
          <Link to={''}>Vagas para Contabilidade</Link>
          <Link to={''}>Vagas para Engenharia</Link>
          <Link to={''}>Vagas para RR</Link>
          <Link to={''}>Vagas para BA</Link>
          <Link to={''}>Todos</Link>
        </div>
        
    </Container>
}