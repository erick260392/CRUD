
import './App.css'
import UsersList from "./UsersList";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UsersForms from "./UsersForms";





function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setuserSelectec] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getusers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const deleteuser = (users) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${users.id}/`)
      .then(() => getusers());
  };

  const selecteduser = (user) => setuserSelectec(user);
  const deselectuser = () => setuserSelectec(null);






  return (
    <div className="App">

 
 <UsersForms
        deselectuser={deselectuser}
        userSelected={userSelected}
        getusers={getusers}
      />
      <UsersList
        deleteuser={deleteuser}
        selecteduser={selecteduser}
        users={users}
      ></UsersList>
 
   
   



     
    </div>
  );
}

export default App;


