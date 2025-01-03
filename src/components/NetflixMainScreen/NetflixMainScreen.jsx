import React from 'react';
import EmblaCarousel from './EmblaCarousel.tsx';
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css';


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
 const SLIDES = [
    'carousel-photos/diehardcaro.png',
    'carousel-photos/toystorycaro.png',
    'carousel-photos/interstellarcaro.png',
  ];

const NetflixMainScreen = () => {
  return (
    <div style={componentNetflixScreenStyle}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <h1>Continue Watching</h1>
    </div>
  );
};

//######## This area controls the Main Netflix div dimensions ##########//
const componentNetflixScreenStyle = {
  flex: '3', // Occupies 3 parts of the row
  height: '100%', // Matches Twittersection height
  padding: '0rem',
  border: '0px solid #ccc',
  borderRadius: '2px',
  backgroundColor: '#000',
};


export default NetflixMainScreen;
