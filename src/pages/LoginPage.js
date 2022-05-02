import authAPI from "../api/authAPI";
import { useNavigate } from "react-router-dom";
import { useUpdateUsername } from "../components/UserContext";

function LoginPage() {
  const updateUsername = useUpdateUsername()
  const navigate = useNavigate()

  const handleLogin = async (evt) => {
    evt.preventDefault()

    let loginData = {
        username: evt.target.elements["username"].value,
        password: evt.target.elements["password"].value,
    }
    console.log("LOGIN INFO:", loginData)

    const data = await authAPI.login(loginData)
    if (data) {
      console.log(data)
      localStorage.setItem('username', data.username)
      updateUsername(data.username)
      navigate("/")
    }
  }

  return (
    <div>
      <h2>Login Page</h2>
      <br/>

      <form onSubmit={ handleLogin } method="POST">
        <label>Username: </label>
        <input type="text" name="username" placeholder="enter username"/>
        <br/>
        <label>Password: </label>
        <input type="password" name="password" placeholder="enter password"/>
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage