import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";


export const Page=styled.div`
padding: 12px;
margin-bottom: 100px;

p{
    margin: 10px 0;
    font-size: 17px;
    font-family: 'Poppins';
    font-weight: 700;
    color: gray;
}
.header-page{
    h3{
    font-size: 29px;
    display: flex;
    align-items: center;
    span{
        box-shadow: 5px 5px 0 ${GlobalStyle.bgThemeSecondary};
        background-color: ${GlobalStyle.bgTheme};
        font-size: 11px;
        color:white;
        padding:8px  12px;
        border-radius: 9px;
        margin-left: 20px;
    }
}

}
@media screen and (max-width:850px) {
    margin: 10px 0;
    margin-bottom: 100px;
    .header-page{
        h3{
            flex-direction: column;
        }
    }
}
`
export const SectionDetailsJobs=styled.section`

.data-application{
    margin: 82px 0;
    display: flex;
    flex-direction: column;
    small{
        color: grey;
    }
}
.card-detail{
        .card-title{
            font-size: 20px;
            box-shadow: 12px 12px 0 ${GlobalStyle.bgThemeSecondary};
            border-radius: 5px;
            color: ${GlobalStyle.bgThemeSecondary};
            padding: 12px 22px;
            display: flex;
            align-items: center;
            background-color:${GlobalStyle.bgTheme};
            .svg{
                height: 45px;
                width: 45px;
                stroke: ${GlobalStyle.bgThemeSecondary};
            }
        }
        .card-body{
            padding:22px;
            font-size: 16px;
            p,li{
                list-style: circle;
                text-transform:unset;
                font-weight:500;
                font-size: 15px;
                font-family: 'Poppins';
            }
           
        }
        .card-body-company{
            display: flex;
            padding:32px 0;
            align-items:center;
            .cx-img{
                display: flex;
                justify-content:center;
                width:20%;
                img{
                    height:160px;
                    width:160px;
                    border-radius: 100%;
                }
            }
           .data{
            flex:1;
                p{
                    padding: 12px;
                    font-weight: 500;
                    color: #aaa;
                    font-size: 15px;
                    font-family: 'Poppins';
                }
              
                h3{
                    font-family: 'Montserrat';
                    font-size:20px;
                    font-weight: bold;
                }
           }
        }
    }
    .actions{
      padding:0 12px ;
       flex: 1;
       margin: 33px 0;
       display: flex;
       justify-content:center;
        flex-direction: 1;
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            padding:22px 22px;
            font-size: 17px;
            background-color:#3559E0;
            width: 30%;
            transition: all ease .3s;
            cursor: pointer;
            border-radius: 13px;
            border: none;
            &:hover{
                background-color:#0D1282;
                box-shadow: 0 0 12px #aaa;
                color:white;

            }
        }
    
    }

@media screen and (max-width:950px) {
    .card-detail{
        .card-body-company{
            flex-direction: column;
            .cx-img{
                width: 100%;
                margin:20px 0;
                img{
                    width: 255px;
                    height: 255px;
                    border-radius: 100%;
                }
            }
            .data{
                margin: 12px 0;
                h3{
                    text-align: center;
                }
                p{
                    text-align:justify;
                }
            }
        }
    }

    .actions{
        margin:0;
        button{
            width:80%;
        }
    }
}




`
export const ShareLinks=styled.div`
    margin: 90px 0;
    width: 70%;
    background-color: #eee;
    padding: 12px;
    display: flex;
   
    
    div{
        font-size: 18px;
        font-family: 'Poppins';
        display: flex;
        align-items: center;
        margin: 12px;
        button{
            margin: 5px;
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        background-color: transparent;
        flex-direction: column;
        padding:0;
        margin:85px 0;
        font-size: 14px;
        height: max-content;
       .btns{
        width: 100%;
          button{
            margin: 3px;
            height:15px;
            width: 215px;
          }
       }
    }
`


export const SectionJobsSimilar=styled.div`
margin:85px 0;
h3{
    font-family: 'Roboto';
    font-size: 122px;
    color: #272829;
    font-weight: 900;
}

p{
    font-weight: 800;
    font-size: 16px;
    margin:8px 4px;
    font-family: 'Poppins';
}


@media screen {
    margin: 0;
    padding: 0;
    h3{
        font-size: 23px;
        font-weight: 900;
    }
}
`