import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);

  const {name, job, image, text} = people[index];

  const checkNumber = number => {
    if(number > people.length-1)
      return 0;
    else if(number < 0)
      return people.length - 1;
    else
      return number; 
  }

  const handleLeft = () => {
    setIndex((prevIndex) => {
      return checkNumber(prevIndex - 1)
    })
  }

  const handleRight = () => {
    setIndex((prevIndex) => {
      return checkNumber(prevIndex + 1)
    })
  }

  const randomPerson = () => {
    setIndex(prevIndex => {
      let newNumber = Math.floor(Math.random()*people.length);
      if(newNumber === prevIndex) 
        newNumber = newNumber+1;
      return checkNumber(newNumber);
    })
  }

  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'><FaQuoteRight /></span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={handleLeft}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={handleRight}>
        <FaChevronRight />
      </button>
    </div>
    <button className='random-btn' onClick={randomPerson}>Surprise me</button>
  </article>;
};

export default Review;
