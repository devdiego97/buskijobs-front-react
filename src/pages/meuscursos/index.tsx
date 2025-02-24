import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { GridCourses } from "./style"
import { Courses } from "../../data"
import CardMyCourse from "../../componentes/CardMyCourse"


export const MeusCursos=()=>{

  const [courses,setCourses]=useState(Courses)

    useEffect(()=>{
        document.title='MyJobs/Meus cursos'
      },[])

    return <Layout>
      <ContentPage titlePage="Meus Cursos">
        <GridCourses>
          {courses.length > 0 && courses.map((c,k)=>(
            <CardMyCourse course={c} key={k} />
          ))}
        </GridCourses>
    </ContentPage>
    </Layout>
}