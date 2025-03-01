import { useFormik } from "formik"
import { Painel } from "../../../componentes/Painel"
import { Button, Form, HStack, IconButton, Input, Uploader } from "rsuite"
import { ChangeEvent, useEffect, useState } from "react"
import { companyValidation } from "../../../validations/company.validation"
import { useAuthContext } from "../../../context/authContext"
import apiCompany, { TCompany } from "../../../services/apiCompany"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../../context/globalContext"
import { ICompany} from "../../../interfaces/company"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import { Page } from "./style"
import {Text} from "rsuite"
import CameraRetroIcon from '@rsuite/icons/legacy/CameraRetro'
import { Editor } from 'primereact/editor'
import type { EditorTextChangeEvent } from 'primereact/editor'
import Quill from 'quill'





export default ()=>{
  const [textAbout,setTextAbout]=useState('')
  const [companyId,setCompanyId]=useState<ICompany | null>({} as ICompany)
  const {user,company}=useAuthContext()
  const {handleStateModal}=useGlobalContext()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(companyId?.logo as string)
  const [textVisible, setTextVisible] = useState(true);
  const [loading,setLoading]=useState(false)
  const [errorImage,setErrorImage]=useState(false)
  const navigate=useNavigate()




  useEffect(()=>{
    if(loading){
      handleStateModal(true)
    }else{
      handleStateModal(false)
    }
  },[loading])


  useEffect(()=>{
    const getCompany=async()=>{
       if(user){
         const response=await apiCompany.getCompanyFromUser(user.id as number) as ICompany
          if(response.id){
            console.log(response)
            setCompanyId(response)
          }else{
            setCompanyId(null)
            console.log(response)
          }
         
        }
     }
  
     getCompany()
     console.log(companyId)
 },[])



const handleTextChangeAbout = (event: EditorTextChangeEvent) => {
  setTextAbout(event.htmlValue as string)
}

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setTextVisible(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setTextVisible(true);
  };



  const Formik=useFormik({
    initialValues:{
      ...companyId
    },
    validationSchema:companyValidation,
    onSubmit:async(values,{resetForm})=>{
    /*
  const formData = new FormData();
        if(selectedFile){
          formData.append('logo',selectedFile)
          formData.append('name',values.name)
          formData.append('email',values.email)
          formData.append('cnpj',values.cnpj)
          formData.append('tel',values.tel)
          formData.append('instagram',values.instagram)
          formData.append('linkedin',values.linkedin)
          formData.append('site',values.site)
          formData.append('city',values.city)
          formData.append('state',values.state)
          formData.append('about',values.about)  
          formData.append('idcreator',String(user?.id as number))
        }
     
      const data:TCompany = {
        idcreator: Number(formData.get('idcreator')),
        name: formData.get('name') as string,
        logo: formData.get('logo') as string | File,
        about: formData.get('about') as string,
        site: formData.get('site') as string,
        linkedin: formData.get('linkedin') as string,
        instagram: formData.get('instagram') as string,
        email: formData.get('email') as string,
        cnpj: formData.get('cnpj') as string,
        state: formData.get('state') as string,
        tel: formData.get('tel') as string,
        city: formData.get('city') as string,
      
      };
        const newCompany=await apiCompany.createCompanyFromUser(data)
        //navigate('/painel/recrutador/sobre-empresa')
        toast.success('Empresa criada com sucesso')
        console.log(newCompany)
        resetForm()
    }

    */
  }
  })
  





  
    return <Painel>
          <Page style={{ margin:'90px 0' }}>
            <div className="content">
              <Form>
                <Text as={"h3"} style={{margin:'50px 0'}}>Atualize dados da empresa</Text>
                <Form.Group>
                    <FormControlLabel >Logo da Empresa</FormControlLabel>
                    <Uploader multiple={false} listType="picture" action="//jsonplaceholder.typicode.com/posts/">
                      <IconButton icon={<CameraRetroIcon/>}/>
                      </Uploader>
                </Form.Group>
                <Form.Group>
                    <FormControlLabel >Nome da Empresa</FormControlLabel>
                  <Input name="company" />
                  <Form.ErrorMessage></Form.ErrorMessage>
                </Form.Group>
                <Form.Group>
                    <FormControlLabel>Email</FormControlLabel>
                  <Input name="company" />
                  <Form.ErrorMessage></Form.ErrorMessage>
                </Form.Group>
                <Form.Group>
                    <FormControlLabel>Telefone</FormControlLabel>
                  <Input name="company" />
                  <Form.ErrorMessage></Form.ErrorMessage>
                  <Form.Group>
                    <FormControlLabel>Site</FormControlLabel>
                    <Input name="company" />
                    <Form.ErrorMessage></Form.ErrorMessage>
                </Form.Group>
                <Form.Group>
                    <FormControlLabel>Linkedin</FormControlLabel>
                  <Input name="company" />
                  <Form.ErrorMessage></Form.ErrorMessage>
                </Form.Group>
                </Form.Group>
                <Form.Group>
                    <FormControlLabel>CNPJ</FormControlLabel>
                  <Input name="company" />
                  <Form.ErrorMessage></Form.ErrorMessage>
                </Form.Group>
                 <Form.Group>
                    <FormControlLabel as ='strong'>Sobre a Empresa</FormControlLabel>
                      <Input as='textarea' rows={30} />
                    <Form.ErrorMessage></Form.ErrorMessage>
                </Form.Group>
                <HStack justifyContent="center">
                  <Button size="lg" block appearance="primary" 
                       color="blue">Atualizar
                   </Button>
                </HStack>
              </Form>
            </div>
          </Page>
      
    </Painel>
}