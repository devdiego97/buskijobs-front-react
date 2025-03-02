import {Link}  from 'react-router-dom'
import { Container, HeaderPainel, Main } from "./style"
import { ReactNode, useEffect, useState } from 'react'
import List from '../../assets/svgs/list'
import Addlist from '../../assets/svgs/addlist'
import Home from '../../assets/svgs/home'
import Candidatesearch from '../../assets/svgs/candidatesearch'
import User from '../../assets/svgs/user'
import Company from '../../assets/svgs/company'
import { useAuthContext } from '../../context/authContext'
import apiCompany from '../../services/apiCompany'
import { ICompany } from '../../interfaces/company'
import { motion } from 'framer-motion';
import Rocket from '../../assets/svgs/rocket'
import { Toggle, VStack,Text } from 'rsuite'
import useCompanyStore from '../../zustand/company.zustand'
import useThemeStore from '../../zustand/theme.zustand'



type Props={
    children:ReactNode,
    p?:string
}

export const Painel=({children,p}:Props)=>{
    const {company,saveCompany,deleteCompany}=useCompanyStore()
    const {handleTheme,theme}=useThemeStore()
    const {user}=useAuthContext()
    
   
    useEffect(()=>{
        
     const getCompanyfromUser=async()=>{
        if(user){
            const data=await apiCompany.getCompanyFromUser(user.id as number) as ICompany //pegando a empresa do usuário
            if(data.name){
                saveCompany(data)
            }else{
                saveCompany(null)
            }
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
                    <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/${company ? `${company?.name?.toLowerCase()}/profissionais` : `profissionais`}`} ><Candidatesearch />Profissionais</Link>
                    <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/${company ? `${company?.name?.toLowerCase()}/vagaspostadas` : `vagaspostadas`}`}><List />Vagas Postadas</Link>
                    <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/${company ? `${company?.name?.toLowerCase()}/novavaga` : `novavaga`}`}><Addlist />Nova Vaga</Link>
                    <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/minha-conta`} ><User />Conta</Link>
                    <Link to={`/painel/recrutador/${user?.name.toLowerCase()}/${company? `${company?.name?.toLowerCase()}` : `empresa`}`}><Company />A Empresa</Link>
                    <Link to='/painel/recrutador/planos' ><Rocket />Planos</Link>
                </div>
            </nav>
            <VStack justifyContent="center" style={{margin:'20px'}}>
                <Text color='orange'>Altere o  tema da plataforma:</Text>
                  <div>
                      <Toggle style={{padding:'9px'}} size="md" onChange={()=>handleTheme(theme === 'light' ? 'dark' : 'light')} 
                       checkedChildren={theme === 'light' ? 'dark' : 'light'} unCheckedChildren={theme === 'light' ? 'dark' : 'light'}  />
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