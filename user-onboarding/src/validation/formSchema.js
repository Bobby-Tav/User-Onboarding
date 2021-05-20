import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string() 
        .trim() 
        
        .min(3, 'name must be 3 characters long'),
        terms: yup
            .boolean('true')
            .required('terms is needed'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
          .string('You need a password')
         .required('It is needed'),
})

export default schema