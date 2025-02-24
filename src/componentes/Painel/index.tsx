import {Link}  from 'react-router-dom'
import { Container, HeaderPainel, Main } from "./style"
import { ReactNode, useEffect, useState } from 'react'
import Lupa from '../../assets/svgs/lupa'
import List from '../../assets/svgs/list'
import Addlist from '../../assets/svgs/addlist'
import Home from '../../assets/svgs/home'
import Candidatesearch from '../../assets/svgs/candidatesearch'
import User from '../../assets/svgs/user'
import Company from '../../assets/svgs/company'
import { useAuthContext } from '../../context/authContext'
import apiCompany from '../../services/apiCompany'
import { CompanyInterface } from '../../interfaces/company'
import { motion } from 'framer-motion';
import Rocket from '../../assets/svgs/rocket'
import { Toggle, VStack,Text } from 'rsuite'
import { useGlobalContext } from '../../context/globalContext'



type Props={
    children:ReactNode,
    p?:string
}

export const Painel=({children,p}:Props)=>{
    const {handleTheme,theme}=useGlobalContext()
    const {user,setCompany,company,curriculumContext}=useAuthContext()
    const [companyName,setCompanyName]=useState<string>('')
   
    useEffect(()=>{
        
     const getCompanyfromUser=async()=>{
        if(user){
            const data=await apiCompany.getCompanyFromUser(user.id as number) as CompanyInterface
            localStorage.setItem('@companyid',JSON.stringify(data?.id))
            setCompanyName(data.name)
            const companyStorage=localStorage.getItem('@companyid')
            const parsedCompanyStorage=JSON.parse(companyStorage as string) as CompanyInterface
            setCompany(parsedCompanyStorage)
            setCompanyName(parsedCompanyStorage?.name?.toLowerCase())
        }
                    
                 
    }
    getCompanyfromUser()
        
     },[])
     
    return <Container>
        <HeaderPainel>
            <div className="logo">
                <div className="cx-img">
                    <img src="/imgs/logo.png" alt="" />
                </div>
                <hr />
                <p>{company?.name}</p>
            </div>
            <div className="cx-btn">
                   <button>abrir</button>
                </div>
            <nav>
                <div className="links">
                    <div className="cx-btn">
                        <button>fechar</button>
                    </div>
                    <Link to={`/painel/recrutador`} ><Home />Inicio</Link>
                    <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/${companyName ? `${companyName.toLowerCase()}/profissionais` : `profissionais`}`} ><Candidatesearch />Profissionais</Link>
                    <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/${companyName ? `${companyName.toLowerCase()}/vagaspostadas` : `vagaspostadas`}`}><List />Vagas Postadas</Link>
                    <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/${companyName ? `${companyName.toLowerCase()}/novavaga` : `novavaga`}`}><Addlist />Nova Vaga</Link>
                    <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/minha-conta`} ><User />Conta</Link>
                    <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/${companyName ? `${companyName.toLowerCase()}` : `empresa`}`}><Company />A Empresa</Link>
                    <Link to='/painel/recrutador/planos' ><Rocket />Planos</Link>
                </div>
            </nav>
            <VStack justifyContent="center" style={{margin:'20px'}}>
                <Text color='orange'>Altere o  tema da plataforma:</Text>
                  <div>
                      <Toggle style={{padding:'9px'}} size="md" onChange={()=>handleTheme(theme === 'light' ? 'dark' : 'light')} checkedChildren="light" unCheckedChildren="dark"  />
                    </div>
           </VStack>
        </HeaderPainel>
        <Main p={p}>
        <motion.div
            key="layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            >
            {children}
            </motion.div>
        </Main>
       
    </Container>
}