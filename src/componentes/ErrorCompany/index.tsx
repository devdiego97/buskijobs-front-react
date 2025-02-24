
import { Container, Heading, Modal, VStack ,Text, IconButton} from "rsuite"
import { Link } from "react-router-dom"
import { useState } from "react"
import RemindRoundIcon from '@rsuite/icons/RemindRound'
import { getHeight } from "rsuite/esm/DOMHelper"

export const ErrorCompany=()=>{
   const [open,setOpen]=useState(true)

 return <Container style={{marginTop:'100px'}}>
   <VStack justifyContent="center" alignItems="center">
      <Modal open={open} size={"sm"}>
      <Modal.Body>
         <VStack justifyContent="center" alignItems="center">
            <IconButton appearance="primary"  color="red" style={{margin:'50px 0',height:'70px',width:'70px'}} icon={<RemindRoundIcon style={{height:'70px',width:'70px'}} />} />
            <Heading as={"h5"}>Ops! Você não tem uma empresa cadastrada</Heading>
            <Text>Clique <Link to='/painel/recrutador/configure_empresa'>aqui</Link> para fazer o cadastro</Text>
         </VStack>

      </Modal.Body>
   </Modal>
   </VStack>
 </Container>
}


/*
 <Box>
      <Error />
       <h3>Ops! Você não tem uma empresa cadastrada</h3>
       <p>Clique <Link to='/painel/recrutador/configure_empresa'>aqui</Link> para fazer o cadastro</p>
    </Box>

*/