import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";

export const Container=styled.div`
background:linear-gradient( to right,${GlobalStyle.bgTheme},#222);
box-shadow:  0 0 5px #000;
border-radius: 5px;
color: red;
display: flex;
justify-content:space-between;
padding: 22px 12px;
margin:12px 0;
    h3{
       font-size: 18px;
       text-transform: capitalize;
       color: ${GlobalStyle.bgThemeSecondary};
    }
    .company{
        font-size: 15px;
        margin: 12px 0;
    }
    small{
      display: block;
        color: #dede;
        font-weight:500;
        margin: 8px 0;
        font-family:'Poppins';
       font-style: italic;
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
        outline: 1px solid #DEDE;
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
            font-size: 20px;
        }
        .right{
            display: flex;
            justify-content: end;
        }
    }
    
`