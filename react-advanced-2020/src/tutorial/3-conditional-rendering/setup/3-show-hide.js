import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false);

  return <>
    <button className='btn' onClick={() => setShow(!show)}>
      Show/Hide
    </button>
    {show && <Item />}
  </>
};

const Item = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
    }
  })

  return <h1>
    Width: {width}px
  </h1>
}

export default ShowHide;
