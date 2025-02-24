import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";
import  HomePageImg from './../../../public/imgs/homepage.png'

export const Page=styled.div`
    height: 959px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(${HomePageImg});
        background-color:rgba(28, 26, 27, 0.89);
    
  form{
        min-height: 500px;
        padding: 22px;
        width: 600px;
        margin-top: 20px;
        border-radius:5px;
        background: rgba(28, 26, 27, 0.67);
    

        h3,label{
            margin:4px 0;
            color: ${GlobalStyle.bgThemeSecondary};
        }
        p{
            color: white;
        }
  }  

@media screen and (max-width: 768px) {
    padding: 150px 12px;
}
`

