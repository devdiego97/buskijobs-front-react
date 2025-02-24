import { useEffect } from "react"
import CardCourse from "../../componentes/CardCourse"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { Courses } from "../../data"
import gsap from "gsap"
import { BannerSlide } from "../../componentes/BannerSlide"
import { bannersCourses } from "../../data/banner"
import { GridCourses, Page } from "./style"
import { Card,Container,Text, VStack,SelectPicker, Button } from "rsuite"



export const Cursos=()=>{

useEffect(()=>{
  gsap.fromTo('.grid',
  {opacity:0},{
    opacity:1 ,duration:2  }
  )
  
},[])

useEffect(()=>{
  document.title='MyJobs/Cursos'
},[])


    return <Layout>
    
<ContentPage titlePage="">
<BannerSlide banners={bannersCourses} />
      <Page>
          <Card id="card-filter" as={"fieldset"}>
            <Text as={"legend"}>Busque pelo seu curso desejado</Text>
            <div className="grid-selects">
              <VStack className="vstack" justifyContent="center" alignItems="center">
                <Text>categoria</Text>
                <SelectPicker block data={['TI',"marketing"].map(i=>({label:i,value:i}))} />
              </VStack>
              <VStack  justifyContent="center" alignItems="center">
                <Text>Valor</Text>
                <SelectPicker data={['Pago',"Gratuito"].map(i=>({label:i,value:i}))} />
              </VStack>
              <VStack  justifyContent="center" alignItems="center">
                <Text>Tag</Text>
                <SelectPicker data={['Pago',"Gratuito"].map(i=>({label:i,value:i}))} />
              </VStack>
              <VStack justifyContent="center" alignItems="center">
                  <Button appearance="primary">Filtrar</Button>
              </VStack>
            </div>
          </Card>
        <GridCourses >
          {Courses.map((i,k)=><CardCourse key={k} course={i} />)}
        </GridCourses>
      </Page>
</ContentPage>

    
     
    </Layout>
}