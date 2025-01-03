import React, { useState } from 'react';


const NetflixMovieScroll = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleThumbnailClick = (movie) => {
    setSelectedMovie(movie);
    };

  const handleClosePlayer = () => {
    setSelectedMovie(null);
  };

  return (
    <div style={containerStyle}>
      {selectedMovie ? (
        <div style={playerContainerStyle}>
          <button style={closeButtonStyle} onClick={handleClosePlayer}>Close</button>
          <video style={videoStyle} src={selectedMovie.videoUrl} controls autoPlay />
        </div>
      ) : (
        <div style={scrollableStyle}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={movie.thumbnail}
              alt={movie.title}
              style={thumbnailStyle}
              onClick={() => handleThumbnailClick(movie)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Styles
const containerStyle = {
  width: '100%',
  height: '220px',
  position: 'relative',
  backgroundColor: '#000',
  overflowY: 'hidden',
};

const scrollableStyle = {
  display: 'flex',
  overflowX: 'auto',
  gap: '10px',
  padding: '10px',
  height: '100%',
  alignItems: 'center',
  scrollbarWidth: 'none',
};

const thumbnailStyle = {
  width: '220px',
  height: '121px',
  cursor: 'pointer',
  borderRadius: '5px',
  objectFit: 'cover',
};

const playerContainerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const closeButtonStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '10px',
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const videoStyle = {
  maxWidth: '90%',
  maxHeight: '90%',
  borderRadius: '10px',
};

export default NetflixMovieScroll;
