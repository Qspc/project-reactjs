import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from '../img/image1.jpg';

export default function CarouselFunc() {
  const params = [1, 2, 3];
  return (
    <>
      <Carousel>
        {params.map((data) => (
          <div key={data} style={{ margin: 'auto', width: '600px', height: '450px' }}>
            <img src={image} alt="carousel-img" />
            <p className="legend" style={{ width: '90%' }}>
              Legend {data}
            </p>
          </div>
        ))}
      </Carousel>
    </>
  );
}
