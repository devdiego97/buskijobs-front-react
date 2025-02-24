import { Container } from "./style"
import Arrowbottom from "../../assets/svgs/arrowbottom"
import Close from "../../assets/svgs/close"
import {  useState } from "react"
import Edit from "../../assets/svgs/edit"
import { Tooltip } from 'react-tooltip'
import { useLocation, useNavigate } from "react-router-dom"
import Remove from "../../assets/svgs/remove"
import {Link} from "react-router-dom"
import { toast } from "react-toastify"
import Swal from 'sweetalert';
import { useGlobalContext } from "../../context/globalContext"
import { Card,HStack,IconButton,Text} from "rsuite"
import { ListItem } from "rsuite/esm/internals/Picker"
import { CiCircleList as ListIcon } from "react-icons/ci";
import { GrVideo as VideoPlay } from "react-icons/gr";


type Props={
    module: {id:number,name:string,classes:{id:number,name:string,url:string}[]}
    
}

export default ({module}:Props)=>{
   const {setShareClass,setShareModule}=useGlobalContext()
    const [onBodyModule,setOnBodyModule]=useState<boolean>(false)
    const navigate=useNavigate()
    const location=useLocation()
    const [pathPainel,setPathPainel]=useState(location.pathname.includes('/painel/') ? true : false)
    //const {setNewClass}=useContextUI()



 

    const deleteModule=(id:number)=>{
        
        Swal({
            title: 'Tem certeza?',
            text: 'Se deletar esse módulo todas as aulas dentro dele serão também deletados',
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
             toast.success('Modulo deletado')
            } else {
                console.log(result)
            }
          })

    }
    const deleteClass=(id:number)=>{
        
        Swal({
            text: 'Tem certeza que deseja excluir essa aula?',
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
             toast.success('aula deletado')
            } else {
                console.log(result)
            }
          })

    }

    return <Container onBody={onBodyModule} >
        <div className="top">
            <div className="title-btn">
                  <HStack>
                    <Text size="md" weight="bold" style={{margin:'5px 0'}}>
                      <IconButton style={{marginRight:'4px'}} icon={<ListIcon />}/>{module.name}-
                    </Text>
                    <Text size={'sm'}>({module.classes.length} aulas)</Text>
                  </HStack>
                <span onClick={()=>!onBodyModule ? setOnBodyModule(true) : setOnBodyModule(false)}>
                    {!onBodyModule ? <Arrowbottom /> : <Close />}
                </span>
            </div>
            {
                pathPainel && <div className="actions-module">
                  <span  onClick={()=>setShareModule(module)} data-tooltip-id="my-tooltip-module" data-tooltip-content={'editar modulo'}><Edit /></span>
                  <span data-tooltip-id="my-tooltip-module" data-tooltip-content={'deletar modulo'} onClick={()=>deleteModule(module.id)}><Remove /></span>
                  <Link to='/painel/aulas/addaula' data-tooltip-id="my-tooltip-module" data-tooltip-content={'adicionar aula'}><VideoPlay /></Link>
               </div>
            }
        </div>
        <div className="bottom">
            {module.classes.map((c,k)=><ListItem style={{margin:'12px'}} /*onClick={()=>setShareClass(c)}*/>
               <Card key={k} as="div" style={{padding:'12px'}}>
                  <HStack>
                    <IconButton icon={<VideoPlay />} />
                    <Text as={"small"} maxLines={1} weight="light">{c.name}</Text>
                   </HStack>
                </Card> 
                {
                    pathPainel && <div className="actions">
                       <Link to={`/painel/aulas/editaula/${c.id}`} data-tooltip-id="my-tooltip-class" 
                         data-tooltip-content={'editar aula'}><Edit />
                      </Link>
                       <span data-tooltip-id="my-tooltip-class" data-tooltip-content={'deletar aula'} onClick={()=>deleteClass(c.id)}><Remove /></span>
                   </div>
                }
              </ListItem>
            )}
        </div>
        <Tooltip id="my-tooltip-module"  place="bottom"/>
        <Tooltip id="my-tooltip-class"  place="top"/>
    </Container>
}