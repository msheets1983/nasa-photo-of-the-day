import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from '../src/Container'
import './App.css';

const url = 'https://api.nasa.gov/planetary/apod'
const api_key = '4j5FyPEWpWvAQ6mTSKY1TnfKPsjHq2Xw8X3I8s2Z'

function App() {
  const [NASADailyPhoto, setNASADailyPhoto] = useState(null)


  useEffect(() => {
    axios.get(`${url}?api_key=${api_key}`)
      .then(res => {
        console.log(res)
        setNASADailyPhoto(res.data)
        debugger
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div className='App'>
      <p>
        Welcome to NASA's Daily Photo!
      </p>
      <Container>
      {NASADailyPhoto && <h1>{NASADailyPhoto.title}</h1>}
      {NASADailyPhoto && <h3> {NASADailyPhoto.date}</h3>}
      {NASADailyPhoto && <img alt='daily from NASA' src={NASADailyPhoto.hdurl} />}
      {NASADailyPhoto && <p>{NASADailyPhoto.explanation}</p>}
      {NASADailyPhoto && <a href={NASADailyPhoto.url}> {NASADailyPhoto.url}</a>}
      {NASADailyPhoto && <h3> &copy; 2020 {NASADailyPhoto.copyright}</h3>}
      </Container>
    </div>
  );
}

export default App;


//copyright: 'ScottAspinall'
//date: '2020-04-15'
//explanation: 'It was an astronomical triple play. Setting on the left, just after sunset near the end of last month, was our Moon -- showing a bright crescent phase.  Setting on the right was Venus, the brightest planet in the evening sky last month -- and this month, too.  With a small telescope, you could tell that Venus' phase was half, meaning that only half of the planet, as visible from Earth, was exposed to direct sunlight and brightly lit. High above and much further in the distance was the Pleiades star cluster.  Although the Moon and Venus move with respect to the background stars, the Pleiades do not -- because they are background stars. In the beginning of this month, Venus appeared to move right in front of the Pleiades, a rare event that happens only once every eight years.  The featured image captured this cosmic triangle with a series of exposures taken from the same camera over 70 minutes near Avonlea, Saskatchewan, Canada. The positions of the celestial objects was predicted. The only thing unpredicted was the existence of the foreground tree -- and the astrophotographer is still unsure what type of tree that is.'
//hdurl: 'https://apod.nasa.gov/apod/image/2004/MVP_Aspinall_2048.jpg'
//media_type: 'image'
//service_version: 'v1'
//title: 'A Cosmic Triangle'
//url: 'https://apod.nasa.gov/apod/image/2004/MVP_Aspinall_960.jpg'