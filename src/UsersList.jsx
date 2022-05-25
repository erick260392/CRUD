import React from "react";

const UsersList = ({ users, selecteduser, deleteuser }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="box">
          <div className="content">
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <h3>
                    {user.first_name} {user.last_name}
                  </h3>
                  <p>{user.email}</p>
                  <b> {user.birthday}</b>
                  <div className="button_list">
               
                    <button
                      className="edit_button"
                      onClick={() => selecteduser(user)}
                    >
                  <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                     <button
                      className="clear_button"
                      onClick={() => deleteuser(user)}
                    >
                   <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
