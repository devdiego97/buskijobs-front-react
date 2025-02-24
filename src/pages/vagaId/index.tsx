import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { IJob } from "../../interfaces/job"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { apiJobs } from "../../services/jobs.action"
import { toast } from "react-toastify"
import { Page, SectionDetailsJobs, SectionJobsSimilar, ShareLinks } from "./style"
import { Layout } from "../../componentes/Layout"
import './../../../public/assets/company-logo.png'
import Arrowright from "../../assets/svgs/arrowright"
import { baseURL } from "../../config/axios.config"
import { useAuthContext } from "../../context/authContext"
import { apiApplication } from "../../services/applications.action"
import { IApplication } from "../../interfaces/application"
import Deficiency from "../../assets/svgs/deficiency"
import Loading from "../../componentes/Loading"
import { GlobalStyle } from "../../globalStyle"
import { Link } from "react-router-dom"
import { FacebookIcon, FacebookShareButton, LinkedinIcon, 
    LinkedinShareButton, TelegramIcon, 
    TelegramShareButton, TwitterIcon, TwitterShareButton, 
    WhatsappIcon, WhatsappShareButton 
} from "react-share"
import SlideRecommendJobs from "../../componentes/SlideRecommendJobs"
import { Card,Text, HStack, VStack } from "rsuite"


export const VagaId=()=>{
    const {user,curriculumContext}=useAuthContext()
    const [loadingJob,setLoadingJob]=useState(true)
    const [hasApplication,setHasApplication]=useState<true | false>(false)
    const [application,setApplication]=useState<IApplication | null>(null)
    const [jobs,setJobs]=useState<IJob[] | []>([])
    const [jobsRecommended,setJobsRecommended]=useState<IJob[] | null>(null)
    const [jobId,setJobId]=useState<IJob | null>(null)
    const params=useParams()
    const location=useLocation()
    const navigate=useNavigate()
    const articleUrl=window.location.origin + location.pathname
    const {id}=params
   
    useEffect(()=>{
        if(jobs){
            const jobsList=jobs.filter((j)=>j.id !== jobId?.id && j.title === jobId?.title ||
              j.requirements.includes(`${jobId?.requirements.split('').toString()}`))
            setJobsRecommended(jobsList.slice(0,4))
        }
    },[params.id])

    useEffect(()=>{
        const getAllJobs=async()=>{
            const list=await apiJobs.getAllJobs()
            setJobs(list)
        }
       getAllJobs()
     
    },[])

    useEffect(()=>{
        const verifyApplicationByIdJob=async()=>{
            if(curriculumContext && jobId){
              const list=await apiApplication.getApplications(curriculumContext.id as number) as IApplication[]
              const verify=list.some(i=>i.idjob === jobId.id && i.curriculum.id === curriculumContext?.id)
              const applicationUser=list.find(i=>i.idjob === jobId.id && i.curriculum.id === curriculumContext?.id)
             setHasApplication(verify)
             setApplication(applicationUser as IApplication)
          
            }
            
      }
     setTimeout(verifyApplicationByIdJob,50);
    })


useEffect(()=>{
        const getJobById=async()=>{
            const job=await apiJobs.getJobId(parseInt(id as string))
            setJobId(job)
            setLoadingJob(false)      
        }
      
     setTimeout(getJobById,5000)
},[params.id])






    useEffect(()=>{
        document.title='MyJobs/Vaga'
      },[])

      

    const ClickCandidateToJob=async()=>{
        //Função que faz a verificação de curriculo e usuário e só então faz a candidatura
        
        const d=new Date()
        if(!user){
            toast.error('Ops!você não tem uma conta 😢 ')
        }else if(curriculumContext === null){
            toast.error('Ops!você ainda não criou o seu curriculo 😢 ')
        }else if(user !== null && jobId !== null && curriculumContext){
            if(jobId.exclusivepcd === true && curriculumContext.pcd === 0){
                toast.error('Ops!vaga excluiva para PCD ')
            }else{
                await apiApplication.addApplication(curriculumContext?.id as number ,jobId.id,d.toLocaleDateString())
                toast.success('candidatura feita!')
                navigate(`/candidaturas`)
            }
        }else if(!curriculumContext){
           
        }
    }

    return <Layout>
        <ContentPage titlePage={``}>
        {loadingJob && <Loading text="Aguarde,carregando detalhes da vaga.." type="bubbles" color={`${GlobalStyle.bgTheme}`} />}
        {!loadingJob &&  <Page>
        <div className="header-page">
          <h3>{jobId?.title} <span>{jobId?.category.name}</span></h3>
         <div className="smalls">
            <small >Publicada em {jobId?.createDate}</small>
            <small >{jobId?.applications.length} candidatura(s)</small>
         </div>
          { <div className="pcd-line">
           {jobId?.exclusivepcd  && <div className="cx"><Deficiency />{jobId?.exclusivepcd ? 'Vaga exclusiva para PCD' : null}</div>}
           <div>{hasApplication && <small>✅ Você  já se candidatou á essa vaga em {application?.date} </small> }</div>
          </div>}
         
          
         </div>

           {<SectionDetailsJobs>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Descrição</div>
                        <div className="card-body">
                            <p>{jobId?.description}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Requisitos</div>
                        <div className="card-body">
                            <p>{jobId?.requirements.split(',').map((i,k)=><li key={k}>{i}</li>)}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Salário</div>
                        <div className="card-body">
                            <p>{jobId?.salary  ? `R$ ${jobId?.salary.toString().replace('.',',')}` : 'Salário não especificado'}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Beneficios</div>
                        <div className="card-body">
                            <p>{jobId?.benefits.split(',').map((i,k)=><li key={k}>{i}</li>)}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Localização/Atuação</div>
                        <div className="card-body">
                            <p >{jobId?.modelOperating?.name !== 'Remoto' ?  `${jobId?.modelOperating?.name} em ${jobId?.city}/${jobId?.state}` : `${jobId?.modelOperating?.name}`}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Tipo de contrato</div>
                        <div className="card-body">
                            <p className="card-contrato">{jobId?.jobContractType?.name}</p>
                        </div>
                    </div>

                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Sobre a Empresa</div>
                        <div className="card-body-company">
                            <div className="cx-img">
                             {jobId?.company &&  <img src={jobId.company.logo !== null  ? `${baseURL}public/images/${jobId.company.logo}` : '/public/assets/company-logo.png'} alt="Logo da Empresa"  />}
                            </div>
                            <div className="data">
                           {
                            jobId?.company !== undefined && <>
                                <div>
                                  <h3>{jobId.company &&  jobId?.company.name}</h3>
                                  <Text>{jobId.company.about}</Text>
                                </div>
                            </>
                           }
                            </div>
                        </div>
                        <div className="cx-link">
                                <Link to={`/${jobId?.company.name.toLowerCase()}/${jobId?.company.id}/vagas`}>ver mais vagas da empresa</Link>
                        </div>
                    </div>
                    <div className="actions">
                      {(!hasApplication ) && <button onClick={ClickCandidateToJob}>candidatar</button> }
                       
                    </div>
                </SectionDetailsJobs>
            }
           
              <Card className="share-links">
                    
                        <VStack>
                         <Text size={"md"}>Compartilhe essa vaga com amigos </Text>
                        </VStack>
                        <HStack>
                           <FacebookShareButton   url={articleUrl}  title={`Candidata-se á vaga de ${jobId?.title}`} hashtag={'#nextshare'}  >
                            < FacebookIcon  size = { 52 } textRendering={'compartilhar'}  round  /> 
                          </FacebookShareButton>
                          <TelegramShareButton url={articleUrl}  title={`Candidata-se á vaga de ${jobId?.title}`}>
                            <TelegramIcon size={52} round/>
                          </TelegramShareButton>
                          <LinkedinShareButton url={articleUrl}>
                            <LinkedinIcon size={52} round />
                          </LinkedinShareButton>
                          <WhatsappShareButton url={articleUrl}   title={`Candidata-se á vaga de ${jobId?.title}`} >
                            <WhatsappIcon  size={52} round />
                          </WhatsappShareButton>
                          <TwitterShareButton url={articleUrl}  title={`Candidata-se á vaga de ${jobId?.title}`}>
                            <TwitterIcon size={52} round />
                          </TwitterShareButton>

                    
                    </HStack>
                </Card>
                <SectionJobsSimilar>
                    <h3>Vagas Semelhantes💻😉</h3>
                    <p>Você pode gostar também de :</p>
                    {jobsRecommended ? <div className="cx-slide">
                        <SlideRecommendJobs jobsData={jobsRecommended}/>
                    </div> : <p>Nenhuma vaga recomendada</p>}
                </SectionJobsSimilar>
                 
             
            </Page>
}  
        
    </ContentPage>
    </Layout>
}