import { GlobalStyle } from './../../globalStyle';
import styled from "styled-components";


export const Container=styled.div`
    height:100vh;
    width: 100vw;
    display: flex;
   
    @media screen and (max-width:950px) {
        display: block;
        width: 100vw;
    }

`
export const HeaderPainel=styled.header`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    left:0;
    box-shadow: 0 0 12px #000;
    height: 100vh;
    width: 16vw;
    background:linear-gradient(to bottom,${GlobalStyle.bgTheme} 40%,#000);
    .cx-btn{
        display: none;
    }
    .logo{
        .cx-img img{
        width: 270px;
        height:110px;
    
    }
        p{
            font-size: 19px;
            font-weight: 700;
            text-shadow: none;
            text-align: center;
            font-family: 'Poppins';
            color:${GlobalStyle.bgThemeSecondary};
        }
    }
    nav{
        display: flex;
        flex-direction: column;
        font-size: 15px;
        margin: 30px 0;
        margin-bottom: 13px;
        a{
            display: flex;
            align-items: center;
            text-align: center;
            padding:15px 22px;
            color: #FFF;
            font-size: 13px;
            margin: 5px 0;
            transition: all ease 0.3s;
            border-radius: 3px;
            font-family: 'Poppins';
           font-weight: 300;
           border:1px solid transparent;
           border-bottom:1px solid ${GlobalStyle.bgThemeSecondary};
           .svg{
                height:17px;
                width:17px;
                stroke:#fff;
                margin-right: 12px;
           }
           .fill{
               height:17px;
                width:17px;
               fill:#fff;
                margin-right: 12px;
           }
            &:hover{
                border:1px solid ${GlobalStyle.bgThemeSecondary};
                background-color:#430A5D;
                border-top-right-radius: 12px;
                border-top-left-radius: 12px;
                color: ${GlobalStyle.bgThemeSecondary};
              .svg{
                stroke: ${GlobalStyle.bgThemeSecondary};
              }
              .fill{
                fill: ${GlobalStyle.bgThemeSecondary};
              }

            }
        }
    }

    @media screen and (max-width:950px) {
        display: flex;
        height: 50px;
       
        //position: static;
        .logo{
            //display: none;
            font-size: 15px;
            .svg{
                height:25px;
                width:25px;
            }
        }
        nav{
            background-color: red;
            display: none;
            position: fixed;
            right: 0;
            background-color: red;
            width: 60vw;
            height:100vh; 
            margin: 0;
            .links{
                padding: 100px 0;

            }

        }
    }
`
type Props={
    p?:string
}
export const Main=styled.main<Props>`
display: flex;
margin-left: 100px;
padding:${props=>props.p ? props.p : ' 22px'};
flex: 1;
padding-left:60px;
font-size: 15px;

flex-direction: column;
min-height: 800px;

@media screen and (max-width:750px) {
    margin-left: 0;
    width: 100vw;
    padding: 22px 0px;
}
`