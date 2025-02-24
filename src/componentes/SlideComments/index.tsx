import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ContainerSlide } from './style'
import { Avatar, Card, Divider, HStack ,Text, VStack} from 'rsuite'


interface IDepoiments {
  id:number,
  name:string,
  depoimento:string,
  office:string
}

interface SlideCardCarouselProps {
 depoiments:IDepoiments[]
}

export const SLideComments: React.FC<SlideCardCarouselProps> = ({ depoiments }) => {
  const settings = {
     dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    arrows:false,
    waitForAnimate: false,
    slidesToScroll:1,
    autoplaySpeed: 2200,
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
        {depoiments.map((b, index) => (
          <Card size='sm' key={index} className="slide-card">
            <Card.Header>
                <VStack>
                  <HStack>
                    <Avatar size='lg' src="https://i.pravatar.cc/150?u=2" circle />
                    <Text >{b.name}</Text>
                  </HStack>
                  <Text as='small' color='cyan'>{b.office}</Text>
                </VStack>
                <Divider></Divider>
                <HStack className='bx-txt'>
                  <Text >
                      {b.depoimento}
                  </Text>
                </HStack>
            </Card.Header>

          </Card>
        ))}
      </Slider>
    </ContainerSlide>
  );
};


