import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const NetflixMovieScroll = ({ title, movies = [] }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const handleThumbnailClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const handleClosePlayer = () => {
    setSelectedMovie(null);
  };

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 220; // Adjust based on thumbnail width
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={containerStyle}>
      {title && <h2 style={titleStyle}>{title}</h2>}
      {selectedMovie ? (
        <div onClick={() => handleThumbnailClick(selectedMovie.id)}>
          {/* You can add movie details here */}
        </div>
      ) : (
        <div style={scrollContainerStyle}>
          <button 
            style={{...arrowStyle, left: 0}} 
            onClick={() => handleScroll('left')}
          >
            ←
          </button>
          <div ref={scrollContainerRef} style={scrollableStyle}>
            {movies.map((movie) => (
              <img
                key={movie.id}
                src={movie.thumbnail}
                alt={movie.title}
                style={thumbnailStyle}
                onClick={() => handleThumbnailClick(movie.id)}
              />
            ))}
          </div>
          <button 
            style={{...arrowStyle, right: 0}} 
            onClick={() => handleScroll('right')}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

// Updated and new styles
const containerStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#000',
};

const titleStyle = {
  color: '#fff',
  fontSize: '1.5rem',
  marginBottom: '10px',
};

const scrollContainerStyle = {
  position: 'relative',
};

const scrollableStyle = {
  display: 'flex',
  overflowX: 'auto',
  gap: '10px',
  padding: '10px 40px',
  alignItems: 'center',
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
};

const thumbnailStyle = {
  width: '220px',
  height: '121px',
  cursor: 'pointer',
  borderRadius: '5px',
  objectFit: 'cover',
};

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  fontSize: '20px',
  cursor: 'pointer',
  zIndex: 1,
};

// ... (rest of the styles remain unchanged)

export default NetflixMovieScroll;
