import styled from "styled-components";
import { GlobalStyle } from "../../../globalStyle";




export const Page=styled.div`

.header-page{
    height:370px;
    border-bottom: 1px solid #DEDE;
    background:linear-gradient(to right,${GlobalStyle.bgTheme},#000);
        .logo-name{
                position:absolute;
                left: 400px;
                top: 210px;
                display: flex;
                align-items: center;
                img{
                height: 200px;
                border-radius: 9px;
                outline:1px solid ${GlobalStyle.bgThemeSecondary};
                width: 200px;
                box-shadow: 0 0 12px;
            }
            h2{
                margin: 0 22px;
                padding: 22px;
                color: white;
                font-size: 25px;
            }
        }
        .actions-company{
            display:flex;
            padding: 20px;
            right: 0;
            justify-content: end;
            align-items: center;
            transition: all ease 0.3s;
            a,button{
                margin: 0 32px;
                background-color: transparent;
                color: white;
                cursor: pointer;
                font-size: 13px;
                border-radius: 9px;
                padding: 6px 33px;
                outline: 1px solid white;
                transition:all ease 0.2s;
                &:hover{
                    color: ${GlobalStyle.bgThemeSecondary};
                    box-shadow: 0 0 12px #000;
                    outline: 1px solid  ${GlobalStyle.bgThemeSecondary};
                }
            }
        }

    }

    .content{
        margin-left: 70px;
        padding: 150px;
        section{
            margin: 30px 0;
            h3{
                font-size: 23px;
                margin: 30px 0;
            }
        }
        .vagas{
            margin: 50px 0;
            .cards-vagas{
                margin: 70px;
                h4{
                    font-size: 15px;
                 
                }
                .tabs-vagas{
                    display: grid;
                    grid-template-columns: repeat(3,1fr);
                }
               
            }
        }

        .not-jobs{
            a{
                margin: 0 12px;
                text-decoration: underline;
                &:hover{
                    color: blue;
                }
            }
        }
    }


@media screen and (max-width:820px) {
    width: 100%;
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
        padding: 150px 12px;
        section{
            h3{
                font-size: 22px;
                text-align: center;
                font-weight:bold;
            }
     
      }
      .vagas{
            .card-vagas{
                margin:auto 0px;
            }
       }
    }
}
`
type props={
    urlImg:string
}
export const BoxBgImg=styled.div<props>`
   height: 200px;
  border-radius: 9px;
  width: 200px;
  box-shadow: 0 0 12px;
  background-image: url(${props=>props.urlImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
export const CardJobCompany=styled.div`
padding: 22px 33px;
border-radius: 9px;
border-bottom: 1px solid #dede;
display: flex;
justify-content: space-around;
margin: 12px 0;
align-items: center;
transition: all ease .3s;
margin: 12px 0;

.job-details{
    h4{
        font-size: 20px;
    }
    p{
        margin: 5px;
        font-size: 11px;
        color: #aaa;
    }
}
&:hover{
    background-color: #DEDEDE;
}
a{
    outline: 1px solid #0C359E;
    transition: all ease .3s;
    color: #0C359E;
    font-weight: 600;
    padding: 6px 33px;
    border-radius:13px;
    font-size: 13px;
    &:hover{
        outline: 1px solid white;
        background-color: #0C359E;
        color: white;
   }

}
@media screen and (max-width:950px){
    padding: 12px 9px;
    width:auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    font-size: 13px;
    .job-details{
        h4{
            font-size: 16px;
        }
    }
    a{
        padding: 12px 9px;
        margin: 30px 0;
        background-color: red;
        font-size: 13px;
        border-radius: 7px;
        width: 60%;
        text-align: center;
    }
}



`

