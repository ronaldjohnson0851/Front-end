import React from 'react';

const MainHeader = () => {
  return (
    <header style={headerStyle}>
      <h1>TWEETFLIX</h1>
    </header>
  );
};

const headerStyle = {
    width: '100%',
    height: '60px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

export default MainHeader;
