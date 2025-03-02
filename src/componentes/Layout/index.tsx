import { ReactNode, useEffect } from "react"
import { Container } from "./style"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { motion } from 'framer-motion';
import { apiCurriculum } from "../../services/apiCurriculum";
import { useAuthContext } from "../../context/authContext";
import useCurriculumStore from "../../zustand/curriculum.zustand";
import useAuthStore from "../../zustand/auth.zustand";


type PropsApp={
  children:ReactNode
}

export const Layout=({children}:PropsApp)=>{
   const {saveCurriculum,curriculum}=useCurriculumStore()
   const {user}=useAuthStore()
   //const {user,setCurriculumContext}=useAuthContext()
   
   useEffect(()=>{
      const getCurriculumUser=async()=>{
        if(user !== null){
              const curriculumId=await apiCurriculum.getCurriculumFromUser(user.id as number)
             if(typeof curriculumId !== 'string'){
              saveCurriculum(curriculumId)
              console.log(curriculum)
              console.log(curriculumId)
             }else{
              saveCurriculum(null)
              console.log(curriculumId)
             }
          }
         
        }
        setTimeout(getCurriculumUser)
      }
  ,[user])


    return <Container>
       <Header />
       <main>
       <motion.div
          key="layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
       >
         {children}
      </motion.div>
       </main>
       
       <Footer />
    </Container>
}