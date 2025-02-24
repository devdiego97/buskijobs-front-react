import { useEffect, useState } from "react"
import { ContentPage } from "../../../componentes/ContentPage"
import { Page, SectionDetailsJobs } from "./style"
import Arrowright from "../../../assets/svgs/arrowright"
import Deficiency from "../../../assets/svgs/deficiency"
import { useAuthContext } from "../../../context/authContext"
import { IJob } from "../../../interfaces/job"
import {  Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { apiJobs } from "../../../services/jobs.action"
import { Painel } from "../../../componentes/Painel"
import {  Avatar, Button, Card, Drawer, Heading, HStack,Form, IconButton,
Input,Modal,SelectPicker,Text, VStack } from "rsuite"
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, 
TelegramShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"
import { FaFilter as Filter } from "react-icons/fa"
import { CiCircleList as List } from "react-icons/ci"
import { ILevels } from "../../../interfaces/levels"
import { apiStatesCity, IState } from "../../../services/stateCity"
import apiLevels from "../../../services/apiLevels"
import { BsEnvelope as Mensage } from "react-icons/bs";
import Tooltip from "../../../componentes/Tooltip"
import FormGroup from "rsuite/esm/FormGroup"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import { IUser } from "../../../interfaces/user"



export const VagaPainelId=()=>{
    const nav=useNavigate()
    const [openModalMessage,setOpenModalMessage]=useState(false)
    const [openModalApplications, setModalApplications] =useState(false)
    const {user}=useAuthContext()
    const [jobId,setJobId]=useState<IJob | null>(null)
    const params=useParams()
    const location=useLocation()
    const articleUrl = `https://${location.pathname}`
    const {id}=params

     /* States de Dados de apis */
     const [levels,setLevels]=useState<ILevels[] | []>([])
     const [stateSelected,setStateSelected]=useState<string>('0') 
     const [citySelected,setCitySelected]=useState<string>('0')         //estado object
     const [statesList,setStatesList]=useState<IState[] | []>([])   //lista de estados
     const [cityList,setCityList]=useState<{id:number,nome:string}[] | []>([])    //lista de cidades do estado
    const [userSendMessage,setUserSendMessage]=useState<IUser | null>(null)



     const sendMessageFromcandidate=(user:IUser)=>{
        setUserSendMessage(user)
        setOpenModalMessage(true)

     }
 
   
    //Buscando na api a lista de cidades  
    useEffect(()=>{
            const getStates=async()=>{
                const listStates=await apiStatesCity.getStates() as IState[]
                setStatesList(listStates)
            }
    getStates()
    },[])
        
//Setando as cidades no select de acordo com o estado selecionado
useEffect(()=>{
       if(stateSelected){
            const stateObject=statesList.find(s=>s.sigla === stateSelected)
            setStateSelected(stateSelected)
            const getCitys=async()=>{
               if(stateObject){
                 const citys=await apiStatesCity.getCityFromState(stateObject.id as number) as {id:number,nome:string}[]
                 setCityList(citys)
              }
            }
          getCitys()
        }
},[stateSelected])



useEffect(()=>{
        const getJobById=async()=>{
            const job=await apiJobs.getJobId(parseInt(id as string))
            setJobId(job)      
        }

         const getLevels=async()=>{
                    const listLevels=await apiLevels.getAllLevels() as ILevels[]
                    if(listLevels.length >  0){
                      setLevels(listLevels)
                    }
       
        }
        getLevels()
       setTimeout( getJobById,100)
   
},[])

useEffect(()=>{
     document.title='Painel|Recurtador'
},[])
    
  

return <Painel>
        <ContentPage titlePage={``}>
        <Page>
        
        <div className="header-page">
          <div className="title-action">
                <Heading as={"h3"}>{jobId?.title} <small>{jobId?.category.name}</small></Heading>
                <div>
                    <button onClick={()=>setModalApplications(true)} >ver candidaturas</button>
                    <Link to={`/painel/recrutador/atualizarvaga/${jobId?.id}`}>Editar</Link>
                </div>
          </div>
          {jobId?.exclusivepcd  && <div className="pcd-line">
           <div className="cx">
             <Deficiency />
             {jobId?.exclusivepcd ? 'Vaga exclusiva para PCD' : null}
           </div>
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
                            <p >{jobId?.modelOperating?.name}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Tipo de contrato</div>
                        <div className="card-body">
                            <p className="card-contrato">{jobId?.jobContractType?.name}</p>
                        </div>
                    </div>
                </SectionDetailsJobs>
            }
           
              <Card  style={{margin:'60px 0',padding:'15px'}}>
                    
                        <VStack>
                         <Text size={"md"}>Compartilhe essa vaga com amigos : </Text>
                           <HStack>
                            <FacebookShareButton  url={articleUrl} title="compartilhar no facebook" hashtag={'#nextshare'} >
                                < FacebookIcon  size = { 52 }  round  /> 
                            </FacebookShareButton>
                            <TelegramShareButton url={articleUrl}  title={'next-share is a social share buttons for your next React apps.'} >
                                <TelegramIcon size={52} round />
                            </TelegramShareButton>
                            <LinkedinShareButton url={articleUrl}>
                                <LinkedinIcon size={52} round />
                            </LinkedinShareButton>
                            <WhatsappShareButton  url={articleUrl} title={'next-share is a social share buttons for your next React apps.'} >
                                <WhatsappIcon  size={52} round />
                            </WhatsappShareButton>
                            </HStack>

                    </VStack>
                </Card>
                
             
            </Page>
        
           <Drawer size={"lg"}  open={openModalApplications} onClose={() => setModalApplications(false)}>
                <Drawer.Header>
                    <Drawer.Title as={"strong"}>Candidaturas {jobId?.applications.length}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <HStack>
                        <Card as={"fieldset"} style={{width:'30%',padding:'12px',height:'500px'}}>
                            <legend><Filter/>Filtros</legend>
                            <VStack style={{margin:'8px 0'}} justifyContent="center" alignItems="center" >
                                <Text as="label" htmlFor="">Nivel Profissional</Text>
                               <SelectPicker block name="level" placeholder="nivel de profissional" data={levels.map(c=>({label:c.name,value:c.id}))}  />
                            </VStack>
                            <VStack style={{margin:'8px 0'}} justifyContent="center" alignItems="center">
                                <Text as={"label"}>Estado</Text>
                                <SelectPicker
                                    placeholder="selecione o estado"
                                    block
                                    name="states"
                                    onChange={value=>setStateSelected(value as string)}
                                    data={statesList.map(item => ({ label: `${item.nome}-${item.sigla}`, value: item.sigla }))}
                                />
                          </VStack>  
                          <VStack style={{margin:'8px 0'}} justifyContent="center" alignItems="center">
                             <Text as={"label"}> Cidade</Text>
                             <SelectPicker placeholder="Selecione a cidade" 
                               onChange={value=>setCitySelected(value as string)}
                                data={cityList.map(i=>({label:i.nome,value:`${i.nome}`}))}
                             />
                         </VStack> 
                         <VStack style={{margin:'30px 0'}}  justifyContent="center" alignItems="center">
                            <Button block appearance="primary">Filtrar</Button>
                            <Button block >remover filtros</Button>
                         </VStack>

                        </Card>
                        <Card style={{flex:'1',padding:'12px',height:'550px'}}>
                            <Card.Header >
                              <Text as={"strong"} style={{marginBottom:'15px'}}><IconButton icon={<List />} />  Candidatos</Text>
                            </Card.Header>
                            <VStack>
                                {jobId?.applications.length  ? jobId?.applications.map((i=><Card style={{padding:'5px',margin:'8px 0'}}>
                                     <HStack justifyContent="space-between">
                                      <HStack>
                                        <Avatar circle src={i.curriculum.user.photo} />
                                        <Text>Kaique Silva</Text>
                                      </HStack>
                                      <HStack>
                                        <Tooltip text="enviar mensagem ao candidato" placement="bottomStart" color="green" trigger="hover">
                                          <IconButton onClick={()=>sendMessageFromcandidate(i.curriculum.user)} icon={<Mensage />} appearance="primary" color="green" />
                                        </Tooltip>
                                         <Button appearance="primary"  
                                          onClick={()=>nav(`/painel/recrutador/${user?.name.toLowerCase()}/profissionais/${i.curriculum.name.toLowerCase()}/${i.curriculum.id}`)}
                                          size="sm">ver curriculo</Button>
                                       </HStack>
                                     </HStack>
                                </Card>)) : <Text>Nenhuma candidatura </Text>}
                            </VStack>
                        </Card>
                    </HStack>
                </Drawer.Body>
        </Drawer>

        <Modal open={openModalMessage} onClose={()=>setOpenModalMessage(false)}>
            <Modal.Header>
                <HStack>
                    <IconButton icon={<Mensage />} appearance="primary" color="green" />
                    <Text as="h4">Mensagem</Text> 
                </HStack>
                <Card style={{margin:'12px',padding:'12px'}}>
                    <VStack>
                        <HStack><Avatar circle size="sm" />
                           <Text size={'sm'} as={"strong"}>Recrutador:</Text>
                           <Text size={'sm'}> {user?.name} {user?.lastname}</Text> 
                        </HStack>
                        <HStack>
                            <Avatar circle size="sm" src={userSendMessage?.photo} />
                           <Text size={'sm'} as={"strong"}>Candidato:</Text>
                           <Text size={'sm'} >{userSendMessage?.name} {userSendMessage?.lastname}</Text>
                        </HStack>
                    </VStack>
                </Card>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup>
                        <FormControlLabel as={'strong'}>Assunto</FormControlLabel>
                        <Input value={""} name="" onChange={()=>{}}/>
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel as={'strong'} >Mensagem</FormControlLabel>
                        <Input style={{resize:'none'}} as={"textarea"} rows={10} value={""} name="" onChange={()=>{}}/>
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button appearance="primary" color="green">Enviar</Button>
            </Modal.Footer>
        </Modal>
    </ContentPage>
    </Painel>
}