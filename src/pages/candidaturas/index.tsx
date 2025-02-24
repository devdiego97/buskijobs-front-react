import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { IApplication } from "../../interfaces/application"
import {apiApplication } from "../../services/applications.action"
import { CardApplication } from "../../componentes/CardApplication"
import { Page } from "./style"
import { useAuthContext } from "../../context/authContext"
import Loading from "../../componentes/Loading"
import { GlobalStyle } from "../../globalStyle"



export const Candidaturas=()=>{
  const [applications,setApplications]=useState<IApplication[] | null>(null)
  const [loadingApplications,setLoadingApplications]=useState(true)
  const {curriculumContext}=useAuthContext()
  



    useEffect(()=>{
        document.title='MyJobs/Candidaturas'
      },[])

    useEffect(()=>{
      //Pegar candidaturas via curriculo
        const getApplications=async()=>{
          if(curriculumContext == null){
            setApplications(null)
            setLoadingApplications(false)
          
          }else{
            
            const dataList:IApplication[] | []=await apiApplication.getApplications(curriculumContext.id)
            setApplications(dataList)
            setLoadingApplications(false)
          }
        }
    
      
        setTimeout(() => {
          getApplications()
        }, 5000);
  },[])
      
    return <Layout>
      <ContentPage titlePage={`Minhas Candidaturas`}>
      <Page>
      {loadingApplications  &&  <Loading text="Carregando suas candidaturas..." type="bubbles" color={`${GlobalStyle.bgTheme}`} /> }
      {(!loadingApplications && applications)  ?   applications.map((a,k)=>(
         <CardApplication application={a} key={k} />)) :  <p>🫤 Você ainda não se candidatou á nenhuma vaga</p>

      }
       
      </Page>
    </ContentPage>
    </Layout> 
}