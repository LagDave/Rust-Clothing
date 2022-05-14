import { useState } from "react";
import { createUserDocumentFromAuth,createAuthUserWithEmailAndPassword  } from "../../utils/firebase/firebase.utils";
import "./signup.styles.scss"
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const SignUp = () => {

  const { setCurrentUser } = useContext(UserContext)

  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields); 
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword){
      alert('Passwords do not match');
      return;
    }
 
    try{
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, {displayName})
      setCurrentUser(user);
    }catch(e){
      if(e.code === 'auth/email-already-in-use') alert('email already in use!');
    }

    resetFormFields();
    
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className='signup-form-container'>
      <h2>Don't have an account?</h2>
      <span>Signup with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required />
        <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />
        <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required />
        <FormInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp;