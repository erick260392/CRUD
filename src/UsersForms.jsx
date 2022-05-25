import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UsersForms({ getusers, userSelected, deselectuser }) {
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpasssword] = useState("");
  const [birthday, setbirthday] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      setname(userSelected.first_name);
      setlastname(userSelected.last_name);
      setemail(userSelected.email);
      setpasssword(userSelected.password);
      setbirthday(userSelected.birthday);
    }
  }, [userSelected]);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      first_name: name,
      last_name: lastname,
      email: email,
      password: password,
      birthday: birthday
    };
    if (userSelected !== null) {
      alert("editando");
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          user
        )
        .then(() => {
          getusers();
          deselectuser();
        });
    } else {
      axios.post('https://users-crud1.herokuapp.com/users/', user)
        then(() => getusers());
      console.log(user);
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <div className="form-group">
                <label htmlFor="name">name </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                />

                <label htmlFor="lastname">last name </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setlastname(e.target.value)}
                  value={lastname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setpasssword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="form-group form-check">
                <label className="form-check-label" htmlFor="birthday">
                  birthday
                </label>
                <input
                  type="date"
                  className="form-check-input"
                  id="birthday"
                  onChange={(e) => setbirthday(e.target.value)}
                  value={birthday}
                />
                <button type="submit" className="btn btn-primary">
                  upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
