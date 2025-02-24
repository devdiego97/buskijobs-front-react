import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { ContainerJobs } from "./style"
import { IJob } from "../../interfaces/job"
import { apiJobs } from "../../services/jobs.action"
import { CardJob } from "../../componentes/CardJob"
import { Layout } from "../../componentes/Layout"
import { BannerSlide } from "../../componentes/BannerSlide"
import { bannersJobs } from "../../data/banner"
import { useAuthContext } from "../../context/authContext"
import { ICategory } from "../../interfaces/category"
import apiCategory from "../../services/apiCategory"
import Filter from "../../assets/svgs/filter"
import { apiStatesCity, ICity, IState } from "../../services/stateCity"
import { Button, Card,Container,HStack,Pagination,Placeholder,SelectPicker,Tag,TagGroup,Text, VStack } from "rsuite"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import { IContractType } from "../../interfaces/contractType"
import { IModelOperating } from "../../interfaces/modelOperating"
import { ILevels } from "../../interfaces/levels"
import apiContractType from "../../services/apiContractType"
import apiLevels from "../../services/apiLevels"
import apiModelOperating from "../../services/apiModelOperating"




export const Vagas=()=>{
  const [jobs,setJobs]=useState<IJob[] | []>([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  const [sortBy, setSortBy] = useState('id')
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');
  const [total, setTotal] = useState(0)


     //States da api
    const [contractTypes,setContractTypes]=useState<IContractType[] | []>([])
    const [modelsOperating,setModelsOperating]=useState<IModelOperating[] | []>([])
    const [levels,setLevels]=useState<ILevels[] | []>([])
    const [statesList,setStatesList]=useState<IState[] | []>([])
    const [cityList,setCityList]=useState<ICity[] | []>([]) 
    const [filtersAppply,setFitersApply]=useState<String[]>([])

    //Selecteds Filters
    const [modelOperatingSelected,setModelsOperatingSelected]=useState<IModelOperating | null>(null)
    const [contractSelected,setContractSelected]=useState<IContractType | null>(null)
    const [levelSelected,setLevelSelected]=useState<ILevels | null>(null)
    const [categorySelected,setCategorySelected]=useState<ICategory | null>(null)
    const [citySelected,setCitySelected]=useState<ICity | null>(null)   
    const [stateSelected,setStateSelected]=useState<IState | null>(null)
    const [contractType,setContractType]=useState<IContractType | null>(null)

    const [load,setLoad]=useState(false)
    const {user,setCurriculumContext}=useAuthContext()
    const [categorys,setCategorys]=useState<ICategory[] | []>([])
   const [renderFilter,setRenderFilter]=useState(false)


    //Pickers de selects
    const pickerModelOperating=modelsOperating.map((item) => ({label: item.name,value: item.id}))
    const pickerStates=statesList.map((item) => ({sigla:item.sigla,label: item.nome,value: item.id}))
    const pickerCitys=cityList.map((item) => ({label: item.nome,value: item.id}))
    const pickerContractTypes=contractTypes.map((item) => ({label: item.name,value: item.id}))
    const pickerlevels=levels.map((item) => ({label: item.name,value: item.id}))
    const pickerCategorys=categorys.map((item) => ({label: item.name,value: item.id}))
    

//função de métodos de changes de selects
const HandlesChangesList={
   handleChangeModelOperating : (value: number | null) => {
    const selected  = modelsOperating.find((item) => item.id === value) || null
    if(selected !== null){
      setModelsOperatingSelected(selected)
      }
  } ,


  handleChangeContractType: (value: number | null) => {
    const selected  = contractTypes.find((item) => item.id === value) || null
    if(selected !== null){
      setContractSelected(selected)
      }
  },
  
  handleSelectLevelsChange : (value: number | null) => {
    const selected  = levels.find((item) => item.id === value) || null
    if(selected !== null){
      setLevelSelected(selected) 
      }
  
  },
  handleChangeCategorys : (value: number | null) => {
    const selected  = categorys.find((item) => item.id === value) || null
    if(selected !== null){
      setCategorySelected(selected)
      }
  }  

}
const handleSelectStateChange = (value: number | null) => {
  const selected = statesList.find((item) => item.id === value) || null
  if (selected !== null) {
      setStateSelected(selected)
  }
}

const handleSelectCityChange = (value: number | null) => {
  const selected  = cityList.find((item) => item.id === value) || null
  if(selected !== null){
    setCitySelected(selected) 
    }

}

  




///funções de filtros

const applyFilters=()=>{
  if(contractSelected?.name || 
    stateSelected?.nome || modelOperatingSelected?.name || 
    citySelected?.nome || categorySelected?.name

  ){
    let filters=[contractSelected?.name,
      stateSelected?.nome,modelOperatingSelected?.name,
      citySelected?.nome,categorySelected?.name]
    setFitersApply(filters as String[])
  }
 
  
}
const removeFilters = () => {
  setCitySelected(null)
  setStateSelected(null)
  setContractSelected(null)
  setLevelSelected(null)
  setCategorySelected(null)
  setModelsOperatingSelected(null)
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
            const listStates=await apiStatesCity.getStates() as IState[]
            setStatesList(listStates)
          }
    getStates()
},[])
        
//Setando as cidades no select de acordo com o estado selecionado
useEffect(() => {
  const getCities = async () => {
      if (stateSelected) {
          try {
              const listCities = await apiStatesCity.getCityFromState(stateSelected.id) as ICity[]
              setCityList(listCities || [])
          } catch (error) {
              console.error("Erro ao buscar cidades:", error)
              setCityList([])
          }
      } else {
          setCityList([])
      }
  }
  getCities()
}, [stateSelected])

//Listando categorias de vagas no select
 useEffect(()=>{
     const getListCategorys=async()=>{
        const list=await apiCategory.getCategorys() as ICategory[]
       setCategorys(list)
      }
        
     const getLevels=async()=>{
            const listLevels=await apiLevels.getAllLevels() as ILevels[]
            if(listLevels as ILevels[]){
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
    
 //Funçao que busca os jobs
    useEffect(()=>{
      const fetchUsers = async () => {
        try {
          const result = await apiJobs.getAllJobs({ page, pageSize, sortBy, sortOrder })
          setJobs(result.data);
          setTotal(result.total);
        } catch (error) {
          console.error('Erro ao buscar usuários:', error)
        }
      }

      fetchUsers()

    },[page, pageSize, sortBy, sortOrder])

    const handlePageChange = (eventKey: string | number, _event: React.MouseEvent<Element, MouseEvent>) => {
      const newPage = typeof eventKey === 'string' ? parseInt(eventKey, 10) : eventKey
      setPage(newPage)
      window.scrollTo({
        top: 0,
        behavior: 'auto', 
      })
    }
  
    const handleSort = (field: string) => {
      if (sortBy === field) {
        setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC')
      } else {
        setSortBy(field)
        setSortOrder('ASC')
      }
    }


    return <Layout>
        <ContentPage titlePage="">
       <BannerSlide  banners={bannersJobs}/>
       <ContainerJobs>
        <div className="cx-data-info">
           <Card as="fieldset" >
                <Text as="legend"><Filter/>Filtros</Text>
                <HStack id="filters">
                       <VStack className="stack">
                         <FormControlLabel htmlFor="">Categoria</FormControlLabel>
                        <div>
                        <SelectPicker
                             style={{position:'static',zIndex:9999 }}
                              placeholder="selecione a categoria"
                              block
                              name="states"
                              onChange={HandlesChangesList.handleChangeCategorys}
                              data={pickerCategorys}
                          />
                        </div>
                       </VStack>
                       <VStack justifyContent="center"  className="filter-i"  alignItems="center">
                          <FormControlLabel htmlFor="">Atuação</FormControlLabel>
                            <SelectPicker placeholder="Selecione o modo de atuação" block 
                             onChange={HandlesChangesList.handleChangeModelOperating}
                             data={pickerModelOperating}
                             />
                       </VStack> 
                      <VStack>
                        <FormControlLabel htmlFor="">Estado</FormControlLabel>
                        <SelectPicker
                              placeholder="selecione o estado"
                              name="states"
                              onChange={handleSelectStateChange}
                              data={pickerStates}
                          />
                    </VStack>  
                     <VStack justifyContent="center"  className="filter-i"  alignItems="center">
                          <FormControlLabel htmlFor=""> Cidade</FormControlLabel>
                            <SelectPicker placeholder="Selecione a cidade" block 
                               onChange={handleSelectCityChange}
                               data={pickerCitys}
                             />
                       </VStack> 
                      
                       <VStack className="vstack" justifyContent="flex-start">
                         <FormControlLabel as={"strong"}>Tipo Contratação</FormControlLabel>
                        <SelectPicker placeholder="Selecione "  
                            block
                            name="contractType"
                            style={{flex:'1'}}
                           onChange={HandlesChangesList.handleChangeContractType}
                            data={pickerContractTypes}
                          
                        />
                  </VStack>  
                </HStack>
               <HStack style={{margin:'60px 0'}} justifyContent="center" onClick={removeFilters}>
                 <Button appearance="primary" onClick={applyFilters}>Filtrar</Button>
                 <Button onClick={removeFilters}>remover filtros</Button>
               </HStack>
           </Card>
         
        </div>
       
        {
              renderFilter && (
          <Container>
            <Text>Filtros:</Text>
            <HStack>
                {
                  filtersAppply.map(i=><Tag>{i}</Tag>)
                }
            </HStack>
          </Container>
        )
       }
        
           <Text>{user?.name} Acompanhe as vagas abertas.{jobs.length} vagas abertas</Text>
           <div className="cx-jobs">
            {/*query.isLoading &&   <Skeleton />*/}
            {load &&  <Placeholder.Paragraph active />}
             {!load && jobs !== null && jobs?.map((i,k)=><CardJob key={k} job={i} />) }
             
           </div>
           {jobs !== null &&  <HStack style={{ margin:'80px 0' }} justifyContent="center">
              <Pagination  
               prev
               next
               first
               last
               ellipsis
               boundaryLinks
               maxButtons={5}
               size="md"
               activePage={page}
               total={total}
               onSelect={handlePageChange}
              pages={Math.ceil(total / pageSize)}
                
               
            
            />
              
            </HStack>

           }
       </ContainerJobs>
   </ContentPage>
    </Layout>
}


