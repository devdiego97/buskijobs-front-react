import { GlobalStyle } from './../../globalStyle';
import styled from "styled-components";


export const Page=styled.div`
margin: 50px 0px;
display: flex;
align-items: center;
flex-direction: column;
.form{
    width: 100%;
    padding: 22px;
  
    fieldset{
        padding: 12px;
        margin: 18px 0;
        legend{
         font-size: 22px;
         font-weight: 33px;
         font-weight: 700;
         font-family: 'Arial';
         display: flex;
         align-items: center;
         .svg{
            height: 45px;
            width: 45px;
            margin:0 3px;
         }
         .stroke{
            fill:${GlobalStyle.bgTheme};
         }
      
         
         span{
            font-size: 14px;
            margin: 0 12px;
            cursor: pointer;

           &:hover{
            text-decoration: underline;
            color: #387ADF;
           }
         }
        }
       
        
           
    }
}

@media screen and (max-width:850px){
    margin: 50px 0px;
    form{
        width: 100%;
        .cx-state-city{
            flex-direction: column;
            div{
                margin: 8px 0;
            }
        }
    }
}
`