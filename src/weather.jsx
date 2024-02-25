import axios from 'axios'
import React, { useState } from 'react'

export default function Weather() {
    const [data , setData] = useState({})
    const [location , setLocation] = useState("")
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bb76fcc4dbbc8372ab1ef75770762b59`
    
    const searshlocation=(e)=>{
        if(e.key==='Enter'){
       axios.get(url).then(res=>{
        setData(res.data)
        console.log(res.data)
    })
    } }

    return (
    <>
    
    <div className='searsh'>
        <input type="text" 
        placeholder='Location'
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        onKeyPress={searshlocation}
        />
    </div>
    <div className='contenair'>
        <div className='top'>
            <div>
                {data?.name ? <p> {data.name}</p> : null}
            </div>
            <div>
            {data?.main ? <h1> {data.main.temp}F°</h1> : null}
            </div>
            <div className='description'>
            {data?.weather ? <p> {data.weather[0].main}</p> : null}
            </div>
        </div>

        <div className='buttom'>
            <div>
            {data?.main ? <p> {data.main.feels_like}F°</p> : null}                <p>Feels like</p>
            </div>
            <div>
            {data?.main ? <p> {data.main.humidity}%</p> : null}                <p>Humiditi</p>
            </div>
            <div>
            {data?.wind ? <p> {data.wind.speed}MPH</p> : null}                <p>Wind Speed</p>
            </div>
        </div>
    </div>
    </>
  )
}
