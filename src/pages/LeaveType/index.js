import React, { useState } from 'react';
import jsonData from "../../data.json";
const items = jsonData.leaveType;
const User = () => {
  // State variables
  const [users, setUsers] = useState([items]);
  const [newUser, setNewUser] = useState({ name: "", age: "" });

  // Function to handle user creation
  const createUser = () => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const createdUser = { id: newId, name: newUser.name, age: newUser.age };
    setUsers([...users, createdUser]);
    setNewUser({ name: "", age: "" });
  };

  // Function to handle user deletion
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      {/* Form for creating a new user */}
      <h2>Create Leave Type:</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        value={newUser.age}
        onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
      />
      <button onClick={createUser}>Add User</button>

      {/* Displaying the list of users */}
      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;