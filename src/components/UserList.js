import React, { useState, useEffect } from 'react';

import './UserList.css';

import api from '../services/api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
        const response = await api.get('/users');

        setUsers(response.data);
    }

    loadUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <User 
            key={user.id}
            user={user}
        />
      ))}
    </div>
  );
}

export function User({ user }) {
    return(
        <div className="user">
            <img src={user.img} alt="user_avatar" />
            <div>
                <strong>{user.name}</strong>
                <div>
                    <span>id: {user.id}</span><span>{user.username}</span>
                </div>
            </div>
        </div>  
    );
}

export default UserList;
