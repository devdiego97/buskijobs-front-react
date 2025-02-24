
import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";


export const Page=styled.div`

.header-page{
    height:380px;
    background-color: #F0F3FF;
    border-bottom: 1px solid #DEDE;
    background: linear-gradient(to bottom,#000,${GlobalStyle.bgTheme});
        .logo-name{
            position:absolute;
            left: 150px;
            top: 345px;
            display: flex;
            align-items: center;
            img{
              height: 155px;
               width: 155px;
               box-shadow: 0 0 8px #222;
             }
            h2{
                    margin:22px;
                    padding:33px 22px;
                    font-size: 45px;
                    color: ${GlobalStyle.bgThemeSecondary};
            }
        }

    }

    .content{
        padding: 150px ;
        section{
            margin: 30px 0;
            h3{
                font-size: 33px;
                margin: 30px 0;
            }
        }
        .vagas{
            margin:100px 0;
            margin-bottom: 300px;
          
              
                fieldset{
                    padding: 22px;
                    margin: 50px 0;
                    legend{
                        display: flex;
                        align-items: center;
                        font-size: 19px;
                        color:${GlobalStyle.bgTheme};
                        .svg{
                            height: 25px;
                            fill: ${GlobalStyle.bgThemeSecondary};
                        }
                    }
                    #filters{
                            display: flex;
                            justify-content: space-around;
                            align-items:center;
                        
                        }
            }
}
        }
            .cards-vagas{
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(3,1fr);
                margin: 100px 0;
            }
        

    
    .links{
        padding: 50px;
        border: 3px solid ${GlobalStyle.bgThemeSecondary};
        border-radius:22px;
        box-shadow: 0 0 22px #222;
        margin: 280px 0;
        background-color:${GlobalStyle.bgTheme};
        h3{
            color:${GlobalStyle.bgThemeSecondary};
            font-size: 20px;
        }
        .icons-links{
            display: flex;
            align-items: center;
            margin: 20px 0;
            a{
                display: flex;
                justify-content: center;
                align-items: center;
                color: grey;
                margin: 0 22px;
                font-size: 15px;
                cursor: pointer;
                .svg{
                    height: 35px;
                    width: 35px;
                    stroke: grey;
                }

                &:hover{
                    color:${GlobalStyle.bgThemeSecondary};
                    .svg{
                        stroke:${GlobalStyle.bgThemeSecondary};
                    }
                }
            }
        }
    }

.card-job{
    padding:12px;
    transition: all ease 0.3s;
    margin: 12px 0;
    font-family: Poppins;
    .smalls{
        margin: 5px 0;
    }
 
   

}

@media screen and (max-width:820px) {
    .header-page{
        .logo-name{
            top: 190px;
            display: flex;
            flex-direction:column;
            left: 50%;
             right: 50%;
            
            h2{
                font-size: 23px;
                text-align:justify;
            
            }
        }
    }
    .content{
        padding: 150px 32px;
        section{
            h3{
                font-size: 22px;
                text-align: center;
                font-weight:bold;
            }
      }
      margin:20px 20px; 

     .vagas{
        margin: 150px 0;
                fieldset{
                    padding: 12px;
                    #filters{
                        display:grid;
                        justify-content: center;
                    
                    }
                }
        
        .cards-vagas{
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 500px;
            margin: 12px 0;
       }
     }
    }
    .links{
        h3{
            font-size: 15px;
        }
        .icons-links{
            flex-direction: column;
            a{
                width: 50vw;
                justify-content: start;
            }
        }
    }
    
   
}
`

