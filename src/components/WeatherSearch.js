// src/components/WeatherSearch.js
import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007BFF;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const { fetchWeatherData } = useContext(WeatherContext);

  const handleSearch = (event) => {
    event.preventDefault();
    fetchWeatherData(city);
  };

  return (
    <SearchWrapper>
      <form onSubmit={handleSearch}>
        <InputField 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city" 
        />
        <SearchButton type="submit">Search</SearchButton>
      </form>
    </SearchWrapper>
  );
};

export default WeatherSearch;