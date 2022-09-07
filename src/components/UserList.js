import './UserList.css';
import UserBlock from './UserBlock';
const UserList = () => {
  const users = [
    { name: 'Kris Bertolino', email: 'kb@gmail.com' },
    { name: 'Kris Bertolino', email: 'kb@gmail.com' },
    { name: 'Kris Bertolino', email: 'kb@gmail.com' },
    { name: 'Kris Bertolino', email: 'kb@gmail.com' },
    { name: 'Kris Bertolino', email: 'kb@gmail.com' },
    { name: 'Kris Bertolino', email: 'kb@gmail.com' },
    { name: 'Kris Bertolino', email: 'kb@gmail.com' },
  ];
  return(
    <div className="userListContainer">
      {users.map(user => {
        return <UserBlock name={user.name} email={user.email}/>
      })}
    </div>
  )
};

export default UserList;
