
import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";



export const Page=styled.div`
padding:80px 0px;
display: flex;

.left{
display: flex;
width: 40%;
flex-direction: column;
align-items: center;
    .profile{
        border-radius: #000;
        width: 350px;
        height:fit-content;
        border-radius: 5px;

        .content{
           .box-img{
                background: linear-gradient(to bottom, ${GlobalStyle.bgTheme} ,#000);
                display: flex;
                flex-direction: column;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
                width: 100%;
                height: 95px;
                padding: 32px 0;
                justify-content: center;
                align-self: start;
                .cx-img{
                    display: flex;
                    justify-content: center;
                    margin-top: 60px;
                    img{
                        height: 150px;
                        width: 150px;
                        border:1px solid  #DEDEDE;
                        box-shadow: 0 0 15px #000;
                        border-radius: 100%;
                    }
                }
           }
            h3{
                font-size: 22px;
                margin: 12px 0;
                margin-top: 60px;
                text-align: center;
            }
            .data{
               
                padding: 22px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                p{
                    .svg{
                        height: 25px;
                        margin-right: 12px;
                       fill:${GlobalStyle.bgTheme};
                       stroke: transparent;
                       padding: 6px;
                      
                    }
                    display: flex;
                    align-items: center;
                    border-bottom: 0.1px solid #ddd;
                    padding:4px 0;
                    text-decoration: none;
                    font-size: 13px;
                    
                }
            }
            .cx-btn{
                display: flex;
                justify-content: center;
                margin:22px 0;
                padding: 12px 30px;
               
            }
        }
    }
       
        }
        
        
.right{
    flex: 1;
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 950px) {
 flex-direction: column;
padding: 100px 12px;
    .left{
        width: 100%;
    }
    
}

`

export const NotCurriculum=styled.div`
width: 100%;
display: flex;
.box{
    width: 100%;
    height: 500px;
    border-radius: 22px;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    background: url('/imgs/curriculum.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;;

    .text{
    margin: 0 190px;
    color: #000;
        h3{
        font-size: 43px;
        margin: 12px 0;
        }
        p{
            margin-bottom: 18px;
        }
    a{
        text-align: center;
            width: 70%;
            border-radius: 12px;
            border: none;
            padding:12px 22px;
            transition: all ease .3s;
            color: white;
            font-size: 19px;
            margin: 32px 0;
            background-color: #387ADF;
            cursor: pointer;
            &:hover{
                background-color: #1D24CA;
            }
        }
    }
}

@media screen and (max-width:950px) {
   display: flex;
   justify-content: center;
   margin: 70px 0;
   .box{
     width:100%;
     .text{
        font-size: 19px;
        margin: 0 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
     }
   }
}
`

export const BoxCurriculum=styled.div`
width: 100%;
.top{
    display: flex;
    justify-content: end;
    padding-bottom: 9px;
    span{
        margin: 0 12px;
        padding: 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: all ease 0.3s;
        &:hover{
            color: #387ADF;
            box-shadow: 0 0 5px #222;
            outline: 1px solid #387ADF;
        }
    }
}
.header{
    padding:30px 0;
    h2{
      text-align: center;
      margin-bottom: 30px;
    }
    .info{
        display: flex;
        flex-direction: column;
        span{
            font-size: 14px;
            margin: 5px 0;
        }
    }
}

section{
    margin: 20px 0;
    h4{
        font-size: 23px;
        margin: 15px 0;
    }
    p{
        font-size: 13px;
    }
    ul{
        margin: 12px 0;
       display: flex;
       flex-wrap: wrap;

      li{
            border:1px solid #ddd;
            margin: 9px;
            border-radius: 8px;
            padding:12px;
       }
    }
    .card{
        border: 1px solid #DEDEDE;
        border-radius: 9px;
        padding: 12px;
        margin: 12px 0;
        .title{
            font-weight: bold;
            margin: 9px 0;
        }
    }
}
@media screen and (max-width:950px){
    margin: 50px 0;
}
`

export const PDFPage=styled.div`
width: 100%;
flex-direction: column;
display:none;
font-family: 'Poppins';
.data-profile{
    display: flex;
    flex-direction: column;
}
.top-pdf{
    display: flex;
    flex-direction: column;
    h2{
        font-size:45px;
        text-align: center;
        display: flex;
        justify-content: center;
        width: 100%;
        flex-direction:column;
        .office{
            font-size: 18px;
            margin: 6px 0;
        }
    }

    .ctts{
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        span{
            font-size: 15px;
            margin:3px 0;
        }
    }
}
.section{
    margin: 20px 0;
    ul{
        display: block;
        margin: 8px;
       li{
        list-style-position: inside;
        list-style: disc;
        background-color: transparent;
        border: none;
        font-size: 15px;
        text-align: start;
        color:#000;
        padding: 0;
        margin: 2px 0;
       }

    }

    .curso,.experiencia{
        margin: 12px 0;
        .title{
            text-transform: capitalize;
            font-weight: bold;
        }
    }
}

`


