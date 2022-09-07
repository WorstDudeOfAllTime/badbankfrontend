import './CreateAccount.css'
const CreateAccount = () =>{
  return (
    <div className="createAccountContainer flexCent">
      <form className="accountForm flexCentCol">
      <h1>Create an Account</h1>
        <input type="name" placeholder="Enter your Name"></input>
        <input type="email" placeholder="Enter your Email"></input>
        <input type="password" placeholder="Enter your Password"></input>
        <button> Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount;