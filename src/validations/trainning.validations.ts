import * as y from 'yup'

export const schemaValidationTrainnning=y.object().shape({
name:y.string().trim().min(4,'minimo 4 caracteres').max(30,'máximo 20 caracteres').required('campo obrigátorio'),
school:y.string().trim().min(4,'minimo 4 caracteres').min(4).max(30,'máximo 20 caracteres').required('campo obrigátorio'),
end:y.string().trim().max(30,'máximo 20 caracteres').required('campo obrigátorio'),
start:y.string().trim().max(30,'máximo 20 caracteres').required('campo obrigátorio'),
active:y.string().max(30,'máximo 20 caracteres').required('campo obrigátorio'),
type:y.string().trim().max(30,'máximo 20 caracteres').required('campo obrigátorio'),
})