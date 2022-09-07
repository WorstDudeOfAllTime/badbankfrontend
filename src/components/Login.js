import './Login.css'
const Login = () => {
  return(
    <div className="loginContainer flexCent">
      <form className="flexCentCol">
        <input type="email" placeholder="enter your email"></input>
        <input type="password" placeholder="enter your password"></input>
        <button>Submit.</button>
      </form>
    </div>
  )
}

export default Login;