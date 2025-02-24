import { useEffect, useState } from "react"
import { ContentPage } from "../../../componentes/ContentPage"
import { Painel } from "../../../componentes/Painel"
import { ICurriculum } from "../../../interfaces/curriculum"
import { apiCurriculum } from "../../../services/apiCurriculum"
import { CardCandidates } from "../../../componentes/CardCandidates"
import { ContainerProfessional, GridFilter } from "./style"
import Loading from "../../../componentes/Loading"
import { GlobalStyle } from "../../../globalStyle"
import { useGlobalContext } from "../../../context/globalContext"
import { ErrorCompany } from "../../../componentes/ErrorCompany"
import { CategoryInterface } from "../../../interfaces/category"
import apiCategory from "../../../services/apiCategory"
import { apiStatesCity, State } from "../../../services/stateCity"
import { Button, Card, HStack, SelectPicker, Tag, Text, VStack } from "rsuite"
import { ILevels } from "../../../interfaces/levels"
import apiLevels from "../../../services/apiLevels"




export const CandidatosPainel=()=>{

     const [levels,setLevels]=useState<ILevels[] | []>([])
    const [categorys,setCategorys]=useState<CategoryInterface[] | []>([])
    const [listCandidates,setListCandidates]=useState<ICurriculum[] | null>(null)
    const [stateSelected,setStateSelected]=useState<string>('0') //estado string
    const [citySelected,setCitySelected]=useState<string>('0')            //estado object
    const [statesList,setStatesList]=useState<State[] | []>([])   //lista de estados
    const [cityList,setCityList]=useState<{id:number,nome:string}[] | []>([])    //lista de cidades do estado
    const [loadingProfessionals,setLodingProfessionals]=useState<boolean>(true)
    const {handleStateModal}=useGlobalContext()
    const [categorySelected,setCategorySelected]=useState(categorys[0]?.id)
    const [experienceType,setExperienceType]=useState('Iniciante')
    const listExperienceType=['Iniciante','Júnior','Pleno','Senior','Especialista']


    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setStateSelected(e.target.value)
     
   }
  
   const handleSelectCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
       setCitySelected(e.target.value)
      
   }
  
    
 const handleExperienceChange= (e: React.ChangeEvent<HTMLSelectElement>) => {
  setExperienceType(e.target.value)
 //Formik.setFieldValue('city',e.target.value)   
}

const handleCategoryChange=(id:number)=>{
  setCategorySelected(id)
  //Formik.setFieldValue('city',e.target.value) 
} 


const removeFilters=()=>{
  setCitySelected('0')
  setCategorySelected(categorys[0].id)
  setStateSelected('0')
  setExperienceType('Iniciante')
}


useEffect(
  ()=>setCategorySelected(categorySelected)
,[categorySelected])

useEffect(
  ()=>setExperienceType(experienceType)
,[experienceType])

useEffect(()=>{
      const getStates=async()=>{
          const listStates=await apiStatesCity.getStates() as State[]
          setStatesList(listStates)
      }


    const getLevels=async()=>{
      const listLevels=await apiLevels.getAllLevels() as ILevels[]
      if(listLevels.length >  0){
        setLevels(listLevels)
      }
    }
      getLevels()
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
      //Listando categorias de vagas no select
      const getListCategorys=async()=>{
        const list=await apiCategory.getCategorys() as CategoryInterface[]
        setCategorys(list)
      }
  
      getListCategorys()
  
      },[])

      
    
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

useEffect(()=>{
    const getCurriculunsAll=async()=>{
        const data=await apiCurriculum.getCurriculumAll()
        setListCandidates(data)
        setLodingProfessionals(false)

       
    }
  

    const interval = setInterval(() => {
      getCurriculunsAll()
     }, 5000) 
     return () => clearInterval(interval);
}, [])



    return <Painel >
        <ContentPage titlePage="Profissionais">
        <Card style={{padding:'20px',margin:'20px'}}>
          <Text>Encontre Profissionais ideias pela filtragem</Text>
          <div style={{margin:'40px 0'}}  >
              <GridFilter >
                      <VStack justifyContent="center" className="filter-i" alignItems="center" >
                        <Text as="label" htmlFor="">Aréa</Text>
                        <SelectPicker name="xp" size="md" data={categorys.map(c=>({label:c.name,value:c.id}))}  />
                      </VStack>
                    
                   
  
                      <VStack justifyContent="center"  className="filter-i"  alignItems="center">
                        <Text as="label" htmlFor="">Nivel Profissional</Text>
                        <SelectPicker name="xp" data={levels.map(c=>({label:c.name,value:c.id}))}  />
                       </VStack>
                
                    
                      <VStack justifyContent="center"  className="filter-i"  alignItems="center">
                          <Text as={"label"} htmlFor="">Estado</Text>
                          <SelectPicker
                              placeholder="selecione o estado"
                              block
                              name="states"
                              onChange={value=>setStateSelected(value as string)}
                              data={statesList.map(item => ({ label: `${item.nome}-${item.sigla}`, value: item.sigla }))}
                          />
                    </VStack>
                      <VStack justifyContent="center"  className="filter-i"  alignItems="center">
                          <label htmlFor=""> Cidade</label>
                          <SelectPicker placeholder="Selecione a cidade" block 
                              onChange={value=>setCitySelected(value as string)}
                              data={cityList.map(i=>({label:i.nome,value:`${i.nome}`}))}
                          />
                      </VStack>
              
              </GridFilter>
          </div>
          
          <HStack justifyContent="center" alignItems="center" >
             <Button appearance="primary" color="green" onClick={removeFilters}>Aplicar</Button>
            <Button appearance="default" onClick={removeFilters}>Limpar</Button>
          </HStack>
        </Card>
        <HStack>
          <HStack>
           <Text as={"strong"}>Filtros</Text>: <HStack>
              {['Senior','TI','São Paulo','SP'].map(i=><Tag>{i}</Tag>)}
            </HStack>
          </HStack>
        </HStack>

         {loadingProfessionals && <Loading text="Aguarde,carregando profissionais..." type="bubbles" color={`${GlobalStyle.bgTheme}`}/>}
        {
            !loadingProfessionals && <ContainerProfessional>
            {
              listCandidates !== null && listCandidates?.map((c,k)=>(
                  <CardCandidates curriculum={c} key={k} />
              ))
            } 
          </ContainerProfessional>
        }
      
          
        </ContentPage>
    </Painel>
  
}