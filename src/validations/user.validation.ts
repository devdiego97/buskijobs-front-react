import * as y from 'yup'

export const schemaValidateUser=y.object().shape(  
    {
        name: y.string().min(3).max(30,'Máximo 30 caracteres').required('Campo obrigatório'),
        lastname: y.string().min(3).max(30,'Máximo 30 caracteres').required('Campo obrigatório'),
       tel: y.string().max(11)
        .matches(/^[0-9]{2}9[0-9]{8}$/, 'Número de telefone inválido')
        .required('Campo obrigatório'),
       type: y.string().min(5).max(10).required('Campo obrigatório'),
       email: y.string().email('email inválido').required('Campo obrigatório'),
       password: y.string().min(11,'senha deve ter no minimo 11 caracteres').max(20,'senha deve ter no máximo 20 caracteres').matches(/^[a-zA-Z0-9]{3,20}$/, 'Senha inválida').required('Campo obrigatório'),
      }
    )
    
    export const schemaValidateUpdateUser=y.object().shape(  
      {
          name: y.string().min(3,'o campo deve ter no minimo 3 caracteres')
          .max(30,'Máximo 30 caracteres').required('Campo obrigatório'),
          lastname: y.string().min(3,'o campo deve ter no minimo 3 caracteres')
          .max(30,'Máximo 30 caracteres').required('Campo obrigatório'),
         tel: y.string().max(11)
          .matches(/^[0-9]{2}9[0-9]{8}$/, 'Número de telefone inválido')
          .required('Campo obrigatório'),
         email: y.string().email('email inválido').required('Campo obrigatório'),
         password: y.string().min(11,'senha deve ter no minimo 11 caracteres')
         .max(20,'senha deve ter no máximo 20 caracteres').matches(/^[a-zA-Z0-9]{3,20}$/, 'Senha inválida').required('Campo obrigatório'),
        }
      )
export const schemaValidateSigIn=y.object().shape(  
  {
      type: y.string().min(5).required('campo obrigatório'),
      email: y.string().email('email inválido').required('campo obrigatório'),
      password: y.string().min(11,'senha deve ter no minimo 11 caracteres').max(20,'senha deve ter no máximo 20 caracteres')
      .matches(/^[a-zA-Z0-9]{3,20}$/, 'Senha inválida').required('campo obrigatório')
    }
  )