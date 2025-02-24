import { Painel } from "../../../componentes/Painel"
import { Page } from "./style"
import ArrowRight from "../../../assets/svgs/arrowright"
import RocketIcon from "../../../assets/svgs/rocket"
import { Button, Card, Container, FlexboxGrid, Heading, HStack, VStack } from "rsuite"
import {List,Text} from "rsuite"


const planos={
   essential:{
    resource:[
        'Acesso á diversos candidatos e curriculos',
        'Criação Ilimitada de vagas',
        'Gerenciamento de Candidaturas',
        'Envio de Mensagens diretas aos candidatos',
        'Página de Vagas da Empresa',
        'Compartilhamento de vagas em diversos redes'
       ],
       price:59.90,
   },
  pro:{
    resource:[
        'Acesso á diversos candidatos e curriculos',
        'Criação Ilimitada de vagas',
        'Gerenciamento de Candidaturas',
        'Envio de Mensagens diretas aos candidatos',
        'Página de Vagas da Empresa',
        'Compartilhamento de vagas em diversos redes'
       ],
       price:80.90,
   }
  
}



export default function Planos(){
return  <Painel>
    <Page>
<div className="content">
     <Heading as={"h3"}>Acesse melhores Recursos </Heading>
     <Text style={{margin:'50px 0'}}>Está gostando da plataforma e quer ainda mais ter recursos?<br/>
         Acesse o plano que for mais adequado a sua Empresa :

     </Text>
     <Container>
        <HStack justifyContent="center" alignItems="center">
        <Card style={{padding:'20px',flex:'1'}}>
             <h3> <RocketIcon />Plano Essencial</h3>
             {
               <List divider={false}>
                   {planos.essential.resource.map((i,k)=>(
                     <List.Item key={k} style={{display:'flex',alignItems:'center'}}> <ArrowRight /> {i}</List.Item>
                   ))}
               </List>
             }
                <VStack className="price" style={{margin:'20px 0'}}>
                 <Text as={"del"}>De R$139.90 mensais </Text>
                 <Text as={"p"}>Por apenas <strong className="value">R${planos.pro.price.toFixed(2).replace('.',',')}</strong> mensais</Text>
             </VStack>
             <HStack justifyContent="center" alignItems="center">
                  <Button appearance="primary" color="blue">Assinar Agora</Button>
             </HStack>
         </Card>
         <Card style={{padding:'20px',flex:'1'}} >
             <h3 className="golden"><RocketIcon />Plano Golden</h3>
             {
               <List  divider={false}>
                   {planos.pro.resource.map((i,k)=>(
                     <List.Item key={k}  style={{display:'flex',alignItems:'center'}}>  <ArrowRight /> {i}</List.Item>
                   ))}
               </List>
             }

             <VStack className="price" style={{margin:'20px 0'}}>
                 <Text as={"del"}>De R$139.90 mensais </Text>
                 <Text as={"p"}>Por apenas <strong className="value">R${planos.pro.price.toFixed(2).replace('.',',')}</strong> mensais</Text>
             </VStack>
             <HStack justifyContent="center" alignItems="center">
                  <Button appearance="primary" color="blue">Assinar Agora</Button>
             </HStack>
         </Card>
        </HStack>

     </Container>
</div>
</Page>
</Painel>
}

