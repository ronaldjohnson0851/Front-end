import React from 'react';

const NetflixMovieScroll = () => {
  return (
    <div style={componentScrollMovieStyle}>
      <h2>NetflixMovieScroll</h2>
      <p>This area is for Netflix Movie from recently played and recommendations section </p>
    </div>
  );
};


//######## This area controls the Movie scroll div dimensions #######//
const componentScrollMovieStyle = {
    width: '100%', // Matches content container width
    height: '200px',
    padding: '0rem',
    border: '1px solid #ccc',
  
    borderRadius: '2px',
    backgroundColor: '#fff',
  };

export default NetflixMovieScroll;
