import { Layout } from "../../componentes/Layout"
import { BoxNote, Page } from "./style"
import { useEffect, useState } from "react"
import Close from "../../assets/svgs/close"
import ModuleCourse from "../../componentes/ModuleCourse"
import { ModulesList } from "../../data/modules"
import { toast } from "react-toastify"
import { FaList as List } from "react-icons/fa6"
import { FaNotesMedical as Notes } from "react-icons/fa6"
import { useGlobalContext } from "../../context/globalContext"
import { NotesList } from "../../data/notes"
import {  Card,Divider,FlexboxGrid,HStack,IconButton,List as ListS, Placeholder, Tabs, Text, VStack} from "rsuite"
import FileDownIcon from '@rsuite/icons/FileDownload'
import { RiDeleteBin6Line as Bin } from "react-icons/ri"
import Tooltip from "../../componentes/Tooltip"
import { PiSealQuestionFill as Question } from "react-icons/pi"
import { GlobalStyle } from "../../globalStyle"
import { FaRegNoteSticky as NoteIcon} from "react-icons/fa6"
import { FaRegFilePdf as PdfIcon} from "react-icons/fa"



export default ()=>{
    const {shareClass,setShareClass}=useGlobalContext()
    const [onModules,setOnModules]=useState(true)
    const [onNote,setOnNote]=useState(false)
    const [aboutCourse,setAboutCourse]=useState(false)
    const [onFilesClassroom,setOnFilesClassroom]=useState(false)
    const [classPlayer,setClassPlayer]=useState<string>('https://youtu.be/16163pWP8vk')
    const [activeButton,setActiveButton]=useState(false)
    const [newNote,setNewNote]=useState<string>('')
  

   
useEffect(()=>{
    if(!onNote && !aboutCourse){
        setOnModules(true)
    }

},[onNote,aboutCourse])



const addNewNote=()=>{
    if(newNote.trim() !== '' && newNote.length > 50 && newNote.length < 300){
        const note=newNote
        setNewNote('')
        toast.success('Nova anotação criada')
    }else{
        toast.error('A anotação deve ter no minimo 50 caracteres e no máximo 300')
    }
}




    return <Layout>
        <Page  >
            
           <h3>Aula {shareClass?.name}</h3>
           <section className="player-tools">
                <div className="player">
                    <div className="cx-player">
                        <video src={classPlayer}  controls={true}></video> 
                       
                    </div>  
                </div>
               <div className="tools">
                    <div className="top-tools">
                        <div className="header-tools">
                           <HStack justifyContent="space-around">
                                <Tooltip  trigger="hover"placement="top" color="blue" text="Módulos e aulas">
                                    <IconButton appearance="primary" color="orange" size="lg" className="btn-tools" icon={<List fill={`${GlobalStyle.bgTheme}`} />} onClick={()=>{setAboutCourse(false),setOnNote(false),setOnModules(true)}} />
                                </Tooltip>
                                <Tooltip trigger="hover"placement="top" color="blue" text="Nova anotaçao"> 
                                    <IconButton appearance="primary" color="orange" size="lg" className="btn-tools"  icon={<Notes fill={`${GlobalStyle.bgTheme}`}/>} onClick={()=>{setAboutCourse(false),setOnNote(true),setOnModules(false)}} /> 
                                </Tooltip>
                                <Tooltip trigger="hover"placement="top" color="blue" text="Nova anotaçao"> 
                                  <IconButton  appearance="primary" color="orange" size="lg" className="btn-tools" icon={<Question fill={`${GlobalStyle.bgTheme}`}/>}  onClick={()=>{setAboutCourse(true),setOnNote(false),setOnModules(false)}} />
                                </Tooltip>
                           </HStack>

                        </div>
                         {onModules &&  <div className="modules-player">
                             {ModulesList.map((m,k)=><ModuleCourse key={k} module={m}   />)}
                            </div>
                         }
                       {
                        aboutCourse &&  <div className="about">
                           Se você deseja enviar dados para a API, incluindo um arquivo, você normalmente usaria um formulário 
                            com o atributo enctype definido como "multipart/form-data". 
                            Isso permite o envio de dados binários, como arquivos. No entanto, ao fazer requisições usando React, 
                            é mais comum usar FormData diretamente e enviar uma requisição POST usando axios ou outra biblioteca 
                            sem a necessidade de um formulário HTML.ou mostrar como você pode fazer isso usando FormData e axios. 
                        </div>
                       }
                      {
                        onNote && <BoxNote >
                            <div className="header-box">
                                <span onClick={()=>setOnNote(false)}><Close /></span>
                            </div>
                            <div className="cx-text">
                             <textarea name="note" id="" onChange={e=>setNewNote(e.target.value)} value={newNote} >{newNote}</textarea>
                            </div>
                            <div className="cx-btn">
                                <button onClick={addNewNote}>Salvar</button>
                            </div>
                        </BoxNote>
                    }
                 </div>
               </div>
           </section>

          <div className="tools-box">
            <div className="menu-tools">
                <Tabs style={{width:'100%'}} defaultActiveKey="1" appearance="subtle">
                        <Tabs.Tab eventKey="1" title={`Anotações (${NotesList.length})`}  icon={<NoteIcon />}>
                            <div className="box-tools">
                                {NotesList.map((n,k)=>(
                                    <Card key={k} style={{padding:'12px'}}>
                                        <HStack justifyContent="space-between" >
                                            <Text>Titulo</Text>
                                            <Tooltip trigger="hover" text="excluir" color="blue" placement="topStart">
                                                <IconButton appearance="primary" color="red" icon={<Bin  />}/>
                                            </Tooltip>
                                        </HStack>
                                        <Divider></Divider>
                                        <div className="content">
                                            <Text>{n.content}</Text>
                                        </div>
                                    </Card>
                            ))}

                            </div>  
                        </Tabs.Tab>
                        <Tabs.Tab eventKey="2" title="Materiais" icon={<PdfIcon />} >
                            <FlexboxGrid>
                                <FlexboxGrid.Item className="i-pdf" style={{width:'100%'}}>
                                    <Card>
                                       <HStack style={{padding:'15px'}} justifyContent="space-between">
                                                <Text>arquivo x.pdf</Text>
                                                <Tooltip placement="leftStart"  text="Baixar" color="green" trigger="hover">
                                                    <IconButton appearance="primary" color="green" icon={<FileDownIcon />} />
                                                </Tooltip>
                                            </HStack>
                                    </Card>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                         
                        </Tabs.Tab>
                                
                </Tabs>
            
            </div>
           
          </div>
       
        </Page>
    </Layout>
}