import React, { useState, useEffect } from 'react';
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

const NetflixMainScreen = ( {movies, onMovieSelect}) => {

//   useEffect(() => {
//     // Simulate API call
//     const fetchMovies = async () => {
//       const response = await fetch('/api/movies'); // Replace with your API endpoint
//       const data = await response.json();
//       setMovies(data);
//     };
//
//     fetchMovies();
//   }, []);

    return (
        <div style={componentNetflixScreenStyle}>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <NetflixMovieScroll title="New Releases" movies={movies}  onMovieSelect={onMovieSelect}/>
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