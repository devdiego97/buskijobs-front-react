import { useEffect, useState } from "react"
import { BoxBgImg, Page } from "./style"
import { Link, useNavigate } from "react-router-dom"
import { Painel } from "../../../componentes/Painel"
import {ICompany } from "../../../interfaces/company"
import apiCompany from "../../../services/apiCompany"
import { baseURL } from "../../../config/axios.config"
import { useAuthContext } from "../../../context/authContext"
import { toast } from "react-toastify"
import swal from "sweetalert"
import { useGlobalContext } from "../../../context/globalContext"
import { Button, Card, Divider, FlexboxGrid, HStack, Tabs, Tag, Text,  } from "rsuite"
import { apiJobs } from "../../../services/jobs.action"



export const EmpresaPainel=()=>{
    const [companyId,setCompanyId]=useState<ICompany| null>(null)
    const {user}=useAuthContext()
   const {handleStateModal}=useGlobalContext()
   const navigate=useNavigate()

   const nav=(path:string)=>{
    navigate(path)
   }
    useEffect(()=>{
      const hasCompanyStorageVerify=()=>{
        const companyStorage=localStorage.getItem('@companyid')
        if(companyStorage !== 'undefined'){
          handleStateModal(false)
        }else{
          handleStateModal(true)
        }
      }
      hasCompanyStorageVerify()
    },[])

    useEffect(()=>{
       const getCompany=async()=>{
          if(user){
            const response=await apiCompany.getCompanyFromUser(user.id as number) as ICompany
            if(response.name){
              setCompanyId(response)
            }else{
              setCompanyId(null)
            }
           }
        }
      setTimeout(getCompany,50)
    },[])


const deleteCompany=async()=>{
    swal({
      title:'Tem certeza?',
      text: 'Se deletar essa empresa todas as vagas vinculadas á ela serão deletadas?',
      icon: 'info',
      
      buttons:
          {
              cancel: {
                text: "Cancel",
                value:false,
                visible: true,
                className: "",
                closeModal: true,
              },
              confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "",
                closeModal: true
              }
            }
      ,
    }).then((result) => {
      if (result) {
         if(companyId){
            const deleteCompany=async()=>{
            await apiCompany.deleteCompanyFromUser(companyId?.id)
          }
          deleteCompany()
         }
          localStorage.removeItem('@companyid')
          navigate('/painel/recrutador')
          toast.success('Empresa deletada')
      } else {
          console.log(result)
      }
    })
  }

  const deleteJob=(id:number)=>{
    swal({
        title: 'Tem certeza?',
        text: 'Se deletar essa vaga todas as candidaturas serão deletadas automaticamente',
        icon: 'info',
        buttons:
            {
                cancel: {
                  text: "Cancel",
                  value:false,
                  visible: true,
                  className: "",
                  closeModal: true,
                },
                confirm: {
                  text: "OK",
                  value: true,
                  visible: true,
                  className: "",
                  closeModal: true
                }
              }
        ,
      }).then((result) => {
        if (result) {
           const deleteJobId=async()=>{
               await apiJobs.deleteJobId(id)
           }
           deleteJobId()
           toast.success('Vaga deletada')
        } else {
            console.log(result)
        }
      })
}

    return <Painel p="0">
      <Page>
        {
          companyId ?  <>
          <div className="header-page">
              <div className="logo-name">
                  <BoxBgImg urlImg={`${baseURL}public/images/${companyId?.logo}`}  />
                  <h2>{companyId?.name}</h2>
              </div>
              <HStack justifyContent="flex-end" style={{padding:'30px'}}>

                   <Link color="white" to={`/painel/recrutador/${user?.name.toLowerCase()}/${companyId.name.toLowerCase()}/edite_empresa`} >
                     <Button appearance="primary" >Editar</Button>
                   </Link>
                  <Button appearance="primary" color="red"  onClick={deleteCompany} >Deletar</Button>
              </HStack>
            </div>
          <main className="content">
              <section>
                  <h3>Sobre Nós</h3>
                  <p>{companyId?.about}</p>
              </section>
              <section>
                  <section className="vagas">
                    <h3>Vagas</h3>
                    <Tabs defaultActiveKey="1"   >
                    <Tabs.Tab eventKey="1" title="Ativas">
                      <HStack>
                        <Text as={'strong'} style={{ margin:'12px' }} color="blue">51 vagas Ativas</Text>
                      </HStack>
                     <FlexboxGrid justify="center" >
                      {companyId.jobs.map(j=>
                          <FlexboxGrid.Item colspan={6} style={{ margin:'12px'}}>
                            <Card style={{ width:'100%' }}>
                            <Card.Header>
                              <Text as='h5'>{j.title}</Text>
                            </Card.Header>
                            <Divider/>
                            <Card.Body>
                             <HStack >
                               <Tag size="sm" color="blue">publicada em {j.createDate}</Tag>
                               <Tag size="sm" color="green">{j.category.name}</Tag>
                             </HStack>
                            </Card.Body>
                            <Card.Body>
                             <Card.Footer>
                                <Button   onClick={()=>nav(`/painel/recrutador/${user?.name}/${user?.company}/vagaspostadas/${j.id}`)}  block appearance="primary" >ver vaga</Button>
                             </Card.Footer>
                            </Card.Body>
                          </Card>
                          </FlexboxGrid.Item>
                        )}
                     </FlexboxGrid>
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="2"  title="Congeladas">
                    <HStack>
                        <Text as={'strong'} style={{ margin:'12px' }} color="orange">51 vagas Congeladas</Text>
                      </HStack>
                     <FlexboxGrid justify="center" >
                      {companyId.jobs.map(j=>
                          <FlexboxGrid.Item colspan={6} style={{ margin:'12px'}}>
                            <Card style={{ width:'100%' }}>
                            <Card.Header>
                              <Text as='h5'>{j.title}</Text>
                            </Card.Header>
                            <Divider/>
                            <Card.Body>
                             <HStack >
                               <Tag size="sm" color="blue">publicada em {j.createDate}</Tag>
                               <Tag size="sm" color="green">{j.category.name}</Tag>
                             </HStack>
                            </Card.Body>
                            <Card.Body>
                             <Card.Footer>
                                <Button block   onClick={()=>nav(`/painel/recrutador/${user?.name}/${user?.company}/vagaspostadas/${j.id}`)} 
                                appearance="primary" >ver vaga</Button>
                             </Card.Footer>
                            </Card.Body>
                          </Card>
                          </FlexboxGrid.Item>
                        )}
                     </FlexboxGrid>
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="3" title="Finalizadas">
                    <HStack>
                        <Text as={'strong'}  style={{ margin:'12px' }} color="red">51 vagas Finalizadas</Text>
                      </HStack>
                     <FlexboxGrid justify="center" >
                      {companyId.jobs.map(j=>
                          <FlexboxGrid.Item colspan={6} style={{ margin:'12px'}}>
                            <Card style={{ width:'100%' }}>
                            <Card.Header>
                              <Text as='h5'>{j.title}</Text>
                            </Card.Header>
                            <Divider/>
                            <Card.Body>
                             <HStack >
                               <Tag size="sm" color="blue">publicada em {j.createDate}</Tag>
                               <Tag size="sm" color="green">{j.category.name}</Tag>
                             </HStack>
                            </Card.Body>
                            <Card.Body>
                             <Card.Footer>
                                <Button  block appearance="primary" 
                                 onClick={()=>nav(`/painel/recrutador/${user?.name}/${user?.company}/vagaspostadas/${j.id}`)}
                                >ver vaga</Button>
                                <Button onClick={()=>deleteJob(j.id)} block appearance="ghost" >deletar vaga</Button>
                             </Card.Footer>
                            </Card.Body>
                          </Card>
                          </FlexboxGrid.Item>
                        )}
                     </FlexboxGrid>
                    </Tabs.Tab>
                  
    
                    </Tabs>
                       
                </section>
              </section>
          </main>
       
       </> : <HStack>
        <Text>Você não cadastrou sua empresa</Text>.<Link to={`/painel/recrutador/configure_empresa `}>clique aqui</Link>
       </HStack>
      
        }
       </Page>
    </Painel>
   
}

