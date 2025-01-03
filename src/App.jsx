import React from 'react';
import MainHeader from './components/MainPageHeader/MainHeader';
import NetflixMainScreen from './components/NetflixMainScreen/NetflixMainScreen';
import NetflixMovieScroll from './components/NetflixMainScreen/NetflixMovieScroll';
import TwittersectionDisplay from './components/Twitter/Twitter';

const AppLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw', // Full viewport width
    height: '100vh', // Full viewport height
    margin: 0, // Remove any default margins
    padding: 0,
    backgroundColor: '#000', // Black background
    boxSizing: 'border-box', // Include padding and border in dimensions
    overflow: 'hidden', // Prevent content overflow
  };

  const contentContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '98%', // Slight margin inside the parent container
    height: 'calc(100% - 60px)', // Subtract header height to avoid overflow
    marginTop: '1rem',
    gap: '1rem', // Add spacing between main sections
  };

  const netflixColumn = {
    display: 'flex',
    flexDirection: 'column',
    flex: 3, // Allocate more space to Netflix section
    gap: '1rem', // Add spacing between the two Netflix components
  };

  const twitterSection = {
    flex: 1, // Allocate smaller space to Twitter section
    marginLeft: '0rem', // Adds spacing between columns
   // overflowY: 'auto', // Allow scrolling if content overflows
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
          <NetflixMovieScroll/>
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
