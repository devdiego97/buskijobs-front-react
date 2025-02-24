import { Painel } from "../../../componentes/Painel"
import { Button, Container } from "rsuite"
import { useGlobalContext } from "../../../context/globalContext"
import { useAuthContext } from "../../../context/authContext"
import BoxImageText from "../../../componentes/BoxImageText"
import { Page } from "./style"
import gsap from "gsap"
import { useEffect} from "react"
import { useNavigate } from "react-router-dom"



export const HomePainel=()=>{
  const {user}=useAuthContext()
  const navigate=useNavigate()
 
  const tl=gsap.timeline(
    {
      defaults:{
        duration:1
      }
    }
  )


  useEffect(()=>{

    tl.fromTo('.box-1',
     {opacity:0},
     {opacity:1}
    ).fromTo('.box-2',
     {opacity:0},
     {opacity:1}
   ).fromTo('.box-3',
    {opacity:0,},
    {opacity:1,}
  )
  tl.eventCallback('onComplete', () => {
    console.log('Timeline concluída!')
  },[])
  },[])





    
    return <Painel  >
        <Page className='.painel'>
         <BoxImageText className="box-1" radius="30px" height="600px" urlImage="/imgs/recruiter.png" >
            <div className="cx-box content-box-one">
               <div className="text">
                  <h3>Olá Recrutador</h3>
                  <p>Bem vindo á seu espaço ! Antes de começar á encontrar candidatos e divulgar suas vagas 
                    preencha as informaçôes da sua empresa.<br></br>Clique Abaixo
                  </p>
                  <Button onClick={()=>navigate(`/painel/recrutador/sobre-empresa`)}>clique aqui</Button>
               </div>
            </div>
          </BoxImageText>
          <BoxImageText className="cx-box box-2" radius="30px" height="600px" urlImage="/imgs/searchuser.png">
            <div className="content-box-two">
                <div className="text">
                    <h3>Muito Bem, Rerutador</h3>
                    <p>Se você já colocou as informações da empresa em que Trabalha você já pode buscar por centenas de 
                      curriculos de candidatos dentro da plataforma.
                      <br></br>Clique Abaixo
                    </p>
                    <Button onClick={()=>navigate(`/painel/recrutador/candidatos`)} style={{margin:'30px 0'}}>clique aqui</Button>
                </div>
              </div>
          </BoxImageText>
          <BoxImageText className="cx-box box-3" radius="30px" height="600px" urlImage="/imgs/recrutador.jpg">
          <div className="content-box-true">
                <div className="text">
                    <h3>Vamos lá, Recrutador</h3>
                    <p>Se você já colocou as informações da empresa em que Trabalha você já pode buscar por centenas de 
                      curriculos de candidatos dentro da plataforma e também divulgar suas vagas.
                      <br></br>Clique Abaixo
                    </p>
                    <Container style={{margin:'30px'}} >
                      <Button onClick={()=>navigate(`/painel/recrutador/novavaga`)}>cliqque aqui</Button>
                    </Container>
                </div>
              </div>
          </BoxImageText>
    

        </Page>
    </Painel>
}