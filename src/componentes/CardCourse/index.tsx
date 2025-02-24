
import {useNavigate } from "react-router-dom"
import { Button,Card,Container,Divider,HStack,Tag,Text } from "rsuite"


type Props={
    course:{
        id:number,
        img:string,
        name:string,
        price:number,
        free:boolean,
        category:string
    }
}

export default ({course}:Props)=>{
    const navigate=useNavigate()


    return <Card className="card-course" >
         <img src={course.img} alt="" style={{height:'190px'}} />
        <Card.Header>
           <Text size={"lg"} as='h4' maxLines={1}>{course.name}</Text>
        </Card.Header>
        <Divider></Divider>
        <Card.Body>
            <HStack justifyContent="space-around" alignItems="center">
                <Tag color="cyan"  >{course.category}</Tag>
               {course.free ? <Tag    color="green" >Gratuito</Tag> : <Tag   color="violet">R$ {course.price.toString().replace('.',',')}</Tag>}
            </HStack>
        </Card.Body>
        <Card.Footer style={{margin:'20px 0'}}>
           <Container>
              <Button  onClick={()=>navigate(`/cursos/${course.id}`)} 
                size="lg" appearance="primary" block color="blue"
               >detalhes
             </Button>
           </Container>
        </Card.Footer>
    </Card>

   
}