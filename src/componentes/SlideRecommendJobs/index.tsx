import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { IJob } from '../../interfaces/job';
import './style.css'
import { baseURL } from '../../config/axios.config';
import { Link } from 'react-router-dom';

type Props={
    jobsData:IJob[],
}

export default ({jobsData}:Props)=>{
  useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }, []);
    
      return <div className="swiper-container">
          <div className="swiper-wrapper">
            {
                jobsData.map((j,k)=>(
                  <div key={k} className="swiper-slide">
                    <img src={j.company.logo !== null ? `${baseURL}public/images/${j.company?.logo}` : 'assets/icons/company-logo.png'} alt="" />
                    <h3>{j.title}</h3>
                    <p>{j.location}</p>
                    <p>{j.company.name}</p>
                    <Link to={`/vagas/${j.id}`}>ver vaga</Link>
                  </div>
                ))
            }
           
          </div>
          <div className="swiper-pagination"></div>
        </div>
      
}