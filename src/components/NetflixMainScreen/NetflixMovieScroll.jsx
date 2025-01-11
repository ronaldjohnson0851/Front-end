import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostSectionDisplay from '/Users/dmishra/DeeptiProjects/Front-end-Fork/src/components/Posts/Posts';
import ThreadDiscussion from '/Users/dmishra/DeeptiProjects/Front-end-Fork/src/components/Posts/PostsComponent';
import AppLayout from '/Users/dmishra/DeeptiProjects/Front-end-Fork/src/App';

const NetflixMovieScroll = ({ title, movies = [] }) => {

  const [selectedMovie, setSelectedMovie] = useState(null);
    const navigate = useNavigate();

  const handleThumbnailClick = (movieId) => {
       // onMovieSelect(movieId);
       setSelectedMovie(movieId); //Set movieId to be passed to posts page

        //Navigate to the movie detail page based on movie ID
        navigate(`/movie/${movieId}`);
  };


  const handleClosePlayer = () => {
    setSelectedMovie(null);
  };

  return (
    <div style={containerStyle}>

      {title && <h2 style={titleStyle}>{title}</h2>}
      {selectedMovie ? ( <div onClick={() => handleThumbnailClick(selectedMovie)}> {/* You can add movie details here */}
                 {<PostSectionDisplay movieId={selectedMovie} />}
                                 </div>

      ) : (
        <div style={scrollableStyle}>
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
      )}
    </div>

  );
};

// Styles remain the same as before
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
