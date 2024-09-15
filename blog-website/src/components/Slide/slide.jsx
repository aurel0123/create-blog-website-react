import React from 'react';
import Sdata from './dataS'; 
import './slide.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Slide = () => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speeds: 200,
    arrows: false,
    autoplay: true,  // Activer l'auto-play
    autoplaySpeed: 3000,  // Vitesse de défilement en millisecondes (ici 2 secondes)
  };

  return (
    <div className='Slide'>
      <Slider {...settings}>
        {
          Sdata.map((val) => (
            <div key={val.id} className='box'>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <span>{val.category}</span>
                <h2>{val.title}</h2>
                <p>{val.desc}</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}
