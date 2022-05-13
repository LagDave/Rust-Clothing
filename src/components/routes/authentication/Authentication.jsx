import SignUp from "../../signup/SignUp";
import SignIn from "../../signin/SignIn"
import "./authentication.styles.scss"

const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default Authentication;