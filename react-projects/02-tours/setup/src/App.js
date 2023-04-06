import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const removeTour = id => {
    setTours(tours.filter(tour => tour.id !== id))
  }

  const getTours = async () => {
    setIsLoading(true);
    await fetch(url)
    .then(async (response) => {
      setIsLoading(false);
      if(response.status >= 200 && response.status < 300) {
        const toursData = await response.json();
        setTours(toursData);
      } else {
        setIsError(true);
        throw new Error(response.statusText);
      }
    }).catch(error => {
      setIsError(true);
      console.log(error);
    })
    
  }

  useEffect(() => {
    getTours();
  },[])

  if(isError) {
    return <main>
      <h1>Error in api</h1>
    </main>
  }

  if(isLoading) {
    return <main>
      <Loading />
    </main>
  }

  if(tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>No tours left</h2>
        <button className='btn' onClick={getTours}>
          Refresh list
        </button>
      </div>
    </main>
  }
  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App
