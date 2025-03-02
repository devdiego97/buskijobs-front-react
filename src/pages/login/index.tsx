
import { useFormik} from "formik"
import { Page } from "./style"
import { toast } from "react-toastify"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
 import { useAuthContext } from "../../context/authContext"
import { Layout } from "../../componentes/Layout"
import { apiAuth } from "../../services/auth.action"
import { Heading,Text, VStack,Form, HStack,Input,Container,
      RadioGroup, Radio, Button, InputGroup, IconButton
} from "rsuite"
import FormGroup from "rsuite/esm/FormGroup"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import FormControl from "rsuite/esm/FormControl"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import { MdOutlineAlternateEmail as Email} from "react-icons/md"
import { MdOutlinePassword as Pass} from "react-icons/md"
import { GlobalStyle } from "../../globalStyle"
import { schemaValidateSigIn } from "../../validations/user.validation"
import useAuthStore from "../../zustand/auth.zustand"





export const Login=()=>{
    const {saveUser,saveToken}=useAuthStore()
    const {SigIn}=useAuthContext()
    const {type}=useParams()
    const navigate=useNavigate()
    const [visible, setVisible] =useState(false)

    useEffect(()=>{
        document.title='MyJobs/Login'
      },[])

    const formik=useFormik(
       { initialValues:{
            email:'',
            password:'',
            type:'candidato'
        },
        validationSchema:schemaValidateSigIn,
        onSubmit:async (values,{resetForm})=>{
           const response=await apiAuth.sigIn(values)
            if(response.data){
                const {user,token}=response.data
                if(user.type === 'candidato'){
                    navigate('/vagas')
                    saveUser(user)
                    saveToken(token)
                    SigIn(user,token)
                    toast.success('login feito com sucesso')
                }else if(user.type === 'recrutador'){
                    navigate('/painel/recrutador')
                    SigIn(user,token)
                }
            
            }else{
                toast.error('email, senha ou tipo de usuário incorreto(s)')
            }
           
        }
    }
    )


    return <Layout>
        <Page>
            

                <Form fluid>
                    <VStack>
                        <Heading  as='h3'>Entrar</Heading>
                        <Text size={'lg'} as='p'>Preencha os campos para entrar na plataforma</Text>
                    </VStack>
                    <Container style={{margin:'10px 0'}}>
                        <FormGroup >
                            <FormControlLabel >
                                <IconButton  appearance="primary" style={{backgroundColor:`${GlobalStyle.bgTheme}`}} icon={<Email fill="orange"/>} /> Email
                            </FormControlLabel>
                            <FormControl name='email' value={formik.values.email} onChange={v=>formik.setFieldValue('email',v)} />
                            <Form.ErrorMessage show={!!formik.errors.email}>{formik.errors.email}</Form.ErrorMessage>
                        </FormGroup>
                        <Form.Group>
                        <FormControlLabel>
                           <IconButton  appearance="primary" style={{backgroundColor:`${GlobalStyle.bgTheme}`}} icon={<Pass fill="orange"/>} /> Senha
                        </FormControlLabel>
                        <InputGroup >
                            <Input value={formik.values.password} type={visible ? 'text' : 'password'} name="password" onChange={v=>formik.setFieldValue('password',v)} />
                                <InputGroup.Button onClick={()=>setVisible(!visible)}>
                                {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                                </InputGroup.Button>
                            </InputGroup>
                        <Form.ErrorMessage show={!!formik.errors.password}>{formik.errors.password}</Form.ErrorMessage>
                    </Form.Group>
                    <Form.Group>
                        <Form.ControlLabel>Tipo de usuário</Form.ControlLabel>
                            <RadioGroup name="type" inline  value={formik.values.type} 
                                onChange={v=>formik.setFieldValue('type',v)}
                            >
                            <Radio checked value="candidato">candidato</Radio>
                            <Radio value="recrutador">recrutador</Radio>
                        </RadioGroup>
                            <Form.ErrorMessage show={!!formik.errors.type}>{formik.errors.type}</Form.ErrorMessage>
                        </Form.Group>
                        <HStack justifyContent="center">
                        <Button appearance="primary" onClick={formik.submitForm} type='submit' >entrar</Button>
                        </HStack>
                        <VStack alignItems="center" style={{margin:'30px 0'}}>
                        <HStack><Text>Não tem uma conta?</Text><Link to='/cadastro'>Clique aqui</Link></HStack>
                        </VStack>
                    </Container>
                </Form>
            
            {/*<Form action="" method="POST" onSubmit={Formik.handleSubmit}  >
                <h2>Entrar</h2>
                <p>Preencha os campos para entrar na sua conta:</p>
                   <div className="inputs">
                        <div className="cx-input">
                            <Input bx={`0 0 3px ${GlobalStyle.bgThemeSecondary}`}  
                            value={Formik.values.email}  name={'email'}
                            onChange={Formik.handleChange}
                            type={'email'}  placeholder={'digite seu email'} p={'16px 22px'} 
                            />
                            {Formik.errors.email && <p>{Formik.errors.email }</p>}
                        </div>
                        <div className="cx-input">
                            <Input bx={`0 0 3px ${GlobalStyle.bgThemeSecondary}`}  
                            value={Formik.values.password}  name={'password'}
                            onChange={Formik.handleChange}
                            type={viewPassword ? 'text' : 'password'} placeholder={'digite sua senha'} p={'16px 22px'} 
                            />
                            {Formik.errors.password && <p>{Formik.errors.password }</p>}
                        </div>
                        <div className="cx-visibility">
                          <small onClick={()=>viewPassword ? setViewPassword(false):setViewPassword(true)} >
                          {viewPassword ? <View /> : <Notview />}
                          {viewPassword? 'esconder senha' : 'ver senha'}
                          </small>
                            </div>
                        <div className="cx-radio">
                        <p>Entrar como: </p>
                        <span>
                        <div className="input-radio">
                            <input type="radio" name="type"  checked={radioValue === 'candidato'} value={'candidato'} onChange={handleRadioChange} />
                                <span>candidato</span>
                            </div>
                            <div className="input-radio">
                            <input type="radio" name='type' checked={radioValue === 'recrutador'} value={'recrutador'} onChange={handleRadioChange} />
                            <span>recrutador</span>
                            </div>
                            <p className="error">{Formik.errors.type}</p>
                        </span>
                    </div>
                    </div>
                    <div className="actions">
                        <input type="submit" value={'Entrar'} />
                    </div>
            </Form>*/}
        </Page>
    </Layout>
    
}