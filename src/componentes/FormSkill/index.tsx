import {  useState } from "react"
import { RiCloseLargeFill as Close } from "react-icons/ri";
import { useAuthContext } from "../../context/authContext"
import apiSkill from "../../services/apiSkill"
import { toast } from "react-toastify"
import { Button, Card,HStack,Text,Input, Divider, TagGroup, Tag, IconButton, VStack, Container, Stack } from "rsuite"
import { FaTools as ToolsIcon} from "react-icons/fa";
import { GlobalStyle } from "../../globalStyle"
import Tooltip from "../Tooltip";



export default ()=>{
    const [newSkill,setNewSkill]=useState<boolean>(false)
    const {curriculumContext}=useAuthContext()
    const [textSkill,setTextSkill]=useState('') 

  

const AddSkill=async()=>{
    if(textSkill.trim() !== '' && curriculumContext){
        await apiSkill.addSkill(curriculumContext.id,textSkill)
        setTextSkill('')
        toast.success('nova habilidade adicionada')
    }else{
        toast.error('Preencha o campo')
    }
}

const deleteSkillId=async(id:number)=>{
    await apiSkill.deleteSkillId(id)
    toast.success('habilidade deletada')
}


 return  <Card as='fieldset' style={{padding:'12px'}}>
        <Text as='legend'>
          <HStack>
            <HStack justifyContent="center" alignItems="center">
               <ToolsIcon size={'xs'} style={{height:'45px'}} color={`${GlobalStyle.bgTheme}`} />
              <Text as='h4'>Habilidades</Text>
            </HStack>
               <Button size="sm"  onClick={()=>setNewSkill(true)}>adicionar nova</Button>
          </HStack>
        </Text>
        <Card>
            <Card.Body>
              {newSkill &&  <Card as='div' style={{padding:'12px'}}>
                
                    <HStack  justifyContent="space-between" >
                        <div><Text as='strong'>Adicione uma nova Habilidade</Text></div>
                        <div>
                            <Tooltip text="fechar" placement="right" trigger="hover">
                              <IconButton onClick={()=>setNewSkill(false)} appearance="primary" color="red" icon={<Close/>} />
                            </Tooltip>
                        </div>
                        
                    </HStack>
                
                <Divider></Divider>
                 <HStack  >
                   <Input value={textSkill} name="skill" placeholder="Ex: pacote office,trabalho em equipe,boa comunicação..." onChange={v=>setTextSkill(v)} />
                   <Button onClick={AddSkill} appearance="primary">adicionar</Button>
                 </HStack>
               </Card>
             }
            
               <Card  style={{margin:'20px 0',padding:'12px'}}>
                    <TagGroup >
                        {curriculumContext && curriculumContext?.skills.length > 0 ?   
                        curriculumContext?.skills.map((i)=><Tag closable onClose={()=>deleteSkillId(i.id)} color="violet" >{i.name}</Tag>) : <Text>Nenhuma habilidade</Text>}
                    </TagGroup>
              </Card>   
            </Card.Body>
        </Card>
   </Card>
 

}