import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
import Error from './Error';
const Person = () => {
  const [name, setName] = useState('default name');
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    if(newPerson) {
      setName(newPerson.name);
    } else {
      setIsError(true);
    }
  }, []);

  if(isError) {
    return <Error />
  }
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back To People
      </Link>
    </div>
  );
};

export default Person;
