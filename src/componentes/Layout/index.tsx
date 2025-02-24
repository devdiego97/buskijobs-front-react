import { ReactNode, useEffect } from "react"
import { Container } from "./style"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { motion } from 'framer-motion';
import { apiCurriculum } from "../../services/apiCurriculum";
import { useAuthContext } from "../../context/authContext";


type PropsApp={
  children:ReactNode
}

export const Layout=({children}:PropsApp)=>{
   const {user,setCurriculumContext}=useAuthContext()
   
   useEffect(()=>{
      const getCurriculumUser=async()=>{
        if(user !== null){
              const curriculumId=await apiCurriculum.getCurriculumFromUser(user.id as number)
             if(typeof curriculumId !== 'string'){
              setCurriculumContext(curriculumId)
              localStorage.setItem('@curri',JSON.stringify(curriculumId))
              console.log(curriculumId)
             }else{
             
              setCurriculumContext(null)
              console.log(curriculumId)
             }
          }
         
        }
        setTimeout(getCurriculumUser)
      }
  ,[])


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