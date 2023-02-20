import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselFunc() {
  return (
    <>
      <Carousel>
        <div style={{ margin: 'auto' }}>
          <img src="https://source.unsplash.com/random/500x300" />
          <p className="legend" style={{ width: '90%' }}>
            Legend 1
          </p>
        </div>
        <div style={{ margin: 'auto' }}>
          <img src="https://source.unsplash.com/random/900x300" />
          <p className="legend" style={{ width: '90%' }}>
            Legend 2
          </p>
        </div>
        <div style={{ margin: 'auto' }}>
          <img src="https://source.unsplash.com/random/500x300" />
          <p className="legend" style={{ width: '90%' }}>
            Legend 3
          </p>
        </div>
      </Carousel>
    </>
  );
}
