
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ContainerSlide } from './style'
import { Link } from 'react-router-dom'
import { IJob } from '../../interfaces/job'

interface SlideCard {
  id:number
  title: string
  location: string
  salary: number
}

interface SlideCardCarouselProps {
  cards: IJob[]
}

const SlideCardCarousel: React.FC<SlideCardCarouselProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <ContainerSlide className="slide-card-carousel">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="slide-card">
            {/*<img src={card.imageUrl} alt={`Slide ${index}`} />*/}
            <h3>{card.title}</h3>
            <p>R$ {card.salary?.toString().replace('.',',')}</p>
            <p>{card.city}</p>
            <div className="divider"></div>
            <Link to={`/vagas/${card.id}`}>ver vaga</Link>
          </div>
        ))}
      </Slider>
    </ContainerSlide>
  );
};

export default SlideCardCarousel;
