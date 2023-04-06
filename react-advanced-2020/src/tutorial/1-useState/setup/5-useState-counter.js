import React, { useState } from 'react';

const UseStateCounter = () => {
  
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => setValue((prevValue) => (prevValue+1)), 2000);
  }


  const Counter = () => (
    <>
      <h2>Regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value+1)}>
        Increase
      </button>
      <button className='btn' onClick={() => setValue(0)}>
        Reset
      </button>
      <button className='btn' onClick={() => setValue(value-1)}>
        Decrease
      </button>
    </>
  )

  const ComplexCounter = () => (
    <>
      <h2>Regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>
        Complex increase
      </button>
      
    </>
  )
  
  
  return <>
    <Counter />
    <ComplexCounter />
  </>;
};

export default UseStateCounter;
