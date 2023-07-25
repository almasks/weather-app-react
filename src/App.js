import React, { useState } from 'react'
import axios from 'axios';
import './app.css';

function App() {
  const [data,setData]=useState({})
  const [location,setLocation]=useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c23872bbf96bdfaa6081e44656fb0d0e`
  
  const searchLocation=(e)=>{
    if(e.key==='Enter'){
      axios.get(url)
      .then(res=>{setData(res.data)
        console.log(res.data)
      }
      )
    }

  }
  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
          <input placeholder='Enter Location' type="text" value={location} onChange={e=>setLocation(e.target.value)}
          onKeyPress={searchLocation}/>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            
            <h1>{data.main}</h1>
          </div>
          <div className='description'>
            <p>clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>65 F</p>
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p >12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
