import React, { useState } from 'react';
import EmblaCarousel from './EmblaCarousel.tsx';
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css';
import NetflixMovieScroll from './NetflixMovieScroll.jsx';
// import { useNavigate } from 'react-router-dom';


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = [
    'carousel-photos/diehardcaro.png',
    'carousel-photos/toystorycaro.png',
    'carousel-photos/interstellarcaro.png',
];

const NetflixMainScreen = () => {
      const [movies, setMovies] = useState([
        { id: 1, title: 'Die Hard', thumbnail: '/video-thumbnails/Die Hard.png', videoUrl: 'https://www.youtube.com/watch?v=jaJuwKCmJbY' },

                { id: 2, title: '30 Days of Night', thumbnail: '/video-thumbnails/30DaysNight.png', videoUrl: 'https://www.example.com/movie2.mp4' },
                { id: 3, title: 'Back to the Future', thumbnail: '/video-thumbnails/Back to the Future.png', videoUrl: 'https://www.example.com/movie3.mp4' },
                { id: 4, title: 'the Iron Giant', thumbnail: '/video-thumbnails/Iron Giant.png', videoUrl: 'https://www.example.com/movie3.mp4' },
                { id: 5, title: 'Interstellar', thumbnail: '/video-thumbnails/Interstellar.png', videoUrl: 'https://www.example.com/movie3.mp4' },
                { id: 6, title: 'Toy Story', thumbnail: '/video-thumbnails/Toy Story.png', videoUrl: 'https://www.example.com/movie3.mp4' },
                { id: 7, title: 'Toy Story 2', thumbnail: '/video-thumbnails/Toy Story2.png', videoUrl: 'https://www.example.com/movie3.mp4' },
              ]);

    return (
        <div style={componentNetflixScreenStyle}>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <NetflixMovieScroll title="New Releases" movies={movies} />
{/*             <NetflixMovieScroll title="Classics" movies={recentlyWatched} /> */}
{/*             <div onClick={() => handleMovieClick(1)}>  */}{/* Movie ID = 1 */}
{/*                     <img src="toy-story-thumbnail.jpg" alt="Toy Story" /> */}
{/*                     <p>Toy Story</p> */}
{/*                   </div> */}
{/*                   <div onClick={() => handleMovieClick(2)}>  */}{/* Movie ID = 2 */}
{/*                     <img src="frida-thumbnail.jpg" alt="Frida" /> */}
{/*                     <p>Frida</p> */}
{/*                   </div> */}
        </div>
    );

};

const componentNetflixScreenStyle = {
  flex: '3',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: '0rem',
  border: '0px solid #ccc',
  borderRadius: '2px',
  backgroundColor: '#000',
  overflowY: 'scroll',
  scrollbarWidth: 'none',
};

export default NetflixMainScreen;
