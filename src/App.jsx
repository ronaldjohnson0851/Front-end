import React from 'react';
import MainHeader from './components/MainPageHeader/MainHeader';
import NetflixMainScreen from './components/NetflixMainScreen/NetflixMainScreen';
import NetflixMovieScroll from './components/NetflixScrollMovies/NetflixMovieScroll';
import TwittersectionDisplay from './components/Twitter/Twitter';

const AppLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%', 
    backgroundColor: '#000', 
  };

  const contentContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '98%',
    marginTop: '1rem',
  };

  const netflixColumn = {
    display: 'flex',
    flexDirection: 'column',
    flex: 3, 
    gap: '1rem', 
  };

  const twitterSection = {
    flex: 1, 
    marginLeft: '1rem', // Adds spacing between the two main sections
  };

  return (
    <div style={layoutStyle}>
      {/* Header */}
      <MainHeader />

      {/* Main Content: Netflix Column and Twitter Section */}
      <div style={contentContainer}>
        {/* Netflix Column */}
        <div style={netflixColumn}>
          <NetflixMainScreen />
          <NetflixMovieScroll />
        </div>

        {/* Twitter Section */}
        <div style={twitterSection}>
          <TwittersectionDisplay />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
