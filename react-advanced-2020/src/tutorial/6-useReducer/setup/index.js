import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import reducer from './reducer';

const initialState = {
  list: [],
  showModal: false,
  modalMsg: ''
}

const Index = () => {
  
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    if(name) {
      const payload = {id: new Date().getTime().toString(), name};
      dispatch({type: 'ADD_NAME', payload })
      setName('');
    } else {
      dispatch({type: 'NO_ITEM'})
    }
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  const removeItem = id => {
    dispatch({type: 'REMOVE_ITEM', payload: id})
  }

  return <section>
    {state.showModal && 
      <Modal modalContent={state.modalMsg} closeModal={closeModal} />
    }
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type='submit'>
        Add
      </button>
    </form>
    {state.list.length > 0 && 
      state.list.map(person => {
        return <div key={person.id} className='item'>
          <h4>{person.name}</h4>
          <button onClick={() => removeItem(person.id)}>remove</button>
        </div>
      })
    }
  </section>
};

export default Index;
