import React from 'react';

const MoviePage = () => {
  const videoPlayerStyle = {
    width: '100%',
    height: 'auto',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Adjusted to column so only the left section is used
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '2rem',
    boxSizing: 'border-box', // Include padding in total width/height calculation
  };

  const leftSectionStyle = {
    flex: 1,  // Only left section, no right section
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingRight: '2rem',
  };

  const statsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.2rem',
    margin: '1rem 0',
    color: '#e50914',
  };

  const commentsStyle = {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  return (
    <div style={containerStyle}>
      {/* Left Section: Video Player + Movie Details */}
      <div style={leftSectionStyle}>
        <div>
          <video style={videoPlayerStyle} controls>
            <source src="toy-story.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div style={statsStyle}>
          <span>Views: 15k</span>
          <span>Posts: 2k</span>
          <span>Likes: 12k</span>
        </div>

        <div>
          <h2>Toy Story</h2>
          <p>1995 | 81 minutes</p>
          <p>Rating: G</p>
          <p>
            <strong>Top Cast:</strong> Tom Hanks, Tim Allen
          </p>
          <p>
            A cowboy doll is profoundly threatened and jealous when a new
            spaceman action figure supplants him as the top toy in a boy's
            bedroom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
