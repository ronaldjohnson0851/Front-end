import React from 'react';
import logo from '../Logos and icons/FLIXXER.png';
import HeaderMenu from './HeaderMenu';

const MainHeader = () => {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <HeaderMenu/>
    </header>
  );
};

const headerStyle = {
  width: '100%',
  height: '60px',
  backgroundColor: '#000000',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  padding: '0rem',
};


const logoStyle = {
  height: '60px', // Adjust the height to fit the header
  marginRight: '2rem', // Space between logo and text
  padding: '1.5rem'
};

const titleStyle = {
  fontSize: '1.5rem', // Adjust font size
};

export default MainHeader;
