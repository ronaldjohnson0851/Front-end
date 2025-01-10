import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const TVShowDetails = ({ tvShows = [] }) => {
  const { id } = useParams();
  
  // Add loading state
  if (!tvShows.length) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  const show = tvShows.find((tvShow) => tvShow.id === Number(id));

  if (!show) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
        <h1>Show Not Found</h1>
      </div>
    );
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '2rem',
    boxSizing: 'border-box',
  };

  const videoPlayerStyle = {
    width: '80%',
    height: 'auto',
    borderRadius: '8px',
  };

  const detailsStyle = {
    marginTop: '1rem',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={videoPlayerStyle}>
        <ReactPlayer url={show.videoUrl} controls width="100%" />
      </div>

      <div style={detailsStyle}>
        <h2>{show.title}</h2>
        <p>Genre: {show.genre}</p>
        <p>{show.description || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default TVShowDetails;