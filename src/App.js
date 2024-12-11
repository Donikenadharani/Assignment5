// src/App.js
import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import Header from './components/Header';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Header />
        <WeatherSearch />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  );
}

export default App;