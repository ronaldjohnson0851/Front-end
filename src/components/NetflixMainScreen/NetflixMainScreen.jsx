import React, { useState, useEffect } from 'react';
import EmblaCarousel from './EmblaCarousel.tsx';
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css';
import NetflixMovieScroll from './NetflixMovieScroll.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from '../../Pages/MoviePage';


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = [
    'carousel-photos/diehardcaro.png',
    'carousel-photos/toystorycaro.png',
    'carousel-photos/interstellarcaro.png',
];

const NetflixMainScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/videos')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  const actionMovies = movies.filter(movie => movie.genre === 'Action');
  const comedyMovies = movies.filter(movie => movie.genre === 'Comedy');
  const dramaMovies = movies.filter(movie => movie.genre === 'Drama');
  const sciFiMovies = movies.filter(movie => movie.genre === 'Sci-Fi');
  const animationMovies = movies.filter(movie => movie.genre === 'Animation');

    return (
        <div style={componentNetflixScreenStyle}>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <NetflixMovieScroll title="New Releases" movies={movies} loading={loading} />
            <NetflixMovieScroll title="New Releases" movies={movies} loading={loading} />
            <NetflixMovieScroll title="New Releases" movies={movies} loading={loading} />
            <NetflixMovieScroll title="New Releases" movies={movies} loading={loading} />
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
