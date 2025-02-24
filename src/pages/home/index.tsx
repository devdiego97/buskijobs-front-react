import { Link, redirect, useNavigate } from "react-router-dom"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { ContainerOne, ContainerTrue, ContainerTwo } from "./style"
import {gsap} from "gsap"
import { useEffect, useState } from "react"
import { useAuthContext } from "../../context/authContext"
import { Container, Heading, List } from "rsuite"




export const Home=()=>{
  const {user}=useAuthContext()
  const navigate=useNavigate()

  useEffect(()=>{
   const verify=()=>{
    if(user?.type === 'candidato'){
      navigate('/vagas')
    }else if(user?.type === 'recrutador'){
      navigate('/painel/recrutador/candidatos')
    }
   }
    setTimeout(verify,50)
  })


 useEffect(()=>{
  gsap.fromTo(".box", 
   {y:0, opacity: 0 }, // propriedades iniciais
   { y:50,opacity: 1, duration:1 } // propriedades finais
  )
  
  gsap.fromTo('.courses',
  {opacity: 0 }, // propriedades iniciais
  {opacity: 1, duration:2 } 
  )
 
  gsap.fromTo(".recruiter-box", 
   {y:0, opacity: 0 }, // propriedades iniciais
   { y:50,opacity: 1, duration:1 } // propriedades finais
  )

  
},[])


    return <Layout>
       <ContentPage>
           <div className="content">
          <div className="banner">
            

          </div>
          <ContainerOne>
            <div className="left box" id="candidato" >
                <Heading as={"h2"}>Em Busca de novas Oportunidades?</Heading>
                <p>Você está cansado de se candidatar á vagas e nunca dar match com nenhuma? ou está cansado até mesmo de não receber nenhuma resposta?</p>
                <p>Seja Qual for o motivo,você encontrou  lugar certo para encontrar oportunidade !! Aqui você Pode :</p>
                <List  className="list">
                    <List.Item > 👉 Diversas oportunidade para diversas areas profissionais</List.Item>
                    <List.Item> 👉Candidatura á vagas de forma simples e fácil</List.Item>
                    <List.Item> 👉 Personalização de curriculo e atualização á vontade</List.Item>
                    <List.Item> 👉 Feedbacks das suas candidaturas</List.Item>
                  </List>
                  <Link to={'/cadastro/candidato'}><button >Quero candidatar á vagas  </button></Link>
            </div>
            <div className="right --right">
              <img src="/imgs/devhome.png" alt="" />
            </div>
          </ContainerOne>
          <ContainerTwo  className="courses" >
            <h3>Sua chance de  turbinar seu aprendizado 🎓🚀🚀</h3>
            <div className="cxs">
              <div className="cx-image">
                <img src="/imgs/student.jpg" alt="" />
              </div>
              <div className="itens">
                <Heading as={"h4"}>Cursos que te ajudarão na seu novo Emprego</Heading>
                <ul>
                  <li>Introdução á desenvolvimento web</li>
                  <li>Criação de aplicações front-end</li>
                  <li>Lógica de Programção com javascript</li>
                  <li>Criação de aplicações back-end</li>
                </ul>

                <Link to={'/cursos'}>
                  Quero conhecer os cursos
                </Link>
              </div>
              
            </div>
          </ContainerTwo>
  <ContainerTrue className="recruiter-box" >
    <div className="cx-image">
    <img src='imgs/recruiteimage.png' alt="" />
    </div>
    <div className="info">
      <div className="content" id="recrutador">
        <Heading as={"h3"}>Para Recrutadores</Heading>
        <p>Veja como encontrar melhores talentos Aqui: 🕵</p>
        
        <List className="list">
          <List.Item> 👉 Mais de 3.000 talentos cadastrados na plataforma</List.Item>
          <List.Item> 👉 Divulgação de suas vagas em aberto</List.Item>
          <List.Item> 👉 Damos a você os candidatos mas adequados a rescpectiva vaga</List.Item>
          <List.Item> 👉 Rapidez,facilidade de os candidatos ideais em um só lugar</List.Item>
        </List>
        
        <Link to={'/cadastro/recrutador'}>
          Quero recrutar talentos
        </Link>
      </div>
    </div>
  </ContainerTrue>
</div>
</ContentPage>

    </Layout>
}
