import './UserBlock.css'
const UserBlock = ({name, email}) => {
  return (
    <div className="userBlockContainer">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <button>Send Funds</button>
    </div>
  )
}

export default UserBlock;