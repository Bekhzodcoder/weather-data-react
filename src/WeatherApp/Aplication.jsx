import React, {useState} from 'react';
import { fetchWeather } from './Api/fetchWeather';

const Aplication = () => {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = async (e) =>{
        if(e.key === 'Enter'){
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery();
            
        }
    }

    return (
        <div className='main-container'>
            <div className='search'>
                <input type="text"
                className='search'
                placeholder='search...'
                value = {query}
                onChange = {(e) => setQuery(e.target.value)}
                onKeyPress = {search}

                />
            </div>
            {weather.name &&(
                <div className='city'>
                    <div className='info'>
                        <img src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt = "weather logo" />
                    </div>
                    <div className='details'>
                        <h2 className='city-name'>
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className='city-temp'>
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Aplication;