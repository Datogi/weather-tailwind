import React, {useState} from 'react'
import './App.css';
const api = {
  key: "b0a6020532b4b46f77a2417902fddd0e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
const [query, setQuery] = useState('');
const [weather, setWeather] = useState({})


const search = evt => {
  if(evt.key === 'Enter'){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
     .then(res => res.json())
     .then(result => {
       setWeather(result)
       setQuery('')
       console.log(result)
     })
  }
}


  const dateBuilder = (d) =>{
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December" ];
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
   
    let day = days[d.getDay()]
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }
  return (
    
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? ' bg-warm bg-cover  bg-bottom  transition ease-out delay-75' : ' bg-cold bg-cover  bg-bottom  transition ease-out delay-75') : ' bg-cold bg-cover  bg-bottom  transition ease-out delay-75'}>

      <main className='min-h-screen pl-6 pr-6'>
        <div className='search-box w-full block '>
          <input 
           type="text"
           className='search-bar block w-full p-4 appearance-none bg-none border-none outline-none bg-white rounded-b-2xl shadow-2xl text-color1 text-xl focus:bg-white/50'
           placeholder='Search..'
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
 
        </div>
        {(typeof weather.main != "undefined") ? (
           <div>
        <div className="location-box ">
          <div className="location mt-10  text-white text-3xl font-medium text-center ">{weather.name},{weather.sys.country} </div>
          <div className="date text-white text-xl font-light italic text-center">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box text-center ">
        <div className="temp relative inline-block m-7  rounded-2xl text-white text-8xl font-black text-center shadow-inner">
         {Math.round(weather.main.temp)}°c
        </div>
        <div className="weather text-white text-5xl font-bold">
          {weather.weather[0].main}
        </div>
        </div>
        </div>
         ) : ('')}
      </main>
    </div>
  );
}

export default App;
