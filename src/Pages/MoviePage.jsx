import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
//******/Added to test the movieId being passed into post page.
//import ThreadDiscussion from '/Users/dmishra/DeeptiProjects/Front-end-Fork/src/components/Twitter/TweetComponent.jsx';


// { movies = [] } add this as a prop once we have data
const MoviePage = ({ movies }) => {
  const { id } = useParams();


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
    height: 'auto',
    borderRadius: '8px',
  };

  const statsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.2rem',
    margin: '1rem 0',
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
                  />
      </div>

      <div style={statsStyle}>
        <span>Views: 15k</span>
        <span>Posts: 2k</span>
        <span>Likes: 12k</span>
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
