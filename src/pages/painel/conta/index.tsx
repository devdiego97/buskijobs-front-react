import { useNavigate } from "react-router-dom"
import { ContentPage } from "../../../componentes/ContentPage"
import { Painel } from "../../../componentes/Painel"
import {  Page } from "./style"
import  Swal from 'sweetalert'
import { toast } from "react-toastify"
import {  useState } from "react"
import { useFormik } from "formik"
import { schemaValidateUpdateUser } from "../../../validations/user.validation"
import { apiUsers } from "../../../services/users.action"
import { Button, Card, Divider,  HStack, Input, InputGroup, List, Modal, VStack } from "rsuite"
import FormGroup from "rsuite/esm/FormGroup"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import {Form,Text} from "rsuite"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import useThemeStore from "../../../zustand/theme.zustand"
import useCompanyStore from "../../../zustand/company.zustand"
import useAuthStore from "../../../zustand/auth.zustand"
import { IUser } from "../../../interfaces/user"

export const ContaPainel=()=>{
  const {deleteCompany}=useCompanyStore()
    const {deleteTheme}=useThemeStore() 
    const [visible, setVisible] =useState(false)
    const {user,saveUser,deleteUser}=useAuthStore()
    const [open,setOpen]=useState(false)
    const [edite,setEdite]=useState(false)
    const navigate=useNavigate()


    
    const [initialValues,setInitialValues]=useState({
        name:user ? user.name : '',
        lastname:user ? user.lastname : '',
        tel:user ? user.tel: '',
        email:user ? user.email : '',
        password:user ? user.password : ''
      })
      
    const SigOutUser=()=>{
        Swal({
            title:'Tem certeza?',
            text: 'Você terá que fazer login novamente?',
            icon: 'info',
            
            buttons:
                {
                    cancel: {
                      text: "Cancel",
                      value:false,
                      visible: true,
                      className: "",
                      closeModal: true,
                    },
                    confirm: {
                      text: "OK",
                      value: true,
                      visible: true,
                      className: "",
                      closeModal: true
                    }
                  }
            ,
          }).then((result) => {
            if (result) {
               deleteCompany()
               deleteTheme()
               deleteUser()
                navigate('/')
                toast.success('você saiu da conta')
            } else {
                console.log(result)
            }
          })
    
    
}


const formik=useFormik({
    initialValues:initialValues,
     validationSchema:schemaValidateUpdateUser,
     onSubmit:async (values)=>{
      if(user !== null ){
           const data={
             ...values,
             type:user.type,
             photo:user && user.photo ? user.photo : null
           }
           const result=await apiUsers.updateUser(user.id as number,data)
           if(result){
             saveUser({id:user?.id,...data} as IUser)
             setInitialValues({
              name:data.name,
              lastname:data.lastname,
              tel:data.tel,
              email:data.email,
              password:data.password
             })
             localStorage.setItem('@u',JSON.stringify({id:user?.id,...data}))
             toast.success('Dados atualizado com sucesso')
           
             
           }else{
             toast.error('algo deu errado')
           }
       }
      
       setOpen(false)
     }
   })
   
    return <Painel >
        <ContentPage titlePage="Conta">
            <Page>
                <p>Gerencie seus dados por aqui </p>
                <Card aria-label="card-data-user" style={{margin:'50px 0'}}>
                    <div className="content-data" >
                        <Card.Header>
                          <Text as={"h4"} weight="extrabold">Dados da sua conta</Text>
                          <Divider></Divider>
                        </Card.Header>
                        <Card.Body>
                          <Text><strong style={{marginRight:"12px"}}>Nome : </strong>{user?.name} {user?.lastname}</Text>
                          <Text><strong style={{marginRight:"12px"}}>Email : </strong>{user?.email}</Text>
                          <Text><strong style={{marginRight:"12px"}}>Telefone :</strong>:{user?.tel}</Text>
                          <Text><strong style={{marginRight:"12px"}}>Sua senha : </strong>:**********</Text>
                          <Text><strong style={{marginRight:"12px"}}>Tipo de Usuário : </strong> :{user?.type}</Text>
                        </Card.Body>
                        <Card.Footer>
                            <div className="cx-btn">
                                <Button  appearance="primary" color="green" onClick={()=>{setEdite(true),setOpen(true)}}>editar</Button>
                            </div>
                            <div className="cx-btn-close">
                                <Button appearance="default"as={"a"} onClick={SigOutUser}>Sair da minha conta</Button>
                            </div>
                        </Card.Footer>
                      
                    </div>
                </Card>
                <Card aria-label="card-planos">
                  <Card.Header>
                    <Text as={"h4"} weight="extrabold">Planos e Assinaturas</Text>
                    <Divider></Divider>
                  </Card.Header>
                  <Card.Body>
                     <HStack>
                        <Text><Text weight="bold">Tipo : </Text> Gold</Text>
                        <Text><Text>Preço/Mensanlidade:</Text> R$ 58,90</Text>
                      </HStack>
                      <VStack style={{marginTop:'50px'}}>
                        <List size="md">
                          <Text as={"h5"}>Beneficios do Plano</Text>
                          <List.Item>Divulgação ilimitada de vagas</List.Item>
                          <List.Item>Criação de banco de talentos</List.Item>
                        </List>
                      </VStack>
                       
                  </Card.Body>
                </Card>

         {
          edite && <Modal open={open}  size={"md"} >
            <Modal.Header style={{paddingBottom:'12px',borderBottom:'1px solid #ddd'}} closeButton={false}>
              <Modal.Title>Atualize seus dados de usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form fluid>
                <FormGroup style={{margin:'9px 0'}} >
                  <FormControlLabel>Nome</FormControlLabel>
                  <Input type="text" name="name"  placeholder="digite seu nome" 
                     onChange={value=>formik.setFieldValue("name",value)} 
                      value={formik.values.name} 
                  />
                  <Form.ErrorMessage style={{fontSize: '11px', margin: '5px 0'}}  show={!!formik.errors.name} placement="bottomStart">
                    {formik.errors.name}
                  </Form.ErrorMessage>
                </FormGroup>
                <FormGroup style={{margin:'9px 0'}} >
                  <FormControlLabel>Sobrenome</FormControlLabel>
                  <Input type="text" name="lastname"  placeholder="digite seu sobrenome" 
                    onChange={value=>formik.setFieldValue("lastname",value)}
                    value={formik.values.lastname} 
                  />
                   <Form.ErrorMessage style={{fontSize: '11px', margin: '5px 0'}}  show={!!formik.errors.lastname} placement="bottomStart">
                    {formik.errors.lastname}
                  </Form.ErrorMessage>
                </FormGroup>
                <FormGroup style={{margin:'9px 0'}}>
                  <FormControlLabel>Email</FormControlLabel>
                  <Input type="text" name="email" placeholder="digite seu email" 
                     onChange={value=>formik.setFieldValue("email",value)} value={formik.values.email} 
                  />
                   <Form.ErrorMessage style={{fontSize: '11px', margin: '5px 0'}}  show={!!formik.errors.email} placement="bottomStart">
                    {formik.errors.email}
                  </Form.ErrorMessage>
                </FormGroup>
                <FormGroup style={{margin:'9px 0'}}>
                  <FormControlLabel>Senha</FormControlLabel>
                      <InputGroup inside >
                      <Input type={visible ? 'text' : 'password'} name="password" 
                        onChange={value=>formik.setFieldValue("password",value)} value={formik.values.password} 
                      />
                      <InputGroup.Button onClick={()=> setVisible(!visible)}>
                        {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                      </InputGroup.Button>
                  </InputGroup>
                  <Form.ErrorMessage style={{fontSize: '11px', margin: '5px 0'}}  show={!!formik.errors.password} placement="bottomStart">
                      {formik.errors.password}
                  </Form.ErrorMessage>
                </FormGroup>
              
              </Form>
            </Modal.Body>
            <Modal.Footer style={{paddingTop:'22px',borderTop:'1px solid #ddd'}}>
                <Button onClick={formik.submitForm} appearance="primary" type="submit" color="blue" >atualizar</Button>
                <Button appearance="default" disabled={!formik.isValid ? true : false} onClick={()=>setOpen(false)} >fechar</Button>
            </Modal.Footer>
          </Modal>
         }
          
            </Page>
        </ContentPage>
    </Painel>
}

