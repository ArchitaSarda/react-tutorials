import React from 'react'

const Book = ({img, name, author}) => (
  <article className='book'>
    <img src={img} alt=''/>
    <h1>{name}</h1>
    <h4>{author.toUpperCase()}</h4>
  </article>
)

export default Book