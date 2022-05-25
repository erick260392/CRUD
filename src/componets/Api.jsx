import { useState, useEffect } from "react";
import axios from "axios";


function Api() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results[0]));
  }, []);

  console.log(user);

  return (  
    <div className="App">
      <h1>
        {user.name?.title} {user.name?.first} {user.name?.last}
      </h1>
      <img src={user.picture?.large} alt="" />
    </div>
  );
}

export default Api;
