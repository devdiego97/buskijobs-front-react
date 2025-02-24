import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";

export const Container=styled.div`
display: flex;
flex-direction: column;
background-color:${GlobalStyle.bgTheme};
padding:22px;
border-radius: 5px;
margin: 23px 0;
transition:all ease 0.3s;


&:hover{
    box-shadow:  0 0 22px #000;
    outline: 2px solid ${GlobalStyle.bgThemeSecondary};
}
.top{
    .header{
        display: flex;
        align-items: center;
            h5{
                font-family:'Poppins','Courier New', Courier, monospace;
                color: ${GlobalStyle.bgThemeSecondary};
                font-size: 18px;
                text-transform: capitalize;
               
            }
            span{
                opacity: 0.7;
                font-size: 10px;
                margin: 5px;
                padding: 7px;
                border-radius: 3px;
                color: #FFFF;
                background-color: ${GlobalStyle.bgThemeSecondary};
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
     
    }
}
.data-job{
    display: flex;
    p{
        margin:0 12px;
        font-weight: 800;
      font-size:14px;
      font-family: 'Poppins';
      color: #ddd;
    }
}


.divider{
 margin: 22px;
 height: 1.5px;
 background-color:${GlobalStyle.bgThemeSecondary};
}

.info{
    display: flex;
    .left{
        display: flex;
        justify-content:space-between;
        width: 70%;
        span{
            .svg{
                height:29px;
                margin-right: 5px;
               fill: ${GlobalStyle.bgThemeSecondary};
            }
           font-family: 'Poppins';
            color: #FFF;
            font-size: 10px;
            font-weight: 800;
        }
     }
    
    .right{
      padding:0 12px ;
       flex: 1;
       display: flex;
       justify-content:center;
        flex-direction: 1;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFF;
            padding:12px 22px;
            background-color: ${GlobalStyle.bgThemeSecondary};
            width: 30%;
            transition: all ease .3s;
            cursor: pointer;
            border-radius: 3px;
            &:hover{
                box-shadow:0 0 9px #181D31;
               background-color: transparent;
               color:${GlobalStyle.bgThemeSecondary};
               outline: 1px solid  ${GlobalStyle.bgThemeSecondary};
                
            }
        }
    }
}

@media screen and (max-width: 698px) {

    .top{
        .header{
            align-items: center;
            h2{
                font-size: 19px;
                justify-content: center;
            }
            span{
                font-size: 8px;
                text-align: center;
            }
        }
    }
    .info{
     flex-direction: column;
        .left{
           flex-direction: column;
            span{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 8px;
                font-size: 11px;
                text-align: justify;
              
            }
            img{
                height: 20px;
                width: 25px;
            }
        }
        .right{
            margin:12px 0;
        }
    }
}
`