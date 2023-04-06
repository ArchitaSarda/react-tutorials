import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getUserData = async () => {
    setLoading(true);
    await fetch(url).then(async (response) => {
      setLoading(false);
      if(response.status >= 200 && response.status <= 299) {
        const userData = await response.json();
        setUser(userData);
      } else {
        setIsError(true);
        throw new Error(response.statusText);
      }
    })
    .catch((error) => {
      setIsError(true);
      console.log(error);
    })
  }

  useEffect(() => {
    getUserData();
  },[])

  if(loading)
    return <h1>Loading...</h1>
  
  if(isError)
    return <h1>Got error</h1>
  
  return (
    <h1>{user.name}</h1>
  )
};

export default MultipleReturns;
