import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup'
import schema from './validation/formSchema';
import './App.css';

const initialFormValues = {
  name:'', email:'',password:'', terms: false,
}
const initialFormErrors = {
  name:'', email:'', password:'',terms:'',
}

const initialUsers = [];
const initialDisabled = true;

function App() {
  //State
  const [users,setUsers] = useState(initialUsers)
  const [disabled,setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues,setFormValues] = useState(initialFormValues)

  //Helper Function
  // const getUsers= () => {
  //   axios.get('https://reqres.in/api/users')
  //     .then(res => {
  //       setUsers(res.data)
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  const postNewUser = (newUser) =>{
    axios.post('https://reqres.in/api/users',newUser)
    .then(res =>{ 
    setUsers([res.data, ...users])
    console.log(users)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() =>
      setFormValues(initialFormValues)
    )
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  //EventHandler 
  const change = (name, value) =>{
    validate(name,value)
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () =>{
    const newUser = {
      name: formValues.name.trim() ,
      email: formValues.email.trim() ,
      password: formValues.password.trim(),
      terms: formValues.terms ,
    }
    postNewUser(newUser);
  }

  //Side Effects

  
  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  
  return (
    <div className="App">
      <Form value={formValues} update={change} submit={formSubmit} disabled={disabled} errors={formErrors} />
    </div>
  )
}

export default App;
