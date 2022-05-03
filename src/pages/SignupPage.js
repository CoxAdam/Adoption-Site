import authAPI from "../api/authAPI";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate()

  const handleSignup = async (evt) => {
    evt.preventDefault()

    let signupData = {
        username: evt.target.elements["username"].value,
        password: evt.target.elements["password"].value,
    }
    localStorage.setItem('username', signupData.username)

    const data = await authAPI.signup(signupData)
    if (data) {
      navigate("/")
    }
  }

  return (
    <div>
      <h2>Signup Page</h2>
      <br/>

      <form onSubmit={ handleSignup } method="POST">
        <label>Username: </label>
        <input type="text" name="username" placeholder="enter username"/>
        <br/>
        <label>Password: </label>
        <input type="password" name="password" placeholder="enter password"/>
        <br/>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default SignupPage