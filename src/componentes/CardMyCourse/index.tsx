import { CursoType } from "../../types/curso"
import {useNavigate } from "react-router-dom"
import { Card, VStack,Text, Tag, IconButton} from "rsuite"
import {PlayOutline} from '@rsuite/icons'

type props={
    course:CursoType
}

export default ({course}:props)=>{
    

    const nav=useNavigate()

    return <Card direction="row">
       <img
        src={course.img}
        alt="Shadow"
        width={150}
        style={{ objectFit: 'cover' }}
      />
        <VStack>
           <VStack>
             <Card.Header>
                <Text maxLines={1}>{course.name}</Text>
             </Card.Header>
           </VStack>
           <Card.Body>
               <Tag>categoria : {course.category}</Tag> 
            </Card.Body>
            <Card.Footer>
                <IconButton onClick={()=>nav(`/plataforma_ead/curso/${course.id}/${course.name}`)} color="blue" appearance="primary" icon={<PlayOutline /> }>entrar</IconButton>
            </Card.Footer>
        </VStack>
    
    </Card>
}
