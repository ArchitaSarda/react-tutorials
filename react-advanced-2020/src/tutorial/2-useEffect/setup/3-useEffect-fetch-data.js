import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const userData = await response.json();
    setUsers(userData);
  }

  useEffect(() => {
    getUsers();
  },[])

  const UserList = () => {
    const userJsx = users.map(user => {
      const {id, login, avatar_url, html_url} = user;
      return <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url}>profile</a>
        </div>
      </li>
    });

    return (
      <ul className='users'>
        {userJsx}
      </ul>
    )
  }

  return <>
    <h3>Github users</h3>
    <UserList />
  </>;
};

export default UseEffectFetchData;
