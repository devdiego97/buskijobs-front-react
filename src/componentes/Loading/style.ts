
import { styled } from "styled-components";
import { GlobalStyle } from "../../globalStyle";


export const Container=styled.div`
width:auto;
height: 100vh;
display: flex;
justify-content: center;
.card{
    width: 70%;
    margin: 100px 0;
    height: 140px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${GlobalStyle.bgTheme};
  p{
    text-align: center;
    
  }
    
}


`