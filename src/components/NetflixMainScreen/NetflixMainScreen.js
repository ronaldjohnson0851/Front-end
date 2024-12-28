import React from 'react';

const NetflixMainScreen = () => {
  return (
    <div style={componentNetflixScreenStyle}>
      {/* Remove the text in next 2 lines */}
      <h2>Netflix Main Screen</h2>
      <p>This Area is for Netflix movie display</p>  
    </div>
  );
};

//######## This area controls the Main Netflix div dimensions ##########//
const componentNetflixScreenStyle = {
  flex: '3', // Occupies 3 parts of the row
  height: '400px', // Matches Twittersection height
  padding: '0rem',
  border: '0px solid #ccc',
  borderRadius: '2px',
  backgroundColor: '#fff', // Optional: Keep a light background
};

export default NetflixMainScreen;
