import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [paragraphCount, setParagraphCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    let textCount = paragraphCount;
    if(paragraphCount < 0) {
      textCount = 1;
    } else if(paragraphCount > 10) {
      textCount = 10;
    }
    setText(data.slice(0,textCount));
  }

  return <main>
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor="count">
          Paragraphs:
        </label>
        <input 
          type="number" 
          id="count"
          name="count"
          value={paragraphCount}
          onChange={(e) => setParagraphCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph,index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </article>
    </section>
  </main>
}

export default App;
