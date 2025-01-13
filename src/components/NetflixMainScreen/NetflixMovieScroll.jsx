import React from 'react';
import { useNavigate } from 'react-router-dom';

const NetflixMovieScroll = ({ title, movies, loading , onMovieSelect}) => {
  const navigate = useNavigate();

  const handleThumbnailClick = (movieId) => {
    const selectedMovie = (movies || []).find((movie) => movie.contentId === movieId);
    navigate(`/movie/${movieId}`, { state: { movie: selectedMovie, movies } });

     if (onMovieSelect) {
                  onMovieSelect(movieId) // DD - Notify parent Page of the selected movie
                }
  };

  const getThumbnailUrl = (movieTitle) =>
    movieTitle ? `/video-thumbnails/${movieTitle}.png` : null;

  const defaultThumbnailUrl = 'https://www.shutterstock.com/shutterstock/videos/1102576935/thumb/2.jpg?ip=x480';

  return (
    <div style={containerStyle}>
      {title && <h2 style={titleStyle}>{title}</h2>}
      {loading ? (
        <p style={{ color: 'white' }}>Loading...</p>
      ) : (
        <div style={scrollableStyle}>
          {(movies || []).map((movie) => {
            const thumbnailUrl = getThumbnailUrl(movie?.title) || defaultThumbnailUrl;

            return (
              <img
                key={movie?.contentId || Math.random()}
                src={thumbnailUrl}
                alt={movie?.title || 'Default Thumbnail'}
                style={thumbnailStyle}
                onClick={() => handleThumbnailClick(movie?.contentId)}
                onError={(e) => {
                  // Set the default thumbnail if the image fails to load
                  e.target.src = defaultThumbnailUrl;
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

NetflixMovieScroll.defaultProps = {
  title: 'Default Title',
  movies: [],
  loading: false,
};

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

export default NetflixMovieScroll;
