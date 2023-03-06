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
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      placeholder: "Fist name",
      type: "text",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      label: "Last Name",
      errorMessage: "It should be a valid email address!",
      placeholder: "Last name",
      type: "text",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      label: "Date of Birth",
      type: "date",
    },
    {
      id: 4,
      name: "cpf",
      label: "CPF",
      errorMessage: "Invalid format.",
      pattern: "[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}",
      placeholder: "000.000.000-00",
      type: "text",
      required: true,
    },
    {
      id: 5,
      name: "password",
      label: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      placeholder: "Senha",
      type: "password",
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      label: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      placeholder: "Senha",
      type: "password",
      required: true,
    }
  ]

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='app'>
      <form onSubmit={onSubmit}>
        <h1>Register</h1>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}>
          </FormInput>
        ))
        }
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default App;
