import React, { useState } from 'react';

const NetflixMovieScroll = ({ title, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleThumbnailClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePlayer = () => {
    setSelectedMovie(null);
  };

  return (
    <div style={containerStyle}>
      {title && <h2 style={titleStyle}>{title}</h2>}
      {selectedMovie ? (
        <div style={movieDetailStyle}>
          <button style={closeButtonStyle} onClick={handleClosePlayer}>
            Close
          </button>ß
          <div style={videoSectionStyle}>
            <video style={videoStyle} src={selectedMovie.videoUrl} controls autoPlay />
            <div style={detailsStyle}>
              <h3 style={movieTitleStyle}>{selectedMovie.title}</h3>
              <p style={movieStatsStyle}>
                <span>Views: {selectedMovie.views}</span> <span>Posts: {selectedMovie.posts}</span> <span>Likes: {selectedMovie.likes}</span>
              </p>
              <p style={movieMetaStyle}>
                {selectedMovie.year} | {selectedMovie.length} | Rating: {selectedMovie.rating}
              </p>
              <p style={movieCastStyle}>
                Top Cast: {selectedMovie.cast}
              </p>
              <p style={movieDescriptionStyle}>
                {selectedMovie.description}
              </p>
            </div>
          </div>
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
  padding: '10px',
  backgroundColor: '#000',
};

const titleStyle = {
  color: '#fff',
  fontSize: '1.5rem',
  marginBottom: '10px',
};

const scrollableStyle = {
  display: 'flex',
  overflowX: 'auto',
  gap: '10px',
  padding: '10px 0',
  alignItems: 'center',
};

const thumbnailStyle = {
  width: '220px',
  height: '121px',
  cursor: 'pointer',
  borderRadius: '5px',
  objectFit: 'cover',
};

const movieDetailStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#000',
};

const videoSectionStyle = {
  flex: 2,
  marginRight: '20px',
};

const videoStyle = {
  width: '100%',
  borderRadius: '10px',
};

const detailsStyle = {
  color: '#fff',
  marginTop: '20px',
};

const movieTitleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
};

const movieStatsStyle = {
  fontSize: '1rem',
  color: '#ff0000',
  margin: '10px 0',
};

const movieMetaStyle = {
  fontSize: '1rem',
  color: '#fff',
};

const movieCastStyle = {
  fontSize: '1rem',
  color: '#fff',
  margin: '10px 0',
};

const movieDescriptionStyle = {
  fontSize: '1rem',
  color: '#ccc',
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

export default NetflixMovieScroll;
