import { useState } from "react"
import { useAuthContext } from "../../context/authContext"
import { useFormik } from "formik"
import { schemaValidationTrainnning } from "../../validations/trainning.validations"
import apiTrainning from "../../services/apiTrainning"
import { toast } from "react-toastify"
import { FaUserGraduate as TrainningIcon } from "react-icons/fa6"
import { Button, Card, HStack,Text,Input, Radio, RadioGroup, VStack, 
    DatePicker,IconButton, Divider} from "rsuite"
import { GlobalStyle } from "../../globalStyle"
import FormGroup from "rsuite/esm/FormGroup"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import FormErrorMessage from "rsuite/esm/FormErrorMessage"
import Tooltip from "../Tooltip"
import { RiCloseLargeFill as Close } from "react-icons/ri"
import { FaSchool  as School} from "react-icons/fa"
import { FaGraduationCap as Course} from "react-icons/fa6"
import { BsCalendarDateFill as Calendar} from "react-icons/bs"
import { FaTrashAlt as Trash} from "react-icons/fa"
import { useLocation } from "react-router-dom"
import './style.css'

export default ()=>{
    const [newTrainning,setNewTrainning]=useState<boolean>(false)
    const {curriculumContext}=useAuthContext()
    const location=useLocation()
    const [trainningActive,setTrainnningActive]=useState<'s' | 'n'>('s')


const deleteTrainning=async(id:number)=>{
        await apiTrainning.deleteTrainningId(id)
        toast.success('Formação  excluida')
            
}



const formik=useFormik({
    initialValues:{
        name:'',school:'',start:'',end:'',type:'Ensino Médio',active:'Não',
    },
    validationSchema:schemaValidationTrainnning,
    onSubmit:async (values, {resetForm})=>{
       
         const data={
            ...values,
            idcurriculum:curriculumContext?.id as number,
            active:values.active === 'Sim' ? 1 : 0
        }
        /*await apiTrainning.addTrainning(data)
        toast.success('nova formação adicionada')
        resetForm()
    */

        console.log(data)
    }})



 return <Card as='fieldset' style={{padding:'12px',margin:'30px 0'}}>
         <Text as='legend'>
            <HStack>
                <HStack justifyContent="center" alignItems="center">
                    <TrainningIcon size={'xs'} style={{height:'45px',margin:'0 12px'}} color={`${GlobalStyle.bgTheme}`} />
                <Text as='h3'>Formação</Text>
                </HStack>
                    <Button size="sm"  onClick={()=>setNewTrainning(true)}>adicionar nova</Button>
            </HStack>
       </Text>
       <Card.Body>
            {newTrainning && <Card style={{padding:'9px'}}>
               <HStack justifyContent="space-between" alignItems="center">
                   <Text>Nova Formação</Text>
                   <Tooltip  text="fechar" placement="right" trigger="hover">
                       <IconButton onClick={()=>setNewTrainning(false)} appearance="primary" color="red" icon={<Close/>} />
                  </Tooltip>
               </HStack>
               <Divider></Divider>
                <FormGroup style={{margin:'20px 0'}}>
                    <FormControlLabel>Nome</FormControlLabel>
                    <Input type='name' value={formik.values.name} onChange={v=>formik.setFieldValue('name',v)} />
                    <FormErrorMessage show={!!formik.values.name}>{formik.values.name}</FormErrorMessage>
                </FormGroup>
                <FormGroup>
                    <FormControlLabel>Escola</FormControlLabel>
                    <Input type='school' value={formik.values.school} onChange={v=>formik.setFieldValue('school',v)} />
                    <FormErrorMessage show={!!formik.values.school}>{formik.values.school}</FormErrorMessage>
                </FormGroup>
                <RadioGroup  style={{margin:'12px 0'}}>
                    <FormControlLabel>Cursando ? </FormControlLabel>
                    <Radio checked value={'s'} onChange={()=>setTrainnningActive('s')} name='active'>Sim</Radio>
                    <Radio  value={'n'} onChange={()=>setTrainnningActive('n')}  name='active'>Não</Radio>            
                </RadioGroup>
                <HStack >
                    <FormGroup >
                      <VStack justifyContent="center" alignItems="center">
                        <FormControlLabel>Inicio</FormControlLabel>
                          <DatePicker />
                         <FormErrorMessage show={!!formik.values.start}>{formik.values.start}</FormErrorMessage>
                      </VStack>
                    </FormGroup>
                   {
                    !trainningActive &&  <FormGroup>
                        <VStack  justifyContent="center" alignItems="center">
                            <FormControlLabel>Finalizado</FormControlLabel>
                            <DatePicker disabled={trainningActive === 'n' ? false : true } />
                            <FormErrorMessage show={!!formik.values.end}>{formik.values.end}</FormErrorMessage>
                        </VStack>
                   </FormGroup>
                   }
                    {
                        trainningActive && <FormGroup>
                            <VStack  justifyContent="center" alignItems="center">
                                <FormControlLabel>Data Prevista</FormControlLabel>
                                <DatePicker disabled={trainningActive === 's' ? false : true } />
                                <FormErrorMessage show={!!formik.values.school}>{formik.values.school}</FormErrorMessage>
                            </VStack>
                       </FormGroup>
                    }
                </HStack>
                <HStack justifyContent="center" style={{margin:'30px 0'}}>
                   <Button onClick={formik.submitForm} appearance="primary">adicionar</Button>
                </HStack>
            </Card>}
        {
           curriculumContext &&  curriculumContext?.trainnings  ? curriculumContext.trainnings.map((i)=><Card 
                className="card"
               style={{margin:'8px 0',padding:'12px'}}>
                <Card.Header>
                    <HStack style={{margin:'8px 0'}} justifyContent="space-between">
                        <HStack>
                            <Course style={{height:'30px',width:'30px'}} />
                            <Text as='h5'>{i.name}</Text>
                        </HStack>
                        {!location.pathname.includes('painel') && <Tooltip text="deletar" placement="top" trigger="hover">
                            <IconButton onClick={()=>deleteTrainning(i.id)} icon={<Trash />} appearance="primary" color="red" />
                          </Tooltip>
                         }
                    </HStack>
                    <Divider />
                    <VStack>
                       <HStack justifyContent="flex-start" alignItems="center"  style={{margin:'8px 0'}}>
                         <School style={{height:'20px',width:'20px'}} />
                         <Text >{i.school}</Text>
                       </HStack>
                    </VStack>
                    <HStack justifyContent="space-around">
                        <HStack>
                            <Calendar style={{height:'20px',width:'20px'}} />
                            <Text>Iniciado em </Text>
                        </HStack>
                        <HStack>
                            <Calendar style={{height:'20px',width:'20px'}} />
                            <Text>Finalizado em </Text>
                        </HStack>
                        <HStack>
                            <Calendar style={{height:'20px',width:'20px'}} />
                            <Text>Previsto para </Text>
                        </HStack>
                    </HStack>
                </Card.Header>
           </Card>) : <Text>Nenhuma formação adicionada</Text>
        }   

       </Card.Body>
 </Card>
 
 
 


}