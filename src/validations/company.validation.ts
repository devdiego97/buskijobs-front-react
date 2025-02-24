import * as y from 'yup'

export const companyValidation=y.object().shape({
 
    about:y.string().min(50,'minimo 50 caracteres').required('Campo obrigatorio'),
    cnpj:y.string().required('campo obrigatório').matches(/^\d{14}$/,'formato inválido,remova pontos, traços ou barras'),
    instagram:y.string().nullable().optional(),
    site:y.string().min(5,'minimo 5 caracteres').nullable().optional(),
    linkedin:y.string().nullable().optional(),
    city:y.string().min(5,'minimo 5 caracteres').required('campo obrigatório'),
    state:y.string().max(2,'máximo 2 caracteres').required('campo obrigatório'),
    name: y.string().min(5,'minimo 5 caracteres').max(50,'máximo 50 caracteres').required('Campo obrigatorio'),
    tel: y.string().required('Campo obrigatorio').matches(/^[0-9]{2}9[0-9]{8}$/,'telefone inválido'),
    email: y.string().email('email inválido').required('Campo obrigatorio'),
  })