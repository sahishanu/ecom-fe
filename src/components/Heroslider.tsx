import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface SliderSettings {
    dots: boolean;
    fade: boolean;
    cssEase: string;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    arrows: boolean;
  }
  
export const Heroslider: React.FC = () => {
    const settings: SliderSettings = {
      dots: true,
      fade: false,
      cssEase: 'linear',
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows : false,
    };
  
    return (
      <div>
      
      <Slider {...settings}>
      

        <div className='h-[50.5vh]  bg-slate-300'>
        
        <Image
        className='w-[100%] h-[50.5vh]'
      src="/../public/images/banner1.jpg"
      width={900}
      height={150}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt="Picture of the banner"
    />
        </div>
        <div className='h-[50.5vh] bg-slate-300'>
        <Image
        className='w-[100%] h-[50.5vh]'
      src="/../public/images/banner2.jpg"
      width={900}
      height={150}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt="Picture of the banner"
    />
        </div>
        <div className='h-[50.5vh] bg-slate-300'>
        <Image
        className='w-[100%] h-[50.5vh]'
      src="/../public/images/banner3.jpg"
      width={900}
      height={150}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt="Picture of the banner"
    />
        </div>
      </Slider>
      </div>
    );
  };
  