import * as y from 'yup'

export const schemaValidationExperience=y.object().shape({
office:y.string().trim().min(4,'minimo 4 caracteres').max(30,'máximo 20 caracteres').required('campo obrigátorio'),
companyname:y.string().trim().min(4,'minimo 4 caracteres').min(4).max(30,'máximo 20 caracteres').required('campo obrigátorio'),
end:y.string().trim().max(30,'máximo 20 caracteres').required('campo obrigátorio'),
start:y.string().trim().max(30,'máximo 20 caracteres').required('campo obrigátorio'),
active:y.string().required('campo obrigátorio'),
about:y.string().trim().max(350,'máximo 350  caracteres').required('campo obrigátorio'),
})