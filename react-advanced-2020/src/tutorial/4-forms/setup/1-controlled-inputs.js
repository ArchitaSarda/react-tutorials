import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [userList, setUserList] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    setUserList(
      (prevUserList) => [
        ...prevUserList, 
        {'firstName': firstName, 'email': email, id: new Date().getTime().toString()}
      ]
    )
    setFirstName('');
    setEmail('');
  }

  return <>
    <article>
      <form className='form' onSubmit={formSubmit}>
        <div className='form-control'>
          <label htmlFor="firstName">Name: </label>
          <input 
            type="text" 
            id='firstName' 
            name='First name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor="email">Email: </label>
          <input 
            type="email" 
            id='email' 
            name='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type='submit'>
          Add person
        </button>
      </form>
      {userList.length > 0 && <UserList userList={userList}/>}
    </article>
  </>;
};

const UserList = ({userList}) => {
  const userListJsx = userList.map(user => (
    <li key={user.id} className='item'>
      <h4>{user.firstName}</h4>
      <p>{user.email}</p>
    </li>
  ))
  return <ul>
    {userListJsx}
  </ul>
}

export default ControlledInputs;
