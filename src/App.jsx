import React from 'react';
import MainHeader from './components/MainPageHeader/MainHeader';
import NetflixMainScreen from './components/NetflixMainScreen/NetflixMainScreen';
import NetflixMovieScroll from './components/NetflixMainScreen/NetflixMovieScroll';
import TwitterSectionDisplay from './components/Twitter/Twitter';
import MoviePage from "./Pages/MoviePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadMovie from "./Pages/UploadMovie";
import 'bootstrap/dist/css/bootstrap.min.css';



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
    overflowY: 'auto',
  };

  const twitterSection = {
    flex: 1, // Allocate smaller space to Twitter section
    marginLeft: '0rem', // Adds spacing between columns
   // overflowY: 'auto', // Allow scrolling if content overflows
  };

  const movies = [
            { id: 1, title: 'Die Hard', thumbnail: '/video-thumbnails/Die Hard.png', videoUrl: 'https://www.youtube.com/watch?v=jaJuwKCmJbY' },
                    { id: 2, title: '30 Days of Night', thumbnail: '/video-thumbnails/30DaysNight.png', videoUrl: 'https://www.example.com/movie2.mp4' },
                    { id: 3, title: 'Back to the Future', thumbnail: '/video-thumbnails/Back to the Future.png', videoUrl: 'https://www.example.com/movie3.mp4' },
                    { id: 4, title: 'the Iron Giant', thumbnail: '/video-thumbnails/Iron Giant.png', videoUrl: 'https://www.example.com/movie3.mp4' },
                    { id: 5, title: 'Interstellar', thumbnail: '/video-thumbnails/Interstellar.png', videoUrl: 'https://www.example.com/movie3.mp4' },
                    { id: 6, title: 'Toy Story', thumbnail: '/video-thumbnails/Toy Story.png', videoUrl: 'https://www.example.com/movie3.mp4' },
                    { id: 7, title: 'Toy Story 2', thumbnail: '/video-thumbnails/Toy Story2.png', videoUrl: 'https://www.example.com/movie3.mp4' },
                  ];

  return (
      <Router>
          <div style={layoutStyle}>
      {/* Header */}
      <MainHeader />
 <div style={contentContainer}>
          {/* Netflix Column */}
          <div style={netflixColumn}>
            <Routes>
              {/* Netflix Main Screen */}
              <Route path="/" element={<NetflixMainScreen movies={movies} />} />

              {/* Movie Page */}
              <Route path="/movie/:id" element={<MoviePage movies={movies} />} />

              {/* Upload Movie Page */}
              <Route path="/upload-movie" element={<UploadMovie />} />
            </Routes>
          </div>

        {/* Twitter Section */}
        <div style={twitterSection}>
          <TwitterSectionDisplay />
        </div>
      </div>
      }
                />
            </div>
          </Router>
  );
};

export default AppLayout;
