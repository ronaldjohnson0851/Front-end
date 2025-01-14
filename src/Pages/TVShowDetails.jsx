// TVShowDetails.jsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

const TVShowDetails = ({ tvShows }) => {
  const { id } = useParams();
  const location = useLocation();
  const show = location.state?.show || tvShows.find(s => s.id === Number(id));
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  if (!show) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
        <h1>TV Show Not Found</h1>
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
    fontSize: '1.2rem',
    margin: '1rem 0',
    color: '#e50914',
  };

  const showDetailsStyle = {
    marginTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={videoPlayerStyle}>
        <ReactPlayer
          url={show.videoUrl}
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

      <div style={showDetailsStyle}>
        <h2>{show.title}</h2>
        <p>{show.releaseYear || "Year Unknown"} | {show.seasons || "Unknown"} seasons</p>
        <p><strong>Genre:</strong> {show.genre}</p>
        <p><strong>Rating:</strong> {show.rating || "Not Rated"}</p>
        <p><strong>Top Cast:</strong> {show.cast || "Not available"}</p>
        <p>{show.description || "No description available."}</p>
      </div>
    </div>
  );
};

export default TVShowDetails;
