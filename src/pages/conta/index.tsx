import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { BoxCurriculum, NotCurriculum, PDFPage, Page } from "./style"
import { useAuthContext } from "../../context/authContext"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import  Swal from 'sweetalert'
import { toast } from "react-toastify"
import { apiCurriculum } from "../../services/apiCurriculum"
import { ICurriculum } from "../../interfaces/curriculum"
import generatePDF, {  Margin,Options } from 'react-to-pdf'
import { useGlobalContext } from "../../context/globalContext"
import {Card, Divider, Form, HStack, InputGroup, Modal, Tag, Toggle} from "rsuite"
import { baseURL } from "../../config/axios.config"
import Loading from "../../componentes/Loading"
import { GlobalStyle } from "../../globalStyle"
import {  useFormik } from "formik"
import { apiUsers } from "../../services/users.action"
import { schemaValidateUpdateUser } from "../../validations/user.validation"
import Senha from "../../assets/svgs/senha"
import Mail from "../../assets/svgs/mail"
import Phone from "../../assets/svgs/phone"
import {Button,Input,VStack,Text} from 'rsuite'
import FormGroup from "rsuite/esm/FormGroup"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import CheckIcon from '@rsuite/icons/Check'
import CloseIcon from '@rsuite/icons/Close'



export const Conta=()=>{
     const {theme,handleTheme}=useGlobalContext()
     const [visible, setVisible] =useState(false)
     const [open,setOpen]=useState(false)
     const [targetRef,setTargetRef]=useState(null)
     const getTargetElement =()=>document.getElementById('content-id') 
     const {user,setUser,SigOut,setCurriculumContext}=useAuthContext()
     const [curriculum,setCurriculum]=useState<ICurriculum | null>(null)
     const [hasCurriculum,setHasCurriculum]=useState(false)
     const navigate=useNavigate()
    const [loadingCurriculum,setLoadingCurriculum]=useState(true)
    const boxNotRef=useRef<HTMLDivElement | null>(null)

    const [initialValues,setInitialValues]=useState({
      name:user ? user.name : '',
      lastname:user ? user.lastname : '',
      tel:user ? user.tel: '',
      email:user ? user.email : '',
      password:user ? user.password : ''
    })

    const stylePDF:Options = {
        method:'save',
        filename:`${curriculum !== null ? `${curriculum.user?.name}${curriculum.user?.lastname}-curriculo.pdf`: 'curriculo.pdf'}`,
        page: {
          
           margin: Margin.MEDIUM,
           format: 'A4',
           orientation: 'portrait',
        }
    
    }
    const GeneratePDF=()=>{ 
        const box=document.getElementById('content-id')  as HTMLDivElement
        box.style.display='flex'
        generatePDF(getTargetElement,stylePDF)
        box.style.display='none'
    }
    


    useEffect(()=>{
        const getCurriculumUser=async()=>{
          if(user !== null){
                const curriculumId=await apiCurriculum.getCurriculumFromUser(user.id as number)
               if(typeof curriculumId !== 'string'){
                setCurriculum(curriculumId)
                setHasCurriculum(true)
                setCurriculumContext(curriculumId)
                setLoadingCurriculum(false)
                localStorage.setItem('@curri',JSON.stringify(curriculum))
               }else{
                  setHasCurriculum(false)
                  setCurriculumContext(null)
                  setLoadingCurriculum(false)
               }
            }
           
          }
        
  setInterval(() => {
      getCurriculumUser()
      },4000) 
      
    },[])

    useEffect(()=>{
      if(!hasCurriculum && boxNotRef.current){
        boxNotRef.current.style.display='flex' 
      }
    },[hasCurriculum])

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
            SigOut()
            localStorage.clear()
            navigate('/')
            window.location.reload()
         toast.success('você saiu da conta')
        } else {
            console.log(result)
        }
      })


}

const formik=useFormik({
 initialValues:initialValues,
  validationSchema:schemaValidateUpdateUser,
  onSubmit:async (values,{resetForm})=>{
    if(user !== null ){
              const data={
                ...values,
                type:user.type,
                photo:user && user.photo ? user.photo : null
              }
              const result=await apiUsers.updateUser(user.id as number,data)
              if(result){
                setUser({id:user?.id,...data})
                localStorage.setItem('@u',JSON.stringify({id:user?.id,...data}))
                toast.success('Dados atualizado com sucesso')
                setOpen(false)
                setInitialValues({
                  name:data.name,
                  lastname:data.lastname,
                  tel:data.tel,
                  email:data.email,
                  password:data.password
                 })
              }else{
                toast.error('algo deu errado')
              }
          }
          resetForm()
        }
      
     
})


const deleteCurriculumUser=(id:number)=>{
  Swal({
      title:'Tem certeza?',
      text: `Se deletar seu curriculo,todas as suas formações e experiencias,bem como também suas candidaturas serão deletadas.Ainda quer continuar?`,
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
        const deleteCurriculum=async()=>{
          await apiCurriculum.deleteCurriculum(id)
          setCurriculumContext(null)
          setCurriculum(null)
          localStorage.removeItem('@curri')
       }
        deleteCurriculum()
        toast.success('curriculo deletado')
      } else {
          console.log(result)
      }
    })


}

    return <Layout>
     <ContentPage titlePage="">
        <Page>
         <div className="left">
             <Card className="profile">
               <Card className="content">
                       <div className="box-img">
                          <div className="cx-img">
                          {user?.photo !== null && <img src={`${baseURL}public/images/${user?.photo}`}  alt="foto de perfil do recrutador" /> || user?.photo !== '' && <img src={`/public/assets/user.png`}  alt="" />}
                        </div>
                       </div>
                       <h3>{user?.name} {user?.lastname}</h3>
                        <div className="data">
                            <p><Mail />  {user?.email}</p>
                            <p><Phone />{user?.tel}</p>
                            <p><Senha  />**********</p>
                        </div>
                        <div className="cx-btn">
                            <Button appearance="primary" color="blue" block 
                               onClick ={()=>setOpen(true)} >Editar</Button>
                        </div>
                        
                        <VStack justifyContent="center" style={{margin:'20px'}}>
                           <Text>Alterar tema da plataforma:</Text>
                            <div>
                              <Toggle style={{padding:'9px'}} size="md" onChange={()=>handleTheme(theme === 'light' ? 'dark' : 'light')} checkedChildren="light" unCheckedChildren="dark"  />
                            </div>
                        </VStack>
                           
                </Card>
            </Card>
            <Button appearance="default" style={{margin:'30px 0'}} onClick={SigOutUser}>Sair da  conta</Button>
         </div>
         <div className="right">
            {loadingCurriculum && <Loading text="Carregando seu curriculo.." type="bubbles" color={`${GlobalStyle.bgTheme}`} />}
            {!loadingCurriculum &&
                (hasCurriculum && curriculum ) && <Card style={{padding:'22px'}} as={"span"}>
                  <BoxCurriculum ref={boxNotRef}>
                    <div className="top">
                        <span onClick={()=>GeneratePDF()}>Baixar PDF</span>
                        <span onClick={()=>navigate(`/atualizar_curriculo/${curriculum.id}`)}>Editar</span>
                        <span onClick={()=>deleteCurriculumUser(curriculum.id)}>Excluir</span>
                    </div>
                    <Divider></Divider>
                    {curriculum !== null ? <PDFPage ref={targetRef} id="content-id">
                               <div className="data-profile">
                                <div className="top-pdf">
                                    <h2>
                                      <div className="name">{curriculum.user?.name} {curriculum.user?.lastname}</div>
                                      <div className="office">{curriculum.office}</div>
                                    </h2>  
                                    <div className="ctts">
                                      <span><strong>Email</strong>:{curriculum.user?.email}</span>
                                      <span><strong>Telefone </strong>:{curriculum.user?.tel}</span>
                                      {curriculum.linkedin && <span><strong>Linkedin</strong>:{curriculum?.linkedin}</span>}
                                      {curriculum.github && <span><strong>Github</strong>:{curriculum?.github}</span>}
                                    </div>
                                  </div>
                               </div>
                                <section>
                                  <div className= "section about">
                                    <h3>Sobre Mim</h3>
                                    {curriculum?.about}
                                  </div>
                                  <div className= "section skills">
                                    <h3>Habilidades</h3>
                                      <ul>
                                       {curriculum.skills?.map((s,k)=><li  key={k}>-{s.name}</li>)}
                                    </ul>
                                  </div>
                                  <div className= "section cursos">
                                    <h3>Formação</h3>
                                    <ul>
                                      {curriculum?.trainnings?.map((t,k)=>(
                                         <Card className="curso" key={k}>
                                          <div className="title">{t?.name}-{t?.school}</div>
                                          <Tag >{t.start?.split('/').reverse().join('/')} - {t.end?.split('/').reverse().join('/')}</Tag>
                                         </Card>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className= "section experiencia">
                                    <h3>Experiência Profissional</h3>
                                    <ul>
                                      {curriculum.experiences?.map((xp,k)=>(
                                         <Card className="curso" key={k}>
                                          <div className="title">{xp?.office}-{xp?.companyname}</div>
                                          <p>{xp.about}</p>
                                          <span>{xp.start?.split('/').reverse().join('/')} - {xp.end?.split('/').reverse().join('/')}</span>
                                         </Card>
                                      ))}
                                    </ul>
                                  </div>
                                </section>
                           </PDFPage> : null
                        }

                     <div className="header">
                        <h2>{curriculum?.name} {curriculum?.lastname}</h2>
                        <div className="info">
                            <span>Email:{curriculum?.email}</span>
                            <span>Telefone(celular):{curriculum?.tel}</span>
                            <span>{curriculum?.city} - {curriculum?.state}</span>
                            {curriculum.linkedin && <span><strong>Linkedin</strong>:{curriculum?.linkedin}</span>}
                              {curriculum.github && <span><strong>Github</strong>:{curriculum?.github}</span>}
                        </div>
                    </div>
                    <section>
                        <h4>Sobre Mim</h4>
                        <p>{curriculum?.about}</p>
                    </section>
                    <section>
                        <h4>Habilidades</h4>
                        <ul className="data">
                          {curriculum?.skills && curriculum?.skills?.map((s,k)=> <li key={k}>{s.name}</li>)}
                        </ul>
                    </section>
                    <section>
                        <h4>Formação</h4>
                       {
                        curriculum !== null && curriculum.trainnings ?
                        <div className="data">
                            {
                                curriculum.trainnings.map((t,k)=>(
                                    <div className="card" key={k}>
                                    <p className="title">{t.name}</p>
                                    <p>{t.school}</p>
                                    <p>{t.start} - {t.end !== null && t.end}</p>
                                </div>
                                ))
                            }
                        </div>

                        : <div>Nenhuma formação</div>
                       }
                        
                    </section>
                    <section>
                        <h4>Experiência Profissional</h4>
                        {
                        curriculum !== null && curriculum.experiences ?
                        <div className="data">
                            {
                                curriculum.experiences.map((e,k)=>(
                                    <div className="card" key={k}>
                                    <p className="title">{e.office}</p>
                                    <p>{e.companyname}</p>
                                    <p>{e.start}  -  {e.end !== null && e.end}</p>
                                </div>
                                ))
                            }
                        </div>

                        : <div>Nenhuma formação</div>
                       }
                    </section>
          
                </BoxCurriculum> 
                </Card>
            }
             {(!hasCurriculum && !loadingCurriculum) && <NotCurriculum>
               <div className="box">
                   <div className="text">
                        <h3>Olá {user?.name}</h3>
                        <p>Para se candidatar á vagas crie o seu curriculo</p>
                        <Link to={'/criar_curriculo'}>clique Aqui</Link>
                    </div>
               </div>
            </NotCurriculum>
            }
         </div>
   

         <Modal open={open} size={"md"} >
              <Modal.Header closeButton={false} >
                <Modal.Title>Atualize seus dados de usuário</Modal.Title>
                <Divider />
              </Modal.Header>
              <Modal.Body>
                <Form fluid>
                  <FormGroup>
                      <FormControlLabel>Nome</FormControlLabel>
                      <Input type="text" value={formik.values.name} onChange={v=>formik.setFieldValue('name',v)} />
                      <Form.ErrorMessage show={!!formik.errors.name}>{formik.errors.name}</Form.ErrorMessage>
                  </FormGroup>
                  <FormGroup>
                      <FormControlLabel>Sobrenome</FormControlLabel>
                      <Input type="text" value={formik.values.lastname} onChange={v=>formik.setFieldValue('lastname',v)} />
                      <Form.ErrorMessage show={!!formik.errors.lastname}>{formik.errors.lastname}</Form.ErrorMessage>
                  </FormGroup>
                  <FormGroup>
                      <FormControlLabel>Email</FormControlLabel>
                      <Input type="email" value={formik.values.email} onChange={v=>formik.setFieldValue('email',v)} />
                      <Form.ErrorMessage show={!!formik.errors.email}>{formik.errors.email}</Form.ErrorMessage>
                  </FormGroup>
                  <FormGroup>
                      <FormControlLabel>Telefone</FormControlLabel>
                      <Input type="tel" value={formik.values.tel} onChange={v=>formik.setFieldValue('tel',v)} />
                      <Form.ErrorMessage show={!!formik.errors.tel}>{formik.errors.tel}</Form.ErrorMessage>
                  </FormGroup>
                  <FormGroup>
                      <FormControlLabel>Senha</FormControlLabel>
                      <InputGroup >
                        <Input value={formik.values.password} type={visible ? 'text' : 'password'} name="password" onChange={v=>formik.setFieldValue('password',v)} />
                        <InputGroup.Button onClick={()=>setVisible(!visible)}>
                          {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                        </InputGroup.Button>
                    </InputGroup>
                      <Form.ErrorMessage show={!!formik.errors.password}>{formik.errors.password}</Form.ErrorMessage>
                  </FormGroup>
                  
                </Form>
              </Modal.Body>
              <Modal.Footer >
                  <Button onClick={formik.submitForm} appearance="primary" type="submit" color="blue" >atualizar</Button>
                  <Button disabled={!formik.isValid ? true : false} appearance="default" onClick={()=>setOpen(false)} >fechar</Button>
              </Modal.Footer>
          </Modal>
        </Page>
     </ContentPage>
    </Layout>
}