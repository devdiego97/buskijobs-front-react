import { useFormik } from "formik"
import { Painel } from "../../../componentes/Painel"
import { Button, Form, HStack, IconButton, Input, Loader, Modal, Uploader, VStack } from "rsuite"
import { ChangeEvent, useEffect, useState } from "react"
import { companyValidation } from "../../../validations/company.validation"
import { useAuthContext } from "../../../context/authContext"
import apiCompany, { TCompany } from "../../../services/apiCompany"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../../context/globalContext"
import { ICompany } from "../../../interfaces/company"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import { Page } from "./style"
import {Text} from "rsuite"
import CameraRetroIcon from '@rsuite/icons/legacy/CameraRetro';
import { toast } from "react-toastify"
import linkedin from "../../../assets/svgs/linkedin"
import FormControl from "rsuite/esm/FormControl"
import {  Message,useToaster } from 'rsuite';
import BuildingIcon from '@rsuite/icons/legacy/Building'; // Ícone de empresa
import { FaCamera } from "react-icons/fa";



export default ()=>{
  const toaster = useToaster();
  const [uploading, setUploading]=useState<boolean>(false);
  const [fileInfo, setFileInfo] = useState<string | null>(null);

  const [open,setOpen]=useState(false)
  const [companyId,setCompanyId]=useState<ICompany | null>({} as ICompany)
  const {user,company}=useAuthContext()
  const {handleStateModal}=useGlobalContext()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(companyId?.logo as string)
  const [loading,setLoading]=useState(false)
  const [errorImage,setErrorImage]=useState(false)
  const navigate=useNavigate()

  type PreviewFileCallback = (result: string | ArrayBuffer | null) => void;

const  previewFile=(file: File, callback: PreviewFileCallback)=>{
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  }

  

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








  const formik=useFormik({
    initialValues:{
     name:'',
     email:'',
     tel:'',
     instagram:'',
     linkedin:'',
     city:'',
     state:'',
    cnpj:'',
    about:'',
    site:'',



    },
    validationSchema:companyValidation,
    onSubmit:async(values,{resetForm})=>{

  /*const formData = new FormData();
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
        toast.success('Empresa criada com sucesso')
        console.log(newCompany)
        resetForm()
    }
*/
      console.log(values.name)
     setOpen(true)
    }
      
})
  

    return <Painel>
          <Page>
            <div className="content">
              <Form fluid>
                <Text as={"h3"} style={{margin:'50px 0'}}>Atualize dados da empresa</Text>
                <Form.Group className="stack">
                    <FormControlLabel as='strong'>Logo da Empresa</FormControlLabel>
                      <Uploader listType="picture" action={""}>
                        <button>
                          <FaCamera size="1rem" />
                        </button>
                      </Uploader>
     
                </Form.Group>
                <Form.Group className="stack">
                    <FormControlLabel as='strong'>Nome da Empresa</FormControlLabel>
                    <FormControl name="name" onChange={v=>formik.setFieldValue('name',v)} 
                       placeholder="digite o nome da empresa"  value={formik.values.name}
                      />
                    <Form.ErrorMessage placement="rightEnd" className="msg-error" show={!!formik.errors.name}>{formik.errors.name}</Form.ErrorMessage>
                </Form.Group>
                <Form.Group>
                    <FormControlLabel as={'strong'}>Email</FormControlLabel>
                    <FormControl  name="email" placeholder="empresa@gmail.com" type="email" 
                      onChange={v=>formik.setFieldValue('email',v)} 
                      value={formik.values.email} 
                    />
                  <Form.ErrorMessage   placement="rightEnd" className="msg-error"  show={!!formik.errors.email}>{formik.errors.email}</Form.ErrorMessage>
                </Form.Group>
                <Form.Group>
                    <FormControlLabel as='strong'>Telefone</FormControlLabel>
                    <FormControl name="tel" placeholder="00000000000" type="tel" 
                    onChange={v=>formik.setFieldValue('tel',v)}  value={formik.values.tel} 
                    />
                  <Form.ErrorMessage   placement="rightEnd" className="msg-error" show={!!formik.errors.tel}>{formik.errors.tel}</Form.ErrorMessage>
                </Form.Group>
                <Form.Group>
                    <FormControlLabel as='strong'>Site</FormControlLabel>
                    <Input name="site" type="url" placeholder="digite a url do site da empresa" 
                       onChange={v=>formik.setFieldValue('site',v)}  value={formik.values.site}
                     />
                    <Form.ErrorMessage  placement="rightEnd" className="msg-error" show={!!formik.errors.site}>{formik.errors.site}</Form.ErrorMessage>
                </Form.Group>
                <Form.Group>
                    <FormControlLabel as='strong'>Linkedin</FormControlLabel>
                    <FormControl name="linkedin" placeholder="digite a url do linkedin da empresa"  type="url" 
                       onChange={v=>formik.setFieldValue('linkedin',v)}  value={formik.values.linkedin} 
                    />
                    <Form.ErrorMessage  placement="rightEnd" className="msg-error" show={!!formik.errors.site}>{formik.errors.site}</Form.ErrorMessage>
                </Form.Group>
               
                <Form.Group>
                    <FormControlLabel as='strong'>CNPJ</FormControlLabel>
                  <FormControl name="cnpj" pattern="/^\d{14}$/" type="number" placeholder="digite o cnpj da empresa" onChange={v=>formik.setFieldValue('cnpj',v)}  value={formik.values.cnpj} />
                  <Form.ErrorMessage  placement="rightEnd" className="msg-error" show={!!formik.errors.cnpj}>{formik.errors.cnpj}</Form.ErrorMessage>
                </Form.Group>
                 <Form.Group>
                    <FormControlLabel as='strong'>Sobre a Empresa</FormControlLabel>
                    <Input  as={"textarea"} rows={15} style={{resize:"none"}} placeholder="Fale sobre a empresa ..." onChange={v=>formik.setFieldValue('about',v)}  value={formik.values.about}  />
                  <Form.ErrorMessage  placement="rightEnd" className="msg-error"  show={!!formik.errors.about}>{formik.errors.about}</Form.ErrorMessage>
                </Form.Group>
                <HStack justifyContent="center" alignItems="center">
                  <Button type="submit" appearance="primary" style={{width:'50%'}} size="lg" onClick={formik.submitForm}>enviar</Button>
                </HStack>
              </Form>
            </div>
          </Page>
      <Modal open={open}>
        <VStack>
          <Loader color="green" size="lg" content="Large" />
          <Text>enviando informações...</Text>
        </VStack>
      </Modal>
    </Painel>
}