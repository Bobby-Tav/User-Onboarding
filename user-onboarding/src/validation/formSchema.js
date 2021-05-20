import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string() 
        .trim() 
        .required('name is required')
        .min(3, 'name must be 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
          .string('You need a password')
         .required('It is needed'),
    terms: yup
         .boolean() 
         .required('Tos is needed'),
})

export default schema