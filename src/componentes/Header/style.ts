import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

type props={
    activeMobile:boolean
}

export const Container=styled.header<props>`
height: 95px;
background-color:${GlobalStyle.bgTheme};
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 20px;
z-index: 0;
.left{
.bg-img img{
        width:210px;
        height:100px;
        
    }
}
.cx-btn{
      display: none;
      button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${GlobalStyle.bgThemeSecondary};
        border: none;
        height: auto;
        border-radius: 3px;
        padding: 8px;
        img{
          height: 30px;
         }

      }
    }

nav{
   
    .close-menu{
        display: none;
        position: fixed;
        justify-content: flex-end;
        top: 0;
        width:auto;
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${GlobalStyle.bgThemeSecondary};
            border: none;
            height: auto;
            border-radius: 3px;
            padding: 8px;
            

            img{
              height: 30px;
            }
        }
    
    }
    .links{
        display: flex;
      
        a{
            font-weight:bold;
            font-size: 14px;
            font-family: 'Poppins';
            margin:0 12px;
            color: #DEDEDE;
            display: flex;
            align-items: center;
            padding: 15px 24px;
            border-radius: 3px;
            transition:all ease 0.2s;
            img{
                height: 35px;
                width: 35px;
                border-radius: 100%;
                margin-right: 12px;
            }
            .svg{
                height: 22px;
                stroke:white;
                margin-right: 7px;
            }
            &:hover{
                background-color:${GlobalStyle.bgThemeSecondary};
                color: ${GlobalStyle.bgTheme};
                .svg{
                  height: 22px;
                  stroke: ${GlobalStyle.bgTheme};
                }
            }
        }
    }
}



@media screen and (max-width: 950px) {
    padding: 7px 8px;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: space-between;
    right: 0;
    margin-bottom:100px;
    z-index: 1;
    .right {
        .cx-btn{
            display:${props=>props.activeMobile === false ? 'flex' : 'none'};
        }
        nav{
            .close-menu{
                display: flex;
                justify-content: start;
                position: absolute;
                background-color: ${GlobalStyle.bgThemeSecondary};
                width:${props=>props.activeMobile ? '40vw' : '0'};

                button{
                    display:${props=>props.activeMobile === true ? 'auto' : 'none'};
                }
 }
            z-index: 1;
            display:${props=>props.activeMobile === true ? 'auto' : 'hidden'};
            transition: all ease .3s;
            padding: 110px 0;
            position: fixed;
            bottom: 0;
            width:${props=>props.activeMobile ? '40vw' : '0'};
            top: 0;
            right: 0;
            height: 100vh;
            background-color:#0F1035;
            .links{
                display:${props=>props.activeMobile ? 'auto' : 'none'};
                flex-direction: column;
                a{
                    font-size: 15px;
                    padding: 22px;
                    display: flex;
                    justify-content: center;
                    width:${props=>props.activeMobile ? 'auto' : ''};
                    margin:0;
                    border-radius: 0;
                    border-top: 1px solid #DEDEDE;
                }
            }
        }
    }


}
`