import './App.css';
import { useState } from 'react';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: "firstName",
      label: "First Name",
      errorMessage: "Error",
      placeholder: "Fist name",
      type: "text",
    },
    {
      id: 2,
      name: "lastName",
      label: "Last Name",
      errorMessage: "Error",
      placeholder: "Last name",
      type: "text",
    },
    {
      id: 3,
      name: "birthday",
      label: "Last Name",
      type: "date",
    },
    {
      id: 4,
      name: "cpf",
      label: "CPF",
      errorMessage: "Error",
      placeholder: "CPF",
      type: "text",
    },
    {
      id: 5,
      name: "password",
      label: "Password",
      errorMessage: "Error",
      placeholder: "senha",
      type: "password",
    },
    {
      id: 6,
      name: "confirmPassword",
      label: "Confirm Password",
      errorMessage: "Error",
      placeholder: "senha",
      type: "password",
    }
  ]

  console.log(values)

  function onChange(e){
    setValues({...values, [e.target.name]: e.target.value })
  }

  function onSubmit(e){
    e.preventDefault();
  }

  return (
    <div className='app'>
      <form onSubmit={onSubmit}>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}>
          </FormInput>
          ))
        }

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
