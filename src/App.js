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
  return (
    <div >
      <AddUser/>
      
      <UsersList users={users}/>
    </div>
  );
}

export default App;
