// src/context/WeatherContext.js
import React, { createContext, useState, useCallback } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const fetchWeatherData = useCallback(async (city) => {
    setIsLoading(true);
    setApiError(null);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d47dbc079eb9dd7bc5de79fef8e4e6c2`);
      const data = await response.json();
      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      setWeatherData(data);
    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, isLoading, apiError, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};