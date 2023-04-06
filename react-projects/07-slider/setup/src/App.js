import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [value, setValue] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (value < 0) {
      setValue(lastIndex);
    }
    if (value > lastIndex) {
      setValue(0);
    }
  }, [value, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [value]);

  return <main>
    <section className='section'>
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {data.map((person, personIndex) => {

          let position='nextSlide';
          if (personIndex === value) {
            position = 'activeSlide';
          }
          if (
            personIndex === value - 1 ||
            (value === 0 && personIndex === data.length - 1)
          ) {
            position = 'lastSlide';
          }
          
          const {id, image, name, title, quote} = person;
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button className="prev" onClick={() => setValue(value - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setValue(value + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  </main>
}

export default App;

