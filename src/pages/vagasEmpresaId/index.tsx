import { useEffect, useState } from "react"
import { Layout } from "../../componentes/Layout"
import { CompanyInterface } from "../../interfaces/company"
import apiCompany from "../../services/apiCompany"
import { useNavigate, useParams } from "react-router-dom"
import {  Page } from "./style"
import { baseURL } from "../../config/axios.config"
import { IJob } from "../../interfaces/job"
import Insta from "../../assets/svgs/Insta"
import Linked from "../../assets/svgs/linked"
import Website from "../../assets/svgs/website"
import { CategoryInterface } from "../../interfaces/category"
import { apiStatesCity, State } from "../../services/stateCity"
import apiCategory from "../../services/apiCategory"
import Filter from "../../assets/svgs/filter"
import { Button, Card, Divider, HStack, SelectPicker, Text, VStack } from "rsuite"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import apiContractType from "../../services/apiContractType"
import apiLevels from "../../services/apiLevels"
import apiModelOperating from "../../services/apiModelOperating"
import { IContractType } from "../../interfaces/contractType"
import { IModelOperating } from "../../interfaces/modelOperating"
import { ILevels } from "../../interfaces/levels"


export const VagasEmpresaId=()=>{
    const navigate=useNavigate()
    const [contractTypes,setContractTypes]=useState<IContractType[] | []>([])
    const [modelsOperating,setModelsOperating]=useState<IModelOperating[] | []>([])
    const [levels,setLevels]=useState<ILevels[] | []>([])
    const [companyId,setCompanyId]=useState<CompanyInterface | null>(null)
    const {id}=useParams()
    const [categorys,setCategorys]=useState<CategoryInterface[] | []>([])
    const [stateSelected,setStateSelected]=useState<string>('0') //estado string
    const [citySelected,setCitySelected]=useState<string>('0')         //estado object
    const [statesList,setStatesList]=useState<State[] | []>([])   //lista de estados
    const [cityList,setCityList]=useState<{id:number,nome:string}[] | []>([])    //lista de cidades do estado
    const listContractType=['Estágio','Trainne','Freelancer','CLT','CNPJ']
    const [contractType,setContractType]=useState('Estágio')
    const [categorySelected,setCategorySelected]=useState<string>(categorys[0]?.name)
    

    useEffect(()=>{
      //Pegar Uma Empresa pelo seu Id,retornando tambem as suas vagas
       const getCompany=async()=>{
        const response=await apiCompany.getCompanyId(parseInt(id as string)) as CompanyInterface
        setCompanyId(response)
            
       }
       getCompany()
    },[])

   //Funções changes de alteração de estado e cidade
 const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStateSelected(e.target.value)
        //Formik.setFieldValue('state',e.target.value)   
    }
    
 const handleSelectCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
         setCitySelected(e.target.value)
        //Formik.setFieldValue('city',e.target.value)   
 }


 const handleContractType= (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContractType(e.target.value)
   //Formik.setFieldValue('city',e.target.value)   
}

const handleCategoryChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    setCategorySelected(e.target.value)
    //Formik.setFieldValue('city',e.target.value) 
}


///função de remoção de filtros
const removeFilters=()=>{
    setCitySelected('0')
    setCategorySelected(categorys[0]?.name)
    setStateSelected('0')
    setContractType('Estágio')
}

 
    useEffect(
        ()=>setCategorySelected(categorySelected)
    ,[categorySelected])


    useEffect(
        ()=>setContractType(contractType)
    ,[contractType])

      //Buscando na api a lista de cidades  
    useEffect(()=>{
            const getStates=async()=>{
                const listStates=await apiStatesCity.getStates() as State[]
                setStatesList(listStates)
            }
    getStates()
    },[])
        
//Setando as cidades no select de acordo com o estado selecionado
useEffect(()=>{
       if(stateSelected){
            const stateObject=statesList.find(s=>s.sigla === stateSelected)
            setStateSelected(stateSelected)
            const getCitys=async()=>{
               if(stateObject){
                 const citys=await apiStatesCity.getCityFromState(stateObject.id as number) as {id:number,nome:string}[]
                 setCityList(citys)
              }
            }
          getCitys()
        }
    },[stateSelected])
//Listando categorias de vagas no select
 useEffect(()=>{
     const getListCategorys=async()=>{
        const list=await apiCategory.getCategorys() as CategoryInterface[]
       setCategorys(list)
      }
        
     const getLevels=async()=>{
            const listLevels=await apiLevels.getAllLevels() as ILevels[]
            if(listLevels.length >  0){
              setLevels(listLevels)
            }
          }
        
      
    const getModelsOperating=async()=>{
            const data=await apiModelOperating.getModelOperatins() as IModelOperating[]
          setModelsOperating(data)
     }
      
    const getContratTypesList=async()=>{
              const data=await apiContractType.getContractTypes() as IContractType[]
            setContractTypes(data)
    }
    getListCategorys()
    getLevels()
    getContratTypesList()
    getModelsOperating()
        
},[])

    
    return <Layout>
       <Page>
        <div className="header-page">
          <div className="logo-name">
            <img src={`${baseURL}public/images/${companyId?.logo}`} alt="" />
            <h2>{companyId?.name}</h2>
          </div>
        </div>
        <main className="content">
            <section>
                <h3>Sobre Nós</h3>
                <p>{companyId?.about}</p>
            </section>
            <section>
                <section className="vagas">
                   <h3>Vagas</h3>
                    <Text>Se candidate á nossas vagas e faça parte da nossa Equipe</Text>
                    <Card as="fieldset" >
                            <Text as="legend"><Filter/>Filtros</Text>
                            <HStack id="filters">
                                <VStack className="stack">
                                    <FormControlLabel htmlFor="">Categoria</FormControlLabel>
                                    <SelectPicker name="xp" size="md" data={categorys.map(c=>({label:c.name,value:c.name}))}  />
                                </VStack>
                                <VStack>
                                    <FormControlLabel htmlFor="">Estado</FormControlLabel>
                                    <SelectPicker
                                        placeholder="selecione o estado"
                                        block
                                        name="states"
                                        onChange={value=>setStateSelected(value as string)}
                                        data={statesList.map(item => ({ label: `${item.nome}-${item.sigla}`, value: item.sigla }))}
                                    />
                                </VStack>  
                                <VStack justifyContent="center"  className="filter-i"  alignItems="center">
                                    <FormControlLabel htmlFor=""> Cidade</FormControlLabel>
                                        <SelectPicker placeholder="Selecione a cidade" block 
                                        onChange={value=>setCitySelected(value as string)}
                                            data={cityList.map(i=>({label:i.nome,value:`${i.nome}`}))}
                                        />
                                </VStack> 
                                <VStack justifyContent="center"  className="filter-i"  alignItems="center">
                                    <FormControlLabel htmlFor="">atuação</FormControlLabel>
                                        <SelectPicker placeholder="Selecione a cidade" block 
                                        onChange={value=>setCitySelected(value as string)}
                                            data={modelsOperating.map(i=>({label:i.name,value:`${i.name}`}))}
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
                            </HStack>
                        <HStack style={{margin:'60px 0'}} justifyContent="center" onClick={removeFilters}>
                            <Button appearance="primary">Filtrar</Button>
                            <Button onClick={removeFilters}>remover filtros</Button>
                        </HStack>
                    </Card>
         
                    <div className="cards-vagas">
                    {companyId?.jobs && companyId?.jobs.map((j:IJob,k)=><Card key={k} className="card-job">
                        
                           <Text  as={"h5"}>{j.title}</Text>
                           <Divider></Divider>
                           <HStack justifyContent="space-around" alignItems="center" className="smalls">
                            <Text size="sm" as={"small"}>vaga  {j.status}</Text>
                            <Text size="sm" as={"small"}>publicada em {j.createDate}</Text>
                           </HStack>
                            <HStack justifyContent="center" style={{margin:'9px 0'}}>
                              <Button size="md" color="green" appearance="primary" onClick={()=>navigate(`/vagas/${j.id}`)} >ver vaga</Button>
                            </HStack>
                       
                    </Card>)}
                    </div>
                </section>
            </section>
            <section className="links">
                  <h3>Conheça mais sobre a {companyId?.name}</h3>
                  <div className="icons-links">
                    <a href={companyId?.site} target="_blank"><Website />Site</a>
                    <a  href={companyId?.instagram} target="_blank"><Insta/>Instagram</a>
                    <a  href={companyId?.linkedin} target="_blank"><Linked />Linkedin</a>
              
                  </div>
            </section>
          </main>
        
       </Page>
    </Layout>
}