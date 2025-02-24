import { useNavigate, useParams, } from "react-router-dom"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { useEffect } from "react"
import { Page } from "./style"
import { Courses } from "../../data"
import {BoxCourse } from "./style"
import Arrowright from "../../assets/svgs/arrowright"
import { useAuthContext } from "../../context/authContext"
import { toast } from "react-toastify"
import { CursoType } from "../../types/curso"
import {  Button, Card, Container, Divider, Heading, HStack, Image, List, Tag, Text, VStack } from "rsuite"
import "swiper/css"
import { SLideComments } from "../../componentes/SlideComments"
import { depoimentos } from "../../data/depoiments"
import Tab from "rsuite/esm/Tabs/Tab"


export const CursoId= ()=>{

    const params=useParams()
    const courseid=Courses.find(c=>c.id === parseInt(params.id as string)) as CursoType
    const navigate=useNavigate()
    const {user}=useAuthContext()

    useEffect(()=>{
        document.title='MyJobs/Curso Id'
      },[])




const UserEnroll=()=>{
    if(user){
        navigate(`/plataforma_ead/curso/${courseid.id}/${courseid.name}`)
        toast.success('Matriculado com sucesso')
    }else{
        toast.error('Ops,você não possui uma conta ou não está logado')
    }

}

const settings={
    dots: true,
infinite: true,
speed: 500,
slidesToShow: 2,
slidesToScroll: 1,}

    return <Layout>
        <ContentPage>
            <Page>
                  <VStack>
                    <Heading as="h3">{courseid.name}</Heading>
                    <Text as={"small"} color="cyan">3000 pessoas já compraram esse curso</Text>
                  </VStack>
                
                <div id="content-course">
                <div className="left">
                <section>
                    <h3><Arrowright />Sobre o Curso</h3>
                        <Text size={"lg"}>
                        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Text>
                    </section>
                    <Divider></Divider>
                    <section>
                        <h3><Arrowright />Conteúdo</h3>
                        <List divider={false}>
                          {[
                            'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I',
                            'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I',
                            'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I',
                            'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I',
                            'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I'
                          ].map((i=><List.Item>{i}</List.Item>))}
                        </List>
                    </section>
                    <section>
                        <h3></h3>
                        <p></p>
                    </section>
               </div>
               <div className="right">
                   <Card width={350} >
                   <Image src="/imgs/css-course.png" />
                    <Card.Body >
                        <HStack justifyContent="space-around" alignItems="center">
                                <Tag color="green" >{courseid.category}</Tag>
                                <Tag color="blue">{courseid.free ? 'Gratuito' : `R$ ${courseid.price}`}</Tag>
                               
                        </HStack>
                    </Card.Body>
                    <Card.Footer style={{margin:'20px 0'}} >
                       <Button block size="lg" appearance="primary" onClick={UserEnroll}>matricular</Button>
                    </Card.Footer>   
                      
                   </Card>
               </div>
                          

                </div>
                <VStack style={{padding:'20px 100px'}}>
                    <Heading >
                     
                          <Text className='txt' as='p' align="center">O ques os estudantes dizem</Text>
                       
                    </Heading>
                     <SLideComments depoiments={depoimentos}/>
                 </VStack>

            </Page>
        </ContentPage>
    </Layout>
}