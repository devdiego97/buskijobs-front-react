import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ContainerSlide } from './style'



interface SlideCard {
  id:number,
 img:string
}

interface SlideCardCarouselProps {
  banners: SlideCard[];
}

export const BannerSlide: React.FC<SlideCardCarouselProps> = ({ banners }) => {
  const settings = {
   // dots: true,
    fade:true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    arrows:false,
    slidesToScroll:1,
    autoplaySpeed: 2100,
    responsive: [
        {
          breakpoint: 768, // Quando a largura da tela for 768 pixels ou menos
          settings: {
            slidesToShow: 1, // Mostra 1 div por vez em telas menores
            slidesToScroll: 1, // Rolagem de 1 div por vez em telas menores
          }
        }
      ]
  };

  return (
    <ContainerSlide  className="slide-card-carousel">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="slide-card">
           <img src={banner.img} alt={`Slide ${index}`} />
           <div className="cx-img"></div>

          </div>
        ))}
      </Slider>
    </ContainerSlide>
  );
};


