import React from 'react'

export default function Form(props){
    const {value, update ,submit , disabled, errors} = props

    const onChange = e =>{
        const {name,value,type , checked} = e.target;
        const valueToUse = type === 'checkbox'? checked: value;
        update(name,valueToUse)
    }

     const onSubmit = e =>{
        e.preventDefault()
        submit()
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type='text'
                        name='name'
                        value={value.name}
                        onChange={onChange}
                    />
                </label> 
                <label>Email:
                    <input 
                    type = 'email'
                    name ='email'
                    value = {value.email}
                    onChange={onChange}
                    />
                </label>
                <label>Password: 
                    <input 
                        type ='password'
                        name = 'password'
                        value = {value.password}
                        onChange = {onChange}
                    />
                </label>
                <label>Terms Of Services:
                    <input
                    type ='checkbox'
                    name ='terms'
                    checked = {value.terms}
                    onChange={onChange}
                    />
                    </label> 
               
                    <div className='errors'>
                    {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                    <button disabled={disabled}>Submit</button>
                    </div>
            </form> 
        </div>
    )
}