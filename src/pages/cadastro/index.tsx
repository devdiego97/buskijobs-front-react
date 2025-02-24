import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Page } from "./style"
import { Link,useNavigate, useParams } from "react-router-dom"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import { Layout } from "../../componentes/Layout"
import { schemaValidateUser } from "../../validations/user.validation"
import { apiAuth } from "../../services/auth.action"
import { useAuthContext } from "../../context/authContext"
import { Form,Container,Text, InputGroup,Input, HStack, Button, VStack, Radio, RadioGroup} from "rsuite"
import FormControl from "rsuite/esm/FormControl"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import FormControlLabel from "rsuite/esm/FormControlLabel"




export const Cadastro=()=>{
    const params=useParams()
    const navigate=useNavigate()
    const {type}=params
    const {SigUp}=useAuthContext()
    const [visible, setVisible] =useState(false)

  
    
    useEffect(()=>{
      document.title=`MyJobs/Cadastro/${type}`
    },[type])


  const initialValues={
    name:'',
    lastname:'',
    email:'',
    password:'',
    tel:'',
    type:'candidato'

  }

  

const formik=useFormik({
  initialValues:initialValues,
  validationSchema:schemaValidateUser,
  onSubmit:async (values,{resetForm}) =>{
    const response=await apiAuth.sigUp(values)
    resetForm()
    if(response.data.status === true){
        const {user,token}=response.data
        if(user.type === 'candidato'){
            navigate('/vagas')
            SigUp(user,token)
            toast.success('login feito com sucesso')
        }else if(user.type === 'recrutador'){
            navigate('/painel/recrutador/candidatos')
            SigUp(user,token)
            toast.success('login feito com sucesso')
        }
    
    }else{
        toast.error('email e/ou senha incorretos')
    }
 
}})




   
   
   return <Layout>
    <ContentPage >
      
      <Page>
       <h3>Cadastro  { type !== undefined &&  <span>{`>> ${type}`}</span> } </h3>
       <Text size={'md'}>Preencha os campos com suas informações para criar sua conta:</Text>
       <Container >
         <Form fluid>
              <Form.Group >
                <Form.ControlLabel>Nome</Form.ControlLabel>
                <FormControl placeholder="digite seu nome" type="text" name="name" 
                   value={formik.values.name} onChange={v=>formik.setFieldValue('name',v)} 
                  />
                <Form.ErrorMessage show={!!formik.errors.name}>{formik.errors.name}</Form.ErrorMessage>
              </Form.Group>
              <Form.Group >
                <Form.ControlLabel>Sobrenome</Form.ControlLabel>
                <FormControl type="text"  placeholder="digite seu sobrenome"  name="lastname" 
                  value={formik.values.lastname} onChange={v=>formik.setFieldValue('lastname',v)} 
                />
                <Form.ErrorMessage show={!!formik.errors.lastname}>{formik.errors.lastname}</Form.ErrorMessage>
              </Form.Group>
              <Form.Group >
                <Form.ControlLabel>Email</Form.ControlLabel>
                <FormControl type="email"  placeholder="digite seu email"  name="email" 
                  value={formik.values.email} onChange={v=>formik.setFieldValue('email',v)} 
                />
                <Form.ErrorMessage show={!!formik.errors.email}>{formik.errors.email}</Form.ErrorMessage>
              </Form.Group>
              <Form.Group >
                <Form.ControlLabel>Tel</Form.ControlLabel>
                <FormControl type="tel"  placeholder="digite seu telefone"  name="tel" 
                  value={formik.values.tel} onChange={v=>formik.setFieldValue('tel',v)} 
                />
                <Form.ErrorMessage show={!!formik.errors.tel}>{formik.errors.tel}</Form.ErrorMessage>
              </Form.Group>
              <Form.Group>
                      <FormControlLabel>Senha</FormControlLabel>
                      <InputGroup >
                        <Input value={formik.values.password} type={visible ? 'text' : 'password'} name="password" onChange={v=>formik.setFieldValue('password',v)} />
                        <InputGroup.Button  onClick={()=>setVisible(!visible)}>
                          {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                        </InputGroup.Button>
                    </InputGroup>
                      <Form.ErrorMessage show={!!formik.errors.password}>{formik.errors.password}</Form.ErrorMessage>
              </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Tipo de usuário</Form.ControlLabel>
                 <RadioGroup name="type" inline defaultValue="candidato" color="red" value={formik.values.type} 
                    onChange={v=>formik.setFieldValue('type',v)}
                  >
                 
                  <Radio value="candidato">candidato
                   </Radio>
                  
                   <Radio  value="recrutador">
                    <Text>recrutador</Text>
                   </Radio>
               </RadioGroup>
               <Form.ErrorMessage show={!!formik.errors.type}>{formik.errors.type}</Form.ErrorMessage>
            </Form.Group>
            <HStack justifyContent="center">
              <Button appearance="primary" onClick={formik.submitForm} type='submit' >criar conta</Button>
            </HStack>
            <VStack alignItems="center" style={{margin:'30px 0'}}>
              <HStack><Text>Já tem uma conta?</Text><Link to='/login'>Clique aqui</Link></HStack>
            </VStack>
          </Form>  
        </Container>
       
       {/*<form onSubmit={Formik.handleSubmit} >
  
       <div className="cx-inputs">
          <div className="cx-input">
            <Input type="text" placeholder="Digite seu nome" name="name" value={Formik.values.name} 
              onChange={Formik.handleChange}  
            />
            {Formik.errors.name && <p>{Formik.errors.name}</p>}
          </div>
          <div className="cx-input">
            <Input type="text" placeholder="Digite seu sobrenome" id="lastname" name="lastname" 
                value={Formik.values.lastname} onChange={Formik.handleChange}   
            />
              {Formik.errors.lastname && <p>{Formik.errors.lastname}</p>}
          </div>
          <div className="cx-input">
            <Input type="tel" placeholder="Digite seu telefone" id="tel" name="tel" 
                value={Formik.values.tel} onChange={Formik.handleChange}   
            />
              {Formik.errors.tel && <p>{Formik.errors.tel}</p>}
          </div>
          <div className="cx-input">
              <Input type="email" required placeholder="Digite seu email" id="email"  name="email"
               value={Formik.values.email} onChange={Formik.handleChange}   
              />
                 {Formik.errors.email && <p>{Formik.errors.email}</p>}
          </div>
          <div className="cx-input">
             <Input type="password" placeholder="Digite sua senha" id="password" name="password" 
              value={Formik.values.password} onChange={Formik.handleChange}   
             />
               {Formik.errors.password && <p>{Formik.errors.password}</p>}
          </div>
          <div className="cx-radios">
                <div className="radio-item">
                 <input type="radio" name="type"  checked={radioValue === 'candidato'} value={'candidato'} onChange={handleRadioChange} />
                  <span>sou candidato</span>
                </div>
                <div className="radio-item">
                 <input type="radio" name='type' checked={radioValue === 'recrutador'} value={'recrutador'} onChange={handleRadioChange} />
                  <span>sou recrutador</span>
                </div>
           </div>
          <button type='submit' >criar conta</button>
          <div className="divider"></div>
          <div className="actions">
            <p>Já tem uma conta ?<Link to='/login'>Clique aqui</Link></p>
          </div>
        </div>
       </form>*/}
      </Page>
  </ContentPage>
   </Layout>
}

