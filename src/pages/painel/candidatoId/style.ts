import { GlobalStyle } from "../../../globalStyle";
import styled from "styled-components";


export const Page=styled.div`
margin:50px 40px;
*{
    font-family:'Poppins', sans-serif, 'Roboto';
    h3{
       font-family:'Poppins', sans-serif, 'Roboto';
    }
    p{
        font-size: 15px;
        font-weight: 500;
        text-align: justify;
    }

}
@media screen and (max-width:780px){
    margin:50px 10px;
}
`

export const HeaderPage=styled.div`
display: flex;
flex-direction: column;
.top{
    display: flex;
    font-size: 32px;
    align-items: center;
    .svg{
        height: 45px;
        fill: ${GlobalStyle.bgThemeSecondary};
    }
    img{
        height: 155px;
        box-shadow: 0 0 14px #000;
        width: 155px;
        margin-right: 23px;
        border-radius: 100%;
    }
    h3{
        font-size: 27px;
    }
    span{
        font-size: 12px;
        margin:0 12px;
        font-weight: bold;
        padding:12px 23px;
        border-radius: 33px;
        color:${GlobalStyle.bgTheme};
        background-color: ${GlobalStyle.bgThemeSecondary};
        border: 1px solid ${GlobalStyle.bgTheme};
    }
}
.divider{
    display: none;
    height: 1.25px;
    margin:19px 130px;
    background-color: #DEDEDE;
}
.ctts{
   display :flex ;
   flex-direction: column;
   align-items: center;
   .title{
    text-align: center;
    font-weight: 800px;
    margin: 22px 0;
   }
   .links{
    display :flex;
    justify-content: center;
    align-items: center;
    a{
        margin: 12px;
        transition: all ease .3s;
        .svg{
            height: 35px;
            width: 35px;
        }
        &:hover{
            padding: 12px;
            border-radius:12px;
            background-color: ${GlobalStyle.bgThemeSecondary};

        }
    }
   }
}

@media screen and (max-width:780px){
  .top{
    flex-direction: column;
    h3{
        font-size: 22px;
        margin:12px 0;
        font-weight: 900;
    }
    span{
        background-color: #aaa;
        padding: 12px;
        border-radius: 12px;
    }
  }
}

`

export const Section=styled.section`

padding-bottom: 30px;
margin: 40px 0;
.title-section{
    font-size: 28px;
    font-family:'Roboto',Arial, Helvetica, sans-serif;
    font-weight: 700;
    margin: 24px 0;
   display: flex;
   align-items: center;
   border-bottom: 1px solid #dedede;
   padding-bottom: 12px;
    .svg{
        height: 45px;
        width: 45px;
        background-color: ${GlobalStyle.bgThemeSecondary};
        border-radius: 100%;
        margin-right: 8px;
        fill: ${GlobalStyle.bgThemeSecondary};
      
    }

}



&.skills{
   display: flex;
  flex-direction: column;
   ul{
    list-style: disc;
    display:flex;
    flex-direction: row;
    li{
        font-weight: 900;
        border-radius: 5px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        color:${GlobalStyle.bgThemeSecondary};
        background-color: ${GlobalStyle.bgTheme};
        border: 2px solid ${GlobalStyle.bgThemeSecondary};
        padding: 9px 12px;
        margin: 2px;
   }
   }

}

.xp{
    font-size: 20px;
    font-weight:bold;
  
}
`