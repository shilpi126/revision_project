import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
const users = [
  {id:1,
    name: "Max",
   age:30
  },
  {
    id:2,
    name: "Ram",
   age:40
  },
  {id:3,
   name: "Shayam",
   age:20
  },
  {id:4,
   name: "Krishna",
   age:35
  }
]
function App() {
  const [userList, setUserList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
      setUserList((prevUsersList) => {
        return [...prevUsersList, {name:uName, age:uAge, id:Math.random()}]
      })
  }

  return (
    <div >
      <AddUser onAddUser={addUserHandler}/>

      <UsersList users={userList}/>
    </div>
  );
}

export default App;
