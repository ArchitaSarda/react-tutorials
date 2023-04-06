import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorageData = () => {
  let data = localStorage.getItem('list')
  if(data) {
    return JSON.parse(data)
  }
  return []
}

function App() {

  const [text, setText] = useState('');
  const [list, setList] = useState(getLocalStorageData());
  const [alert, setAlert] = useState({show: false, msg:'', type:''});
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState('');

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])

  const showAlert = (show=false, type='', msg='') => {
    setAlert({show, type, msg})
  }

  const removeItem = id => {
    setList((prevList) => {
      return prevList.filter(item => item.id !== id)
    })
    showAlert(true, 'danger', 'Item removed')
  }

  const editItem = id => {
    setEditId(id);
    setIsEdit(true);
    setText(list.find(item => item.id === id).title);
  }

  const emptyList = () => {
    setList([]);
    showAlert(true, 'danger', 'List cleared')
  }

  const submitHandle = e => {
    e.preventDefault();
    if(!text) {
      showAlert(true, 'danger', 'Please enter value')
    }
    else if(text && isEdit) {
      setList(list.map(item => {
        if(item.id === editId) {
          return {...item, title: text}
        }
        return item
      }))
      setIsEdit(false);
      setEditId('');
      setText('');
      showAlert(true, 'success', 'item edited')
      
    } else {
      setList([...list,{id: new Date().getTime().toString(), title: text}]);
      setText('');
      showAlert(true, 'success', 'Item added')
    }
  }

  return <main>
    <section className='section-center'>
      <form onSubmit={submitHandle} className='grocery-form'>
        {alert.show && 
          <Alert 
            {...alert}
            removeAlert={showAlert}
            list={list}
          />
        }
        <h3>grocery bud</h3>
        <div className="form-control">
          <input 
            type="text" 
            placeholder='e.g. eggs'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='grocery'
          />
          <button type='submit' className='submit-btn'>
            {isEdit ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      
      {list.length > 0 && 
        <div className='grocery-container'>
          <List 
            list={list}
            removeItem={removeItem}
            editItem={editItem}
          />
          <button className='clear-btn' onClick={emptyList}>Clear items</button>
        </div>
      }
    </section>
  </main>
}

export default App
