import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const context = useGlobalContext();
  const {openSidebar, openModal} = context;
  console.log(context)
  return <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
      <FaBars />
    </button>
    <button className="btn" onClick={openModal}>Show modal</button>
  </main>
}

export default Home
