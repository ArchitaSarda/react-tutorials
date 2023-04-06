import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {

  const [list,setList] = useState(data);

  const removeItem = id => {
    setList(list.filter(person => person.id !== id))
  }

  return <section>
    <h3>prop drilling</h3>
    <List 
      list={list}
      removeItem={removeItem}
    />
  </section>
};

const List = ({list, removeItem}) => {
  return (
    list.map((person) => {
      return (
        <SinglePerson 
          {...person}
          removeItem={removeItem}
          key={person.id}
        />
      )
    })
  )
}

const SinglePerson = ({id, name, removeItem}) => {
  return <div className='item'>
    <div>{name}</div>
    <button type='button' onClick={() => removeItem(id)}>
      Remove
    </button>
  </div>
}

export default PropDrilling;
