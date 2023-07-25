import React, { useState } from 'react'
import axios from 'axios';
import './app.css';

function App() {
  const [data,setData]=useState({})
  const [location,setLocation]=useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c23872bbf96bdfaa6081e44656fb0d0e`
  
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
            {data.main?<h1>{data.main.temp.toFixed()} F</h1>:null}
          </div>
          <div className='description'>
            {data.weather?<p>{data.weather[0].main}</p>:null}
          </div>
        </div>
        {data.name !=undefined&&
        <div className='bottom'>
        <div className='feels'>
          {data.main?<p>{data.main.feels_like.toFixed()}</p>:null}
          <p>Feels like</p>
        </div>
        <div className='humidity'>
          {data.main?<p>{data.main.humidity}</p>:null}
          <p>Humidity</p>
        </div>
        <div className='wind'>
          {data.wind?<p>{data.wind.speed}</p>:null}
          <p>Wind Speed</p>
        </div>
      </div>
        }
        

      </div>
      
    </div>
  );
}

export default App;
