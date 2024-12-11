import React from 'react';

const headerStyle = {
  textAlign: 'center',
  padding: '15px',
  background: '#282c34',
  color: '#fff',
  borderBottom: '2px solid #61dafb'
};

const Header = () => (
  <header style={headerStyle}>
    <h1>Weather Information App</h1>
  </header>
);

export default Header;