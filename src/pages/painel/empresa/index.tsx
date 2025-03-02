import { useEffect, useState } from "react"
import {  Link, useNavigate } from "react-router-dom"
import { Painel } from "../../../componentes/Painel"
import {ICompany } from "../../../interfaces/company"
import apiCompany from "../../../services/apiCompany"
import { useAuthContext } from "../../../context/authContext"
import { toast } from "react-toastify"
import swal from "sweetalert"
import { useGlobalContext } from "../../../context/globalContext"
import { Button, Card, Container, Divider, FlexboxGrid, Heading, HStack, Tabs, Tag, Text,  } from "rsuite"
import { apiJobs } from "../../../services/jobs.action"
import useCompanyStore from "../../../zustand/company.zustand"
import { BoxBgImg, ErrorCompany, Page } from "./style"
import { baseURL } from "../../../config/axios.config"



export const EmpresaPainel=()=>{
    const{company,saveCompany,deleteCompany}=useCompanyStore()
    const {user}=useAuthContext()
   const {handleStateModal}=useGlobalContext()
   const navigate=useNavigate()

   const nav=(path:string)=>{
    navigate(path)
   }
   

    useEffect(()=>{
       const getCompany=async()=>{
          if(user){
            const response=await apiCompany.getCompanyFromUser(company?.user.id as number) as ICompany
            if(response.name){
             saveCompany(company as ICompany)
            }else{
             saveCompany(null)
            }
           }
        }
      setTimeout(getCompany,50)
    },[])


const deleteCompanyFromApi=async()=>{
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
         if(company){
            const deleteCompany=async()=>{
            await apiCompany.deleteCompanyFromUser(company?.id)
          }
          deleteCompany()
         }
          
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
          company ?  <>
          <div className="header-page">
              <div className="logo-name">
                  <BoxBgImg  urlImg={`${baseURL}public/images/${company?.logo}`}  />
                  <h2>{company?.name}</h2>
              </div>
              <HStack justifyContent="flex-end" style={{padding:'30px'}}>

                   <Link color="white" to={`/painel/recrutador/${user?.name.toLowerCase()}/${company.name}/edite_empresa`} >
                     <Button appearance="primary" >Editar</Button>
                   </Link>
                  <Button appearance="primary" color="red"  onClick={deleteCompanyFromApi} >Deletar</Button>
              </HStack>
            </div>
          <main className="content">
              <section>
                  <h3>Sobre Nós</h3>
                  <p>{company?.about}</p>
              </section>
              <section>
                  <section className="vagas">
                    <h3>Vagas</h3>
                    <Tabs defaultActiveKey="1"   >
                    <Tabs.Tab eventKey="1" title="Ativas">
                      <HStack>
                       
                      </HStack>
                     <FlexboxGrid justify="center" >
                      {company.jobs && company.jobs.map(j=>
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
                                <Button   onClick={()=>nav(`/painel/recrutador/${user?.name}/${company.name.toLowerCase()}/vagaspostadas/${j.id}`)}  block appearance="primary" >ver vaga</Button>
                             </Card.Footer>
                            </Card.Body>
                          </Card>
                          </FlexboxGrid.Item>
                        )}
                     </FlexboxGrid>
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="2"  title="Congeladas">
                    <HStack>
                       
                      </HStack>
                     <FlexboxGrid justify="center" >
                      {company?.jobs.map(j=>
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
                      
                      </HStack>
                     <FlexboxGrid justify="center" >
                      {company?.jobs?.map(j=>
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
       
       </> : <ErrorCompany>
            <div>
              <Heading>Você ainda não cadastrou sua empresa</Heading>
              <p>Clique aqui para preencher dados da empresa e desbloquear funcionalidades</p>
              <Button appearance="primary" color="blue" size="lg" 
                onClick={()=>nav(`/painel/recrutador/${user?.name.toLowerCase()}/configure-empresa`)}
                block style={{margin:'40px 0'}}>Cadastrar minha Empresa</Button>
            </div>
        </ErrorCompany>
        }

       </Page>  
   </Painel>
   
}

