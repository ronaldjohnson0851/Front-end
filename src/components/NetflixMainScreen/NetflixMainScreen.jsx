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
        { 
            id: 1, 
            views: '200k',
            posts: '2k',
            likes: '12k',
            title: 'Die Hard', 
            thumbnail: '/video-thumbnails/Die Hard.png', 
            videoUrl: '/Trailers/DieHard.mp4',
            rating: 'R', 
            length: '132 minutes', 
            year: '1988', 
            cast: 'Bruce Willis, Alan Rickman', 
            description: 'A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a christmas party at the Nakatomi Plaza in Los Angeles.'
        },
        { 
            id: 2, 
            views: '50k',
            posts: '1k',
            likes: '6k',
            title: '30 Days of Night', 
            thumbnail: '/video-thumbnails/30DaysNight.png', 
            videoUrl: '/Trailers/30DON.mp4',
            rating: 'R', 
            length: '113 minutes', 
            year: '2007', 
            cast: 'Josh Hartnett, Melissa George', 
            description: 'A group of people in Alaska fight to survive against a horde of vampires during the month-long polar night.'
        },
        { 
            id: 3, 
            views: '700k',
            posts: '5k',
            likes: '18k',
            title: 'Back to the Future', 
            thumbnail: '/video-thumbnails/Back to the Future.png', 
            videoUrl: '/Trailers/BTTF.mp4',
            rating: 'PG', 
            length: '116 minutes', 
            year: '1985', 
            cast: 'Michael J. Fox, Christopher Lloyd', 
            description: 'Marty Mcfly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.'
        },
        { 
            id: 4, 
            views: '900k',
            posts: '9k',
            likes: '22k',
            title: 'The Iron Giant', 
            thumbnail: '/video-thumbnails/Iron Giant.png', 
            videoUrl: '/Trailers/IronGiant.mp4',
            rating: 'PG', 
            length: '86 minutes', 
            year: '1999', 
            cast: 'Vin Diesel, Jennifer Aniston', 
            description: 'A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.'
        },
        { 
            id: 5, 
            views: '600k',
            posts: '4k',
            likes: '15k',
            title: 'Interstellar', 
            thumbnail: '/video-thumbnails/Interstellar.png', 
            videoUrl: '/Trailers/Interstellar.mp4',
            rating: 'PG-13', 
            length: '169 minutes', 
            year: '2014', 
            cast: 'Matthew McConaughey, Anne Hathaway', 
            description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.'
        },
        { 
            id: 6, 
            views: '500k',
            posts: '3k',
            likes: '17k',
            title: 'Toy Story', 
            thumbnail: '/video-thumbnails/Toy Story.png', 
            videoUrl: '/Trailers/ToyStory.mp4',
            rating: 'G', 
            length: '81 minutes', 
            year: '1995', 
            cast: 'Tom Hanks, Tim Allen', 
            description: 'A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as the top toy in a boy\'s bedroom.'
        },
        { 
            id: 7, 
            views: '450k',
            posts: '2k',
            likes: '12k',
            title: 'Toy Story 2', 
            thumbnail: '/video-thumbnails/Toy Story2.png', 
            videoUrl: '/Trailers/ToyStory2.mp4',
            rating: 'G', 
            length: '92 minutes', 
            year: '1999', 
            cast: 'Tom Hanks, Tim Allen', 
            description: ' When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save Woody before he becomes a museum toy property with his roundup gang Jessie, Prospector, and Bullseye.'
        },
    ];

    const recentlyWatched = [
        { 
            id: 1, 
            views: '200k',
            posts: '1k',
            likes: '5k',
            title: 'Crazy Rich Asians', 
            thumbnail: '/video-thumbnails/CrazyRichAsians.png', 
            videoUrl: '/Trailers/CRA.mp4',
            rating: 'PG-13', 
            length: '120 minutes', 
            year: '2018', 
            cast: 'Constance Wu, Henry Golding', 
            description: 'This contemporary romantic comedy based on a global bestseller follows native New Yorker Rachel Chu to Singapore to meet her boyfriends family.'
        },
        { 
            id: 2, 
            views: '400k',
            posts: '2.5k',
            likes: '10k',
            title: 'Elf', 
            thumbnail: '/video-thumbnails/Elf.png', 
            videoUrl: '/Trailers/Elf.mp4',
            rating: 'PG', 
            length: '97 minutes', 
            year: '2003', 
            cast: 'Will Ferrell, James Caan', 
            description: 'Raised as an oversized elf. Buddy travels from the North Pole to New York City to meet his biological father, Walter Hobbs, who doesn’t know he exists and is in desperate need of some Christmas spirit.'
        },
        { 
            id: 3, 
            views: '600k',
            posts: '4k',
            likes: '15k',
            title: 'Interstellar', 
            thumbnail: '/video-thumbnails/Interstellar.png', 
            videoUrl: '/Trailers/Interstellar.mp4',
            rating: 'PG-13', 
            length: '169 minutes', 
            year: '2014', 
            cast: 'Matthew McConaughey, Anne Hathaway', 
            description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.'
        },
        { 
            id: 4, 
            views: '100k',
            posts: '2k',
            likes: '9k',
            title: 'Prince of Egypt', 
            thumbnail: '/video-thumbnails/Prince of Egypt.png', 
            videoUrl: '/Trailers/PrinceOfEgypt.mp4',
            rating: 'PG', 
            length: '99 minutes', 
            year: '1998', 
            cast: 'Val Kilmer, Ralph Fiennes', 
            description: 'Egyptian Prince Moses learns of his identity as a Hebrew and his destiny to become the chosen deliverer of his people.'
        },
    ];

    return (
        <div style={componentNetflixScreenStyle}>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <NetflixMovieScroll title="New Releases" movies={movies} />
            <NetflixMovieScroll title="Classics" movies={recentlyWatched} />
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
