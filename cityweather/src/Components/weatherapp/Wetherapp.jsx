import React, { useState, useEffect } from 'react'
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import rain_icon from '../assets/rain.png';
import humidity_icon from '../assets/humidity.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import snow_icon from '../assets/snow.png';
import wind_icon  from '../assets/wind.png';
import './weatherapp.css'

const Wetherapp = () => {
    const[city,setCity]=useState('Delhi');
    const[apidata,setApiData]=useState({ });


    console.log(apidata);

    //api ke and url
    let api_key="07be6819c4eeaaef7c17953f189f9e5f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    useEffect(() => {
        fetch(apiUrl)
         .then((res) => res.json())
         .then((data) => setApiData(data));
     }, [apiUrl]);

    const search= ()=>{
    
        const city = document.getElementsByTagName('input');
        console.log(city[0].value);
        setCity(city[0].value)
    }   




  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" placeholder='Search' className="cityInput" />

            <div className="search-icon" onClick={search}>
                <img src={search_icon} alt="" />
            </div>

        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">30ºc</div>
        <div className="weather-location">{apidata.name}</div>
        <div className="data-contianer">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">38%</div>
                    {/* <div className="text">{apidata.main.humidity}</div> */}
                </div>

            </div>

            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">18 km/h</div>
                    <div className="text">Wind Spped</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wetherapp