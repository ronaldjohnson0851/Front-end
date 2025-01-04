import React from 'react';
import EmblaCarousel from './EmblaCarousel.tsx';
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css';
import NetflixMovieScroll from './NetflixMovieScroll.jsx';


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
 const SLIDES = [
    'carousel-photos/diehardcaro.png',
    'carousel-photos/toystorycaro.png',
    'carousel-photos/interstellarcaro.png',
  ];

const NetflixMainScreen = () => {
      const movies = [
        { id: 1, title: 'Die Hard', thumbnail: '/video-thumbnails/Die Hard.png', videoUrl: '/Trailers/DieHard.mp4'},
        { id: 2, title: '30 Days of Night', thumbnail: '/video-thumbnails/30DaysNight.png', videoUrl: '/Trailers/30DON.mp4' },
        { id: 3, title: 'Back to the Future', thumbnail: '/video-thumbnails/Back to the Future.png', videoUrl: '/Trailers/BTTF.mp4' },
        { id: 4, title: 'the Iron Giant', thumbnail: '/video-thumbnails/Iron Giant.png', videoUrl: '/Trailers/IronGiant.mp4' },
        { id: 5, title: 'Interstellar', thumbnail: '/video-thumbnails/Interstellar.png', videoUrl: '/Trailers/Interstellar.mp4' },
        { id: 6, title: 'Toy Story', thumbnail: '/video-thumbnails/Toy Story.png', videoUrl: '/Trailers/ToyStory.mp4' },
        { id: 7, title: 'Toy Story 2', thumbnail: '/video-thumbnails/Toy Story2.png', videoUrl: '/Trailers/ToyStory2.mp4' },
      ];

        const recentlyWatched = [
          { id: 1, title: 'Crazy Rich Asians', thumbnail: '/video-thumbnails/CrazyRichAsians.png', videoUrl: '/Trailers/CRA.mp4' },
          { id: 2, title: 'Elf', thumbnail: '/video-thumbnails/Elf.png', videoUrl: '/Trailers/Elf.mp4' },
          { id: 3, title: 'Interstellar', thumbnail: '/video-thumbnails/Interstellar.png', videoUrl: '/Trailers/Interstellar.mp4' },
          { id: 4, title: 'Prince of Egypt', thumbnail: '/video-thumbnails/Prince of Egypt.png', videoUrl: '/Trailers/PrinceOfEgypt.mp4' },
        ];
//ddd
  return (
    <div style={componentNetflixScreenStyle}>
      {/* Remove the text in next 2 lines */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <NetflixMovieScroll title=" New Releases" movies={movies} />
      <NetflixMovieScroll title="Classics" movies={recentlyWatched} />
    </div>
  );
};

//######## This area controls the Main Netflix div dimensions ##########//
const componentNetflixScreenStyle = {
  flex: '3', // Occupies 3 parts of the row
  display: 'flex',
  flexDirection: 'column', // Stack components vertically
  height: '100vh', // Matches Twittersection height
  padding: '0rem',
  border: '0px solid #ccc',
  borderRadius: '2px',
  backgroundColor: '#000',
  overflowY: 'scroll',
  scrollbarWidth: 'none',
};


export default NetflixMainScreen;
