import { FormEvent, useEffect, useState } from "react"
import { ContentPage } from "../../../componentes/ContentPage"
import { Painel } from "../../../componentes/Painel"
import { GridFlexInput, Page} from "./style"
import apiCategory from "../../../services/apiCategory"
import { CategoryInterface } from "../../../interfaces/category"
import { useFormik } from "formik"
import { schemaValidationJobs } from "../../../validations/jobs.validation"
import { useGlobalContext } from "../../../context/globalContext"
import { apiStatesCity, State } from "../../../services/stateCity"
import { useAuthContext } from "../../../context/authContext"
import {Button,InputNumber} from "rsuite"
import {  DatePicker,  Form, HStack, Input, Radio, RadioGroup, SelectPicker, VStack } from "rsuite"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import { ILevels } from "../../../interfaces/levels"
import apiLevels from "../../../services/apiLevels"
import { IModelOperating } from "../../../interfaces/modelOperating"
import apiModelOperating from "../../../services/apiModelOperating"
import apiContractType from "../../../services/apiContractType"
import { IContractType } from "../../../interfaces/contractType"


export const NovaVagaPainel=()=>{

  const [contractTypes,setContractTypes]=useState<IContractType[] | []>([])
  const [modelsOperating,setModelsOperating]=useState<IModelOperating[] | []>([])
  const [levels,setLevels]=useState<ILevels[] | []>([])
  const [newReq,setNewReq]=useState('')
  const [requirements,setRequirements]=useState<string[] | []>([])
  const {company}=useAuthContext()
  const [categorys,setCategorys]=useState<CategoryInterface[] | []>([])
  const [exclusivePCD,setExclusivePCD]=useState<string>('0')
  const [errorCompanyId,setErrorCompanyId]=useState(false)
  const {handleStateModal}=useGlobalContext()
  const contracts=['CLT','CNPJ','Freelancer','Estágiario','Trainne']
  
  const ModelContract=['Presencial','Remoto','Home Office']
  const [statesList,setStatesList]=useState<State[] | []>([])   //lista de estados
  const [cityList,setCityList]=useState<{id:number,nome:string}[] | []>([])    //lista de cidades do estado
  const [stateSelected,setStateSelected]=useState<string>(statesList[0]?.sigla) //estado string
  const [citySelected,setCitySelected]=useState<string>('')         //estado object
  const [listCityObj,setListCityObj]=useState<{ label: string, value: string ,id:number}[] | []>([])
  const d=new Date





  const handleChangeSelectState = (value: string | number | null, event: React.SyntheticEvent<HTMLElement>) => {
    
  }

  const UpdateListRequirements=()=>{
    setNewReq(newReq)
    setNewReq('')
    setRequirements([...requirements,newReq])
  }

  


  useEffect(()=>{
    const getStates=async()=>{
        const listStates=await apiStatesCity.getStates() as State[]
        setStatesList(listStates)
    }
    getStates()


    const getLevels=async()=>{
      const listLevels=await apiLevels.getAllLevels() as ILevels[]
      if(listLevels.length >  0){
        setLevels(listLevels)
      }
    }


     const getLevelId=async()=>{
        const data=await apiLevels.getLevelId(levels[3].id)
        alert(data?.name)
    }

    const getModelsOperating=async()=>{
      const data=await apiModelOperating.getModelOperatins() as IModelOperating[]
      setModelsOperating(data)
    }

    const getContratTypesList=async()=>{
        const data=await apiContractType.getContractTypes() as IContractType[]
        setContractTypes(data)
    }

    getContratTypesList()
    getModelsOperating()
    getLevels()
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
    const hasCompanyStorageVerify=()=>{
      const companyStorage=localStorage.getItem('@companyid')
      if(companyStorage !== 'undefined'){
        handleStateModal(false)
      }else{
        handleStateModal(true)
      }
    }
    setTimeout(hasCompanyStorageVerify,500)
  },[])

  const handleSubmit = (formValue: Record<string, any> | null, e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    console.log("Formulário enviado com os valores:", formValue);
  };

  
  useEffect(()=>{
    //Listando categorias de vagas no select
    const getListCategorys=async()=>{
      const list=await apiCategory.getCategorys() as CategoryInterface[]
      setCategorys(list)
    }

  getListCategorys()
},[])


    const Formik=useFormik({
      initialValues:{
        title: '',
        description:'',
        salary: '',
        location: '',
        requirements:'',
        level: '',
        city:citySelected !== '' ? citySelected : '',
        state:stateSelected !== '' ? stateSelected : '',
        benefits:'',
        createDate:'',
        expireDate:'',
        exclusivepcd:'0',
        contractType:'CNPJ',
        category:'0',
       
      },
      validationSchema:schemaValidationJobs,
        onSubmit:async(values)=>{
            const data={ ...values,
              expireDate:values.expireDate.toString(),
              exclusivepcd:exclusivePCD !== '' ? parseInt(exclusivePCD) : null,
              createDate:d.toLocaleDateString()
             }
            
             console.log(data)
           
      }

    })
    

    return <Painel >
        <ContentPage titlePage="Nova Vaga">
        <Page>
          <p className="text">Preencha os campos para criar a nova vaga:</p>
          <Form   onSubmit={()=>Formik.handleSubmit()} fluid >
            <Form.Group >
              <Form.ControlLabel as={"strong"}>Nome</Form.ControlLabel>
              <Form.Control name="title" onChange={value=>Formik.setFieldValue("title",value)} value={Formik.values.title}/>
              <Form.ErrorMessage  placement="bottomStart" >{Formik.errors.title}</Form.ErrorMessage>
            </Form.Group>
            <Form.Group >
              <Form.ControlLabel as={"strong"}>Salário</Form.ControlLabel>
              <InputNumber  prefix="R$" name="salary" onChange={value=>Formik.setFieldValue("salary",value)} placeholder="00,00" value={Formik.values.salary}/>
            
            </Form.Group>
            <Form.Group >
              <Form.ControlLabel as={"strong"}>Requisitos(cada item deve ser separado por virgula)</Form.ControlLabel>
              <Input as="textarea" name="requirements" onChange={value=>Formik.setFieldValue('requirements',value)} rows={12} style={{resize:"none"}}  value={Formik.values.requirements}/>
              
            </Form.Group>
            <Form.Group >
              <Form.ControlLabel as={"strong"}>Descrição</Form.ControlLabel>
              <Input as="textarea" name="description" rows={12} style={{resize:"none"}} onChange={value=>Formik.setFieldValue("description",value)} value={Formik.values.description}/>
            </Form.Group>
            <Form.Group >
              <Form.ControlLabel as={"strong"}>Beneficios(cada item deve ser separado por virgula)</Form.ControlLabel>
              <Input as="textarea" name="benefits" rows={12} style={{resize:"none"}} onChange={value=>Formik.setFieldValue("benefits",value)} value={Formik.values.benefits}/>
              
            </Form.Group>
            <Form.Group>
              <FormControlLabel as={"strong"}>Data máxima</FormControlLabel>
              <DatePicker format="dd/MM/yyyy" placeholder="selecione uma data" onChange={value=>Formik.setFieldValue("expireDate",value)} 
             />
             
            </Form.Group>
            <Form.Group>
              <FormControlLabel as={"strong"}>Data máxima</FormControlLabel>
              <DatePicker format="dd/MM/yyyy" placeholder="selecione uma data" onChange={value=>Formik.setFieldValue("expireDate",value)} 
             />
             
            </Form.Group>
            <HStack justifyContent="space-between" alignItems="flex-start" >
            <GridFlexInput>
            <Form.Group>
              <FormControlLabel as={"strong"}>Nivel de Profissional</FormControlLabel>
              <Form.Control name="level" accepter={RadioGroup}>
                {
                  levels.map(i=><Radio value={i.id} >{i.name}</Radio>)
                }
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <FormControlLabel as={"strong"}>Modo de atuação</FormControlLabel>
              <Form.Control name="modelOperating" accepter={RadioGroup}>
                {
                  modelsOperating.map(i=><Radio value={i.id} >{i.name}</Radio>)
                }
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <FormControlLabel as={"strong"}>Exclusiva para PCD?</FormControlLabel>
              <Form.Control name="exclusivepcd" accepter={RadioGroup}>
                {
                  ['Sim','Não'].map(i=><Radio value={i} >{i}</Radio>)
                }
              </Form.Control>
            </Form.Group>
            </GridFlexInput>
           </HStack>
            <GridFlexInput>
              
                  <VStack className="vstack">
                  <FormControlLabel as={"strong"}>Estado</FormControlLabel>
                     <SelectPicker
                        placeholder="selecione o estado"
                         block
                       name="states"
                       onChange={value=>setStateSelected(value as string)}
                       data={statesList.map(item => ({ label: `${item.nome}-${item.sigla}`, value: item.sigla }))}
                     />
                  </VStack>
                
                
                  <VStack className="vstack">
                      <FormControlLabel as={"strong"} style={{fontWeight:'bold',color:"#222"}}>Cidade</FormControlLabel>
                      <SelectPicker placeholder="Selecione a cidade" block 
                        onChange={value=>setCitySelected(value as string)}
                        data={cityList.map(i=>({label:i.nome,value:`${i.nome}`}))}
                       />
                  </VStack>
               
                  <VStack className="vstack" justifyContent="flex-start">
                    <FormControlLabel as={"strong"}>Tipo Contratação</FormControlLabel>
                     <SelectPicker placeholder="Selecione "  
                        block
                        name="contractType"
                        style={{flex:'1'}}
                      
                        data={contractTypes.map(item=>({label:item.name,value:item.id}))}
                      
                     />
                  </VStack>
                 </GridFlexInput>
               
              <HStack justifyContent="center" style={{margin:'150px 100px'}}>
                <Button appearance="primary" type="submit" size="lg" block color="green">Enviar</Button>
              </HStack>
          </Form>




         {/* <Form action='' onSubmit={Formik.handleSubmit}>
              <InputTextAreaLabel>
                <label htmlFor="title">Titulo da vaga</label>
                <Input type="text" id="title" name="title" value={Formik.values.title} onChange={Formik.handleChange} />
                {Formik.touched.title && <p className="error">{Formik.errors.title}</p>}
              </InputTextAreaLabel>
              <InputTextAreaLabel>
                <label htmlFor="salary">Salário </label>
                <Input type="number" id="salary" name="salary" value={Formik.values.salary} onChange={Formik.handleChange} />
                {Formik.touched.salary && <p className="error">{Formik.errors.salary}</p>}
              </InputTextAreaLabel>
              <InputTextAreaLabel>
                <label htmlFor="expireDate">Data de Expiração(opcional)</label>
                <Input type="date" id="expireDate" name="expireDate" value={Formik.values.expireDate} onChange={Formik.handleChange} />
                {Formik.touched.expireDate && <p className="error">{Formik.errors.expireDate}</p>}
              </InputTextAreaLabel>
              <InputTextAreaLabel>
                <label htmlFor="desc">Descrição/Responsabilidades </label>
                <TextArea id="desc" name="description" onChange={Formik.handleChange} value={Formik.values.description}>{Formik.values.description}</TextArea>
                {Formik.touched.description && <p className="error">{Formik.errors.description}</p>}
              </InputTextAreaLabel>
              <InputTextAreaLabel>
                <label htmlFor="reqs">Requisitos </label>
              
                <TextArea id="reqs" name="requirements" onChange={Formik.handleChange} 
                    value={Formik.values.requirements}
                  >{Formik.values.requirements}
                </TextArea>
                {Formik.touched.requirements && <p className="error">{Formik.errors.requirements}</p>}
              
                <br />
                <div>
                 {requirements.map((req,k)=><li key={k}>{req}</li>)}
                </div>
              </InputTextAreaLabel>
             
              <InputTextAreaLabel>
                <label htmlFor="benefits">Beneficios </label>
                <TextArea id="benefits" name="benefits" onChange={Formik.handleChange} value={Formik.values.benefits}>{Formik.values.benefits}</TextArea>
                {Formik.touched.benefits && <p className="error">{Formik.errors.benefits}</p>}
              </InputTextAreaLabel>
              <InputTextAreaLabel className="cx-radio">
                <label htmlFor="pcd">Vaga Exclusiva para PCD?</label>
                  <input id="pcd" type="radio" name="exclusivepcd" value={exclusivePCD} onChange={()=>setExclusivePCD('1')} 
                    checked={exclusivePCD === '1' && true}  />Sim
                  <input id="pcd" type="radio" name="exclusivepcd" value={exclusivePCD} 
                   checked={exclusivePCD === '0' && true}  onChange={()=>setExclusivePCD('0')} />Não
              </InputTextAreaLabel>
              <BoxSelects>
                  <SelectBox>
                    <label htmlFor="location">Modo de Atuação</label>
                    <select  name="location" value={Formik.values.location} onChange={Formik.handleChange} id="location">
                      {ModelContract.map((m,k)=><option key={k} value={m}>{m}</option>)}
                    </select>
                    {Formik.touched.location && <p className="error">{Formik.errors.location}</p>}
                  </SelectBox>
                  <SelectBox>
                    <label htmlFor="state">Estado</label>
                    <select name="state" value={stateSelected} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setStateSelected(e.target.value)} id="state">
                      {statesList.map((s,k)=><option key={k} value={s.sigla}>{s.nome}</option>)}
                    </select>
                    {Formik.touched.state && <p className="error">{Formik.errors.state}</p>}
                  </SelectBox>
                  <SelectBox>
                    <label htmlFor="city">Cidade</label>
                    <select  name="city" value={citySelected} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setCitySelected(e.target.value)} id="city">
                      {cityList.map((c,k)=><option key={k} value={c.nome}>{c.nome}</option>)}
                    </select>
                    {Formik.touched.city && <p className="error">{Formik.errors.city}</p>}
                  </SelectBox>
  
  
                  <SelectBox>
                    <label htmlFor="level">Nivel de Profissional</label>
                    <select name="level" value={Formik.values.level} onChange={Formik.handleChange} id="level">
                      {levels.map((l,k)=><option key={k} value={l}>{l}</option>)}
                    </select>
                    {Formik.touched.level && <p className="error">{Formik.errors.level}</p>}
                  </SelectBox>
                  <SelectBox>
                    <label htmlFor="contract">Tipo de Contratação</label>
                    <select name="contractType" value={Formik.values.contractType} onChange={Formik.handleChange} id="contract">
                      {contracts.map((m,k)=><option key={k} value={m}>{m}</option>)}
                    </select>
                    {Formik.touched.location && <p className="error">{Formik.errors.location}</p>}
                  </SelectBox>
              </BoxSelects>
              <div className="cx-btn">
                <input type="submit" value={'adicionar vaga'} />
              </div>
          </Form>
          */}
         
        </Page>
        </ContentPage>
    </Painel>
}

