
import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";

export const ContainerSlide=styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  


    .slide-card {
    border-radius: 3px;
    text-align: center;
    padding:35px  20px;
    height: auto;
    background-color: #ffffff;
    background:linear-gradient(to bottom, ${GlobalStyle.bgTheme}, #000);
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
  
  .slide-card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .slide-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color:${GlobalStyle.bgThemeSecondary};
  }
  
  .slide-card p {
    color: #8CABFF;
    font-size: 1rem;
    font-family: 'Poppins';
  }

  .divider{
    height: 1.5px;
    background-color: ${GlobalStyle.colorTitles};
    margin: 30px 0;
  }

  a{
    padding: 19px 120px;
    margin: 28px 0;
    color: #EEE;
    background-color: #8CABFF;
    border-radius: 3px;
    &:hover{
      background-color: #4477CE;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .slide-card {
      margin: 0;
      min-height: 350px;
      background-color: #ffffff;
      border: 1px solid #ccc;
      a{
        padding: 18px;
        width: 80%;
      }
     
  }
  }

`