import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

export const Container=styled.div`
background:linear-gradient( to right,${GlobalStyle.bgTheme},#222);
box-shadow:  0 0 5px #000;
border-radius: 5px;
color: red;
display: flex;
justify-content:space-between;
padding: 22px 12px;
margin: 12px 0;
    h3{
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 900;
        color: ${GlobalStyle.bgThemeSecondary};
        text-transform: capitalize;
        .svg{
          height: 35px;
          width: 35px;
          fill:${GlobalStyle.bgThemeSecondary};
          margin-right: 6px;
       }
    }
    small{
        color: #dede;
        font-weight:500;
        margin: 8px 0;
        font-family:'Poppins';
    }


    button{
      height: 55px;
      width: 55px;
      padding: 9px;
      border-radius: 8px;
      display: flex;
      border: none;
      justify-content: center;
      align-items: center;
      transition: all ease .3s;
      cursor: pointer;
      background-color: transparent;
      .svg{
        height: 35px;
        width: 35px;
        stroke: #DEDE;
        margin-right: 6px;
      }
      &:hover{
       border: 1px solid #DEDE;
        background-color:${GlobalStyle.bgThemeSecondary};
        .svg{
          height: 35px;
          width: 35px;
          stroke:${GlobalStyle.bgTheme};
          margin-right: 6px;
        }
      }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        h3{
            font-size: 18px;
            display: flex;
            flex-direction: column;
            .svg{
              align-self: start;
            }
        }
        p{
          font-size: 15px;
        }
        .right{
            display: flex;
            justify-content: end;
        }
    }
  

  `