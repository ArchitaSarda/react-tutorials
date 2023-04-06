import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);


  console.log(jobs);

  const getjobs = async () => {
    setIsLoading(true);
    await fetch(url)
    .then(async(response) => {
      if(response.status >= 200 && response.status < 400) {
        const jobsdata = await response.json();
        setJobs(jobsdata);
      } else {
        setIsError(true);
        throw new Error(response.statusText);
      }
      setIsLoading(false);
    })
    .catch((error) => {
      setIsError(true);
      console.log(error);
    })
  }

  useEffect(() => {
    getjobs();
  },[])

  if(isError) {
    return <h2>Error found</h2>
  }

  if(isLoading) {
    return <section className='menu section'>
      <div className='title'>
        <h2>Loading</h2>
      </div>
    </section>
  }

  const { company, dates, duties, title } = jobs[value];

  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      {/* <button type="button" className="btn">
        more info
      </button> */}
    </section>
  </main>
}

export default App
