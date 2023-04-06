import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = useState(data);

  const dataJsx = people.map(person => {
    const {id, name} = person;
    return (
      <div key={id} className='item'>
        <h4>{name}</h4>
        <button onClick={() => removeItem(id)}>
          Remove item
        </button>
      </div>
    )
  })

  const removeItem = id => {
    const filteredPeople = people.filter(person => person.id !== id);
    setPeople(filteredPeople);
  }
  
  return <>
    {dataJsx}
    <button type='button' className='btn' onClick={() => setPeople([])}>
      Clear items
    </button>
    <button type='button' className='btn' onClick={() => setPeople(data)}>
      Add all items
    </button>
  </>;
};

export default UseStateArray;
