import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const MoviePage = ({ movies }) => {
  const { id } = useParams();

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
        <h1>Movie Not Found</h1>
      </div>
    );
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '2rem',
    boxSizing: 'border-box',
  };

  const videoPlayerStyle = {
    width: '100%',
    aspectRatio: '16/9',
    maxWidth: '800px', 
    margin: '0 auto',
  };

  const statsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    marginTop: '1rem',
    color: '#e50914',
  };

  const movieDetailsStyle = {
    marginTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={videoPlayerStyle}>
        <ReactPlayer
          url={movie.videoUrl}
          controls
          width='100%'
          height='100%'
          style={videoPlayerStyle}
        />
      </div>

      <div style={statsStyle}>
        <span>Views: {getRandomNumber(10000, 1000000)}</span>
        <span>Posts: {getRandomNumber(500, 3000)}</span>
        <span>Likes: {getRandomNumber(5000, 20000)}</span>
      </div>

      <div style={movieDetailsStyle}>
        <h2>{movie.title}</h2>
        <p>{movie.releaseYear || "Year Unknown"} | {movie.runtime || "Unknown runtime"} minutes</p>
        <p><strong>Rating:</strong> {movie.rating || "Not Rated"}</p>
        <p><strong>Top Cast:</strong> {movie.cast || "Not available"}</p>
        <p>{movie.description || "No description available."}</p>
      </div>
    </div>
  );
};

export default MoviePage;
