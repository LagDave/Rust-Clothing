import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";
import { useState, useContext } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import { UserContext } from "../contexts/UserContext";

import "./signin.styles.scss";

const SignIn = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInUserWithGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    signInUserWithEmailAndPassword(email, password)
      .then((user) => {
        resetFormFields();
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") alert("wrong password");
        else alert("Invalid email or password");
      });
  };

  return (
    <div className="signin-form-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          required
        />
        <FormInput
          onChange={handleChange}
          label="Password"
          type="password"
          name="password"
          value={password}
          required
        />

        <div className="signin-button-group">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInUserWithGooglePopup}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
