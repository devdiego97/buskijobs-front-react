import {  useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { TextArea } from "../../componentes/TextArea"
import {  Page } from "./style"
import { IState, apiStatesCity } from "../../services/stateCity"
import { useFormik } from "formik"
import { schemaValidateCurriculum } from "../../validations/curriculum.validation"
import { useAuthContext } from "../../context/authContext"
import FormSkill from "../../componentes/FormSkill"
import FormTrainning from "../../componentes/FormTrainning"
import FormExperience from "../../componentes/FormExperience"
import User from "../../assets/svgs/user"
import { apiCurriculum } from "../../services/apiCurriculum"
import { toast } from "react-toastify"
import Ok from "../../assets/svgs/Ok"
import { DatePicker, Form, HStack, Radio, RadioGroup,Input, SelectPicker, Button, Card, VStack } from "rsuite"
import FormGroup from "rsuite/esm/FormGroup"
import { date } from "yup"
import FormControlLabel from "rsuite/esm/FormControlLabel"




export const CreateCurriculum=()=>{


    const {user}=useAuthContext()
    const [formsCurriculum,setFormsCurriculum]=useState(false)
    const [curriculum,setCurriculum]=useState(false)
    const {curriculumContext,setCurriculumContext}=useAuthContext()
    const [stateSelected,setStateSelected]=useState<string | null>(null) //estado string
    const [citySelected,setCitySelected]=useState<string | null>(null)         //estado object
    const [statesList,setStatesList]=useState<IState[] | []>([])   //lista de estados
    const [cityList,setCityList]=useState<{id:number,nome:string}[] | []>([])    //lista de cidades do estado



const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStateSelected(e.target.value)
    formik.setFieldValue('state',e.target.value)   
 }

 const handleSelectCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
     setCitySelected(e.target.value)
     formik.setFieldValue('city',e.target.value)
 }

    
useEffect(()=>{
    const getStates=async()=>{
        const listStates=await apiStatesCity.getStates() as IState[]
        setStatesList(listStates)
    }
    getStates()
},[])

useEffect(()=>{
   if(stateSelected){
        const stateObject=statesList.find(s=>s.sigla === stateSelected)
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
    if(curriculum){
        setFormsCurriculum(true)
    }
},[curriculum])

const formik=useFormik({
    initialValues:{
        name: curriculumContext?.name ? curriculumContext.name : user?.name,
        lastname:curriculumContext?.lastname ? curriculumContext.lastname : user?.lastname,
        tel:curriculumContext?.tel ? curriculumContext.tel : user?.tel,
        office:curriculumContext?.office ? curriculumContext.office : '',
        pcd:curriculumContext?.pcd  ? curriculumContext.pcd : 'Nao' ,
        deficiency:curriculumContext?.deficiency ? curriculumContext.deficiency : '',
        email:curriculumContext?.email ? curriculumContext.email : user?.email,
        github:curriculumContext?.github ? curriculumContext.github : '',
        linkedin:curriculumContext?.linkedin ? curriculumContext.linkedin : '',
        about:curriculumContext?.about ? curriculumContext.about : '',
        city:curriculumContext?.city ? curriculumContext.city: '',
        state: curriculumContext?.state ? curriculumContext.state : stateSelected,
        dateNasc:'',

  },
    validationSchema:schemaValidateCurriculum,
    onSubmit:async(values)=>{
     console.log(values)

        {/*
           if(user?.id){
        const response=await apiCurriculum.createCurriculum({
            iduser:user.id,...values,
            deficiency:values.deficiency !== '' ? values.deficiency : null,
            linkedin:values.linkedin !== '' ? values.linkedin : null,
            github:values.github !== '' ? values.github : null,
            pcd:values.pcd === 'Sim' ?  1 : 0
        })
        setCurriculumContext(response)
        setCurriculum(response)
        console.log(response)
        toast.success('Curriculo criado')
        
    
    } 
            
            
        }*/}
    }
})


return <Layout>
        <ContentPage titlePage="Criar Curriculo">
            <Page>
                <p>Preencha os campos para criar seu curriculo</p>
                <Form fluid className='form' action='' >
                <Card as='fieldset'>
                 {
                    !curriculum &&  <>
                    <legend><User />Dados Pessoais</legend>
                    <FormGroup>
                        <Form.ControlLabel>Nome</Form.ControlLabel>
                        <Form.Control name="name" value={formik.values.name} type="text" 
                          onChange={v=>formik.setFieldValue('name',v)}
                        />
                        <Form.ErrorMessage show={!!formik.errors.name} placement="bottomEnd">{formik.errors.name}</Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Form.ControlLabel>Sobrenome</Form.ControlLabel>
                        <Form.Control name="lastname" value={formik.values.lastname} type="text" 
                          onChange={v=>formik.setFieldValue('name',v)}
                        />
                        <Form.ErrorMessage show={!!formik.errors.lastname} placement="bottomEnd">{formik.errors.lastname}</Form.ErrorMessage>
                    </FormGroup>

                    <FormGroup>
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" value={formik.values.email} type="email" 
                          onChange={v=>formik.setFieldValue('email',v)}
                        />
                        <Form.ErrorMessage show={!!formik.errors.email} placement="bottomEnd" >{formik.errors.email}</Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Form.ControlLabel>Telefone</Form.ControlLabel>
                        <Form.Control name="tel" value={formik.values.tel} type="tel" 
                          onChange={v=>formik.setFieldValue('tel',v)}
                        />
                        <Form.ErrorMessage show={!!formik.errors.tel} placement="bottomEnd">{formik.errors.tel}</Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Form.ControlLabel>Linkedin</Form.ControlLabel>
                        <Form.Control name="linkedin" value={formik.values.linkedin} type="url" 
                          onChange={v=>formik.setFieldValue('linkedin',v)}
                        />
                        <Form.ErrorMessage show={!!formik.errors.linkedin} placement="bottomEnd">{formik.errors.linkedin}</Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Form.ControlLabel>È da area de TI?Se sim,coloque seu github:</Form.ControlLabel>
                        <Form.Control name="github" value={formik.values.name} type="url" 
                          onChange={v=>formik.setFieldValue('github',v)}
                        />
                        {formik.touched.state && <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.state}>{formik.errors.state}</Form.ErrorMessage>}
                    </FormGroup>
                    <VStack  >
                        <FormGroup>
                        <FormControlLabel htmlFor="">Estado</FormControlLabel>
                            <SelectPicker
                                placeholder="selecione o estado"
                                name="state"
                                onChange={value=>setStateSelected(value as string)}
                                data={statesList.map(item => ({ label: `${item.nome}-${item.sigla}`, value: item.sigla }))}
                            />
                           {formik.touched.city &&  <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.city}>{formik.errors.city}</Form.ErrorMessage>}
                        </FormGroup>
                        <FormGroup style={{margin:'12px 0'}}>
                           <FormControlLabel htmlFor=""> Cidade</FormControlLabel>
                           <SelectPicker placeholder="Selecione a cidade" block  disabled={stateSelected  ? false : true}
                               onChange={value=>setCitySelected(value as string)}
                                data={cityList.map(i=>({label:i.nome,value:`${i.nome}`}))}
                             />
                            <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.city}>{formik.errors.city}</Form.ErrorMessage>
                        </FormGroup>
                    </VStack>
                    <FormGroup>
                        <Form.ControlLabel>Cargo Desejado</Form.ControlLabel>
                        <Form.Control name="office" value={formik.values.office} type="text" 
                          onChange={v=>formik.setFieldValue('office',v)}
                        />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.office}>{formik.errors.office}</Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Form.ControlLabel>Data de Nascimento</Form.ControlLabel>
                        <DatePicker   onChange={v=>formik.setFieldValue('dateNasc',v)} name="dateNasc" />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.dateNasc}>{formik.errors.dateNasc}</Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>È uma PCD?</FormControlLabel>
                        <RadioGroup name="pdc" inline defaultValue="1" onChange={v=>formik.setFieldValue('pcd',v)}>
                            <Radio name="pcd" value="1" >Sim</Radio>
                            <Radio name="pcd" value="2">Não</Radio>
                        </RadioGroup>
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.pcd}>{formik.errors.pcd}</Form.ErrorMessage>
                    </FormGroup>
                  
                    <FormGroup >
                        <Form.ControlLabel>Se sim para a perguntar anterior,qual a sua deficiência?</Form.ControlLabel>
                        <Form.Control name="deficiency" value={formik.values.deficiency} type="text" 
                          onChange={v=>formik.setFieldValue('deficiency',v)} disabled={formik.values.pcd == '0' ? true : false}
                        />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.deficiency}>{formik.errors.deficiency}</Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Form.ControlLabel>Agora,faça um breve resumo sobre</Form.ControlLabel>
                        <Input style={{resize:'none'}} as='textarea' rows={6}  name="about" value={formik.values.about} type="text" 
                          onChange={v=>formik.setFieldValue('about',v)}
                        />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.about}>{formik.errors.about}</Form.ErrorMessage>
                    </FormGroup>
                    {!curriculum &&  <HStack justifyContent="center">
                           <Button type="submit" appearance="primary" >criar curriculo</Button>
                          </HStack>
                    }
                    {curriculum && <div className="cx-success">
                        <p>
                           <Ok />Curriculo Criado! Continue á preeencher abaixo.caso não deseje
                           continuar só voltar á página anterior
                          </p>
                      </div>
                    }
                    </>
}    
                    </Card>
                  </Form>
        
        
        
        
           {
             curriculum && <>
                 <FormSkill />
                 <FormTrainning />
                 <FormExperience />
             </>
          }          

            </Page>
        </ContentPage>
    </Layout>
}