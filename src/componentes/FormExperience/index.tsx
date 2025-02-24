import { useState } from "react"
import { useAuthContext } from "../../context/authContext"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import { schemaValidationExperience } from "../../validations/experience.validation"
import apiExperiences from "../../services/apiExperiences"
import { Button,  Card,DatePicker,Divider,HStack,IconButton,Input,Radio,RadioGroup,Text, VStack } from "rsuite"
import { GlobalStyle } from "../../globalStyle"
import { PiBagSimpleFill as Job} from "react-icons/pi"
import Tooltip from "../Tooltip"
import { BsCalendarDateFill as Calendar} from "react-icons/bs"
import {  Close, Trash } from "@rsuite/icons"
import FormGroup from "rsuite/esm/FormGroup"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import FormErrorMessage from "rsuite/esm/FormErrorMessage"
import { useLocation } from "react-router-dom"
import { HiMiniBuildingOffice2 as CompanyIcon } from "react-icons/hi2"

export default ()=>{
    const [newExperience,setNewExperience]=useState<boolean>(false)
    const {curriculumContext}=useAuthContext()
    const location=useLocation()

    const deleteExperience=async(id:number)=>{
           await apiExperiences.deleteExperienceId(id)
                toast.success('Experiencia excluida')
    }
  


const formik=useFormik({
    initialValues:{
        office:'',companyname:'',start:'',end:'',about:'',active:'Não',
    },
    validationSchema:schemaValidationExperience,
    onSubmit:async (values, {resetForm})=>{
        const data={
            ...values,
            idcurriculum:curriculumContext?.id as number,
            active:values.active === 'Sim' ? 1 : 0
        }
       const response=await apiExperiences.addExperience(data)
       console.log(response)
       resetForm()
       toast.success('nova formação adicionada')
      
    }})



 return <Card as='fieldset' style={{padding:'12px',margin:'30px 0'}}>
 <Text as='legend'>
    <HStack>
        <HStack justifyContent="center" alignItems="center">
            <Job size={'xs'} style={{height:'45px',margin:'0 12px'}} color={`${GlobalStyle.bgTheme}`} />
        <Text as='h3'>Formação</Text>
        </HStack>
            <Button size="sm"  onClick={()=>setNewExperience(true)}>adicionar nova</Button>
    </HStack>
</Text>
<Card.Body>
    {newExperience && <Card style={{padding:'9px'}}>
       <HStack justifyContent="space-between" alignItems="center">
           <Text>Nova Formação</Text>
           <Tooltip  text="fechar" placement="right" trigger="hover">
               <IconButton onClick={()=>setNewExperience(false)} appearance="primary" color="red" icon={<Close/>} />
          </Tooltip>
       </HStack>
       <Divider></Divider>
        <FormGroup style={{margin:'20px 0'}}>
            <FormControlLabel>Cargo</FormControlLabel>
            <Input type='office' value={formik.values.office} onChange={v=>formik.setFieldValue('name',v)} />
            <FormErrorMessage show={!!formik.values.office}>{formik.values.office}</FormErrorMessage>
        </FormGroup>
        <FormGroup>
            <FormControlLabel>Empresa</FormControlLabel>
            <Input type='companyname' value={formik.values.companyname} onChange={v=>formik.setFieldValue('school',v)} />
            <FormErrorMessage show={!!formik.values.companyname}>{formik.values.companyname}</FormErrorMessage>
        </FormGroup>
        <RadioGroup  style={{margin:'12px 0'}}>
            <FormControlLabel>Ainda nessa empresa? </FormControlLabel>
            <Radio value='sim' name='1'>Sim</Radio>
            <Radio  value='Não' name='0'>Não</Radio>            
        </RadioGroup>
        <HStack >
            <FormGroup >
              <VStack justifyContent="center" alignItems="center">
                <FormControlLabel>Inicio</FormControlLabel>
                  <DatePicker />
                 <FormErrorMessage show={!!formik.values.start}>{formik.values.start}</FormErrorMessage>
              </VStack>
            </FormGroup>
            <FormGroup>
             <VStack  justifyContent="center" alignItems="center">
                  <FormControlLabel>Finalizado</FormControlLabel>
                  <DatePicker />
                 <FormErrorMessage show={!!formik.values.end}>{formik.values.end}</FormErrorMessage>
              </VStack>
            </FormGroup>
           
        </HStack>
        <HStack justifyContent="center" style={{margin:'30px 0'}}>
           <Button onClick={formik.submitForm} appearance="primary">adicionar</Button>
        </HStack>
    </Card>}
{
   curriculumContext &&  curriculumContext?.experiences  ? curriculumContext.experiences.map((i)=><Card 
        className="card"
       style={{margin:'8px 0',padding:'12px'}}>
        <Card.Header>
            <HStack style={{margin:'8px 0'}} justifyContent="space-between">
                <HStack>
                    <Job style={{height:'30px',width:'30px'}} />
                    <Text as='h5'>{i.office}</Text>
                </HStack>
                {!location.pathname.includes('painel') && <Tooltip text="deletar" placement="top" trigger="hover">
                    <IconButton onClick={()=>deleteExperience(i.id)} icon={<Trash />} appearance="primary" color="red" />
                  </Tooltip>
                 }
            </HStack>
            <Divider />
            <VStack>
               <HStack justifyContent="flex-start" alignItems="center"  style={{margin:'8px 0'}}>
                 <CompanyIcon style={{height:'20px',width:'20px'}} />
                 <Text >{i.companyname}</Text>
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

            </HStack>
        </Card.Header>
   </Card>) : <Text>Nenhuma formação adicionada</Text>
}   

</Card.Body>
</Card>
 
 {/*<BoxForm>
    <legend><Experience /> Experiência Profissional {!newExperience &&  <span onClick={()=>setNewExperience(true)}>adicionar nova</span>}</legend>
     <BoxNewExperienceAndTrainning newItem={newExperience}>
           <form action="" onSubmit={Formik.handleSubmit}>
                <div className="header-box">
                        <h2>Nova Experiência</h2>
                        <span onClick={()=>setNewExperience(false)}><Close /></span>
                    </div>
                    <div className="cx-input">
                        <label htmlFor="">Cargo</label>
                        <Input type="text" name="office" value={Formik.values.office} onChange={Formik.handleChange} placeholder="digite o nome do curso" />
                        {Formik.touched.office && <p>{Formik.errors.office}</p>}
                    </div>
                    <div className="cx-input">
                        <label htmlFor="">Empresa</label>
                        <Input type="text" name="companyname" value={Formik.values.companyname} onChange={Formik.handleChange}  placeholder="digite o nome da instituição" />
                        {Formik.touched.companyname && <p>{Formik.errors.companyname}</p>}
                    </div>
                <div className="cx-dates">
                    <div className="cx-date">
                        <label htmlFor="" >Inicio</label>
                        <Input type="date" name="start" value={Formik.values.start} onChange={Formik.handleChange} />
                        {Formik.touched.start && <p>{Formik.touched.start}</p>}
                    </div>
                    <div  className="cx-date">
                        <label htmlFor="">Término:</label>
                        <Input type="date" name="end" value={Formik.values.end} onChange={Formik.handleChange} />
                        {Formik.touched.end && <p>{Formik.touched.end}</p>}
                    </div>
                    <div className="radio">
                        <label htmlFor="">Trabalha Aqui atualmente?</label>
                        <input type="radio" name="active" value='Sim' onChange={Formik.handleChange} checked={Formik.values.active === 'Sim'}  />Sim
                        <input type="radio" name="active"  value='Não' onChange={Formik.handleChange}  checked={Formik.values.active === 'Não'}  />Não
                       
                    </div>
                </div>
                <div className="cx-input-textarea">
                    <label htmlFor="">Sobre</label>
                    <TextArea h="160px" name="about" onChange={Formik.handleChange}  value={Formik.values.about} placeholder="Digite um pouco sobre suas funções" w="96%" bg="#dedede">{Formik.values.about}</TextArea>
                    {Formik.touched.about && <p>{Formik.errors.about}</p>}
                </div>
                <div className="cx-btn"> <input type="submit" value={'adicionar'} /> </div>
           </form>
     </BoxNewExperienceAndTrainning >
        {
            <div className="box-trainnings">
                {curriculumContext?.experiences && curriculumContext.experiences.length > 0 ? curriculumContext?.experiences.map((xp,k)=><CardExperience key={k} experience={xp}/>) : <p>Nenhuma experiencia adicionada</p> }
            </div>
        }
   </BoxForm>
 */}

}