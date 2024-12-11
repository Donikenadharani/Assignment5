import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import styles from './WeatherDisplay.module.css';

const WeatherDisplay = () => {
    const { weatherData, isLoading, apiError } = useContext(WeatherContext);
  
    if (isLoading) return <div>Loading...</div>;
    if (apiError) return <div>{apiError}</div>;
    if (!weatherData) return null;
  
    const condition = weatherData.weather[0].description.toLowerCase();
    
    const humidity = weatherData.main.humidity;
  
    return (
      <div className={styles.WeatherDisplay}>
        <h2>{weatherData.name}</h2>
        <p className={styles.Temperature}>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
        <p className={styles.Condition}>Condition: {condition}</p>
        <p className={styles.Humidity}>Humidity: {humidity}%</p> {/* Display humidity */}
      
        
      </div>
    );
  };
  
  export default WeatherDisplay;