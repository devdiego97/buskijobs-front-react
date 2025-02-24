import * as y from 'yup'

export const schemaValidationJobs=y.object().shape({
    title: y.string().trim().min(3).max(100).required('campo obrigatório'),
    salary: y.number().positive().required().test('is-decimal', 'Invalid decimal', value => /^\d+(\.\d{1,2})?$/.test(String(value))),
    description:y.string().trim().min(10,'Minimo 10 caracteres').max(970,'Máximo 970 caracteres').required('campo obrigatório'),
    location: y.string().trim().min(5,'Minimo 5 caracteres').max(50).required('campo obrigatório'),
    benefits: y.string().trim().min(10,'Minimo 10 caracteres').max(950,'Máximo 950 caracteres').required('campo obrigatório'),
    requirements: y.string().trim().min(10,'Minimo 10 caracteres').max(950,'Máximo 950 caracteres').required('campo obrigatório'),
    level: y.string().required('Selecione o nivel de profissional desejado para a vaga'),
    exclusivepcd:y.string().optional(),
    createDate: y.string().required('campo obrigatório'),
    expireDate: y.string().optional().nullable(),
    contractType:y.string().max(100).required('campo obrigatório'),
 })