import React from 'react';
import logo from '../Logos and icons/Final ProjectLogo.png'; // Adjust the path to where your logo is located

const MainHeader = () => {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
    </header>
  );
};

const headerStyle = {
  width: '100%',
  height: '60px',
  backgroundColor: '#282c34',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  padding: '0rem',
};


const logoStyle = {
  height: '60px', // Adjust the height to fit the header
  marginRight: '1rem', // Space between logo and text
};

const titleStyle = {
  fontSize: '1.5rem', // Adjust font size
};

export default MainHeader;
