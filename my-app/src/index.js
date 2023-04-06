import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { booksData } from './books';
import Book from './Book';


const BookList = () => {
  const bookList = booksData.map((book) => (
     <Book key={book.id} {...book} />
  ));
  return (
    <section className='booklist'>
      {bookList}
    </section> 
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);

