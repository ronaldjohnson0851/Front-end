import React, { useState } from 'react';



const NetflixMovieScroll = () => {
  // Sample movie data
  const movies = [
    { id: 1, title: 'Die Hard', thumbnail: '/Flixxer_1.jpg', videoUrl: 'https://www.youtube.com/watch?v=jaJuwKCmJbY' },
    { id: 2, title: 'Movie 2', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.example.com/movie2.mp4' },
    { id: 3, title: 'Movie 3', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.example.com/movie3.mp4' },
    { id: 4, title: 'Movie 3', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.example.com/movie3.mp4' },
    // Add more movies here...
  ];

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
  height: '300px',
  position: 'relative',
  backgroundColor: '#000',
};

const scrollableStyle = {
  display: 'flex',
  overflowX: 'auto',
  gap: '10px',
  padding: '10px',
  height: '100%',
  alignItems: 'center',
};

const thumbnailStyle = {
  width: '150px',
  height: '200px',
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
