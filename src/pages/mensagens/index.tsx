import { Avatar, Button, Card, Container, FlexboxGrid, Heading, HStack,  Modal, Placeholder, Text } from "rsuite"
import { Layout } from "../../componentes/Layout"
import { Page } from "./style"
import MessageIcon from '@rsuite/icons/Message'
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem"
import { useEffect, useState } from "react"
import { IMessage } from "../../interfaces/message"
import apiMessage from "../../services/apiMessage"
import { useAuthContext } from "../../context/authContext"


export const Mensagens= ()=>{
    const { user}=useAuthContext()
    const [error,setError]=useState(false)
    const [open,setOpen]=useState(false)
    const [loading,setLoading]=useState(true)
    const [messagesList,setMessagesList]=useState<IMessage[] | null>(null)
    const [messageId,setMessageid]=useState<IMessage | null>(null)
    const hadleModalSetFromMessage=(message:IMessage)=>{
        setMessageid(message)
        setOpen(true)
    }

    const handleModalResetMessage=()=>{
        setMessageid(null)
        setOpen(false)
    }

    useEffect(()=>{
        const getListMessages=async()=>{
          if(user){
            const data:IMessage[] | string=await apiMessage.getMensagensFromUserById(user.id as number)
            if(data as IMessage[]){
                setTimeout(()=>{
                    setMessagesList(data as IMessage[])
                    setLoading(false)
                },1900)
            }else{
                console.log(data)
                setTimeout(()=>{
                    setMessagesList(null)
                    setLoading(false)
                },1900)
                
            }
          }
        }
        getListMessages()

    },[])

    useEffect(()=>{
        if(!messagesList && !loading){
            setError(true)
        }
    },[messagesList,loading])


    return <Layout>
        <Page>
            <div className="content">
            <Container>
                <Heading><MessageIcon  style={{marginRight:'5px'}} />Mensagens</Heading>
            </Container>
            {
                loading && <>
                 <Placeholder.Paragraph style={{margin:'12px 0' }} rowSpacing={13} graph="circle" active />
                 <Placeholder.Paragraph style={{margin:'12px 0' }} rowSpacing={13} active />
                 <Placeholder.Paragraph style={{margin:'12px 0' }} rowSpacing={13} active />
                 <Placeholder.Paragraph style={{margin:'12px 0' }} rowSpacing={13} graph="circle" active />
                </>
            }
            {(!loading && messagesList) && <div className="show-grid">
               {
                messagesList.map(m=><Card className="card">
                        <Card.Header>
                        <div className="show-grid"> 
                            <FlexboxGrid justify="space-between" >
                                <FlexboxGrid.Item >
                                    <HStack>
                                    <Avatar src="https://i.pravatar.cc/150?u=2" size="md" circle /> 
                                    <Text weight="extrabold">{m.recruiter?.name} {m.recruiter?.lastname}</Text>
                                    </HStack>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item>
                                <Text size={'sm'}>{m.date}</Text>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </div>
                        </Card.Header>
                        <Card.Body>
                            <Text maxLines={2}>{m.message}</Text>
                        </Card.Body>
                        <Card.Footer>
                                <FlexboxGrid justify="end">
                                <FlexboxGridItem>
                                    <Button appearance="primary" style={{margin:'9px'}} onClick={()=>hadleModalSetFromMessage(m!)}>abrir</Button>
                                    <Button appearance="primary" style={{margin:'9px'}}>deletar</Button>
                                </FlexboxGridItem>
                                </FlexboxGrid>
                        </Card.Footer>
                    </Card>) 
               }</div> }
                 
         </div>
      

         
        <Modal  open={open} onClose={()=>setOpen(false)}>
            <Modal.Header style={{borderBottom:'1px solid #ddd',paddingBottom:'9px'}}>
                <HStack>
                    <Avatar  src="https://i.pravatar.cc/150?u=2" circle />
                    <Text style={{marginLeft:'10px'}} weight="bold" >{messageId?.recruiter?.name} {messageId?.recruiter?.name}</Text>
                </HStack>
            </Modal.Header> 
            <Modal.Body>
                <Text>{messageId?.message}</Text>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleModalResetMessage} appearance="ghost">deletar</Button>
            </Modal.Footer>
        </Modal>            
        </Page>
    </Layout>
}

{/*
messagesList.map(m=><Card className="card">
                        <Card.Header>
                           <div className="show-grid"> 
                            <FlexboxGrid justify="space-between" >
                                <FlexboxGrid.Item >
                                    <HStack>
                                      <Avatar src="https://i.pravatar.cc/150?u=2" size="md" circle /> 
                                      <Text>{m.name}</Text>
                                    </HStack>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item>
                                   <Text size={'sm'}>recebida em 12/01/2026</Text>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                           </div>
                        </Card.Header>
                        <Card.Body>
                            <Text maxLines={2}>{m.text}</Text>
                        </Card.Body>
                        <Card.Footer>
                                <FlexboxGrid justify="end">
                                 <FlexboxGridItem>
                                     <Button appearance="primary" style={{margin:'9px'}} onClick={()=>hadleModalSetFromMessage(m)}>abrir</Button>
                                     <Button appearance="primary" style={{margin:'9px'}}>deletar</Button>
                                 </FlexboxGridItem>
                                </FlexboxGrid>
                            
                        </Card.Footer>
                    </Card>
)



*/}