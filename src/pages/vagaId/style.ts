import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";


export const Page=styled.div`
padding: 0 12px;

.pcd-line{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
   p{
        font-family: 'Montserrat';
        color: gray;
        font-weight:300;
       
    }
    .cx{
        display: flex;
        align-items: center;
        justify-content:space-between;
        margin: 12px 0;
        font-size: 13px;
        padding: 12px;
        font-weight: bold;
        color: #222;
        .svg{
            height: 25px;
            fill:${GlobalStyle.bgTheme};
            width: 25px;
            margin-right: 12px;
        }
    }
    
}
p{
    margin: 10px 0;
    font-size: 17px;
    font-family: 'Poppins';
    font-weight: 700;
   
}
.header-page{
    h3{
        font-size: 33px;
        margin: 90px 0;
        display: flex;
        align-items: center;
        
        
        span{
            background-color: ${GlobalStyle.bgTheme};
            font-size: 11px;
            box-shadow: 5px 5px 0 ${GlobalStyle.bgThemeSecondary};
            color:white;
            color: ${GlobalStyle.bgThemeSecondary};
            padding: 8px 8px;
            border-radius:12px;
            margin-left: 20px;
        
        }
   }
   .smalls{
    display:flex;
    flex-direction:column;
        small{
            font-size: 11px;
            text-decoration:underline;
            
            color: #aaa;
        }
   }

}

.share-links{
    padding: 20px;
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
export const SectionDetailsJobs=styled.div`
margin: 70px 0;
.card-detail{
        .card-title{
            font-size: 20px;
            box-shadow: 12px 12px 0 ${GlobalStyle.bgThemeSecondary};
            border-radius: 5px;
            color: ${GlobalStyle.bgThemeSecondary};
            padding: 12px 22px;
            display: flex;
            font-weight:600;
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
           
            p,li{
                font-size: 15px;
                list-style: circle;
                text-transform:unset;
                font-weight:500;
                font-family: 'Poppins';
            }
            .card-contrato{
                    text-transform: uppercase;
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
            padding:20px 0;
                p{
                   
                    padding: 12px;
                    font-size: 15px;
                    font-weight: 500;
                    
                    font-family: 'Poppins';
                }
              
                h3{
                    font-family: 'Roboto',Arial, Helvetica, sans-serif;
                    font-size:20px;
                    color:grey;
                    font-weight: bold;
                    
                }
           }
        
        }
       .cx-link{
        display: flex;
        justify-content: end;
        align-items: center;
        margin: 50px 0;
        a{
            color: gray;
            font-size: 15px;
            padding: 12px 23px;
           transition: all ease .3s;
            &:hover{
                color: ${GlobalStyle.bgTheme};
                text-decoration: underline;
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

    

@media screen and (max-width:780px) {
    .card-detail{
        border:none;
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
                        display:flex;
                        justify-content:center;
                    }
                    p{
                        text-align:justify;
                    }
                   
                   
            }
        
        }
        .cx-link{
               margin:22px 0;
               padding:0;
               display:flex;
                padding:0;
                text-align:center;
                justify-content:center;
               a{
                display:flex;
                padding:0;
                text-decoration:underline;
                margin-bottom:12px;
                text-align:center;
                justify-content:center;
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
margin:185px 0;
h3{
    font-family: 'Roboto',Arial, Helvetica, sans-serif;
    font-size: 22px;
    font-weight: 900;
}

p{
    font-weight: 500;
    font-size: 16px;
    margin:8px 4px;
    font-family: 'Poppins';
}


@media screen and (max-width:950px) {
    margin: 0;
    padding: 0;
    h3{
        font-size: 23px;
        font-weight: 900;
    }
}
`