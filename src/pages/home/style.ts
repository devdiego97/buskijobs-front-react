import { GlobalStyle } from "../../globalStyle";
import  styled  from "styled-components";



export const Page=styled.div`
margin-bottom: 100px;
display: flex;
justify-content: center;
.content{
    
    .banner{
        height: 570px;
        width: 100%;
            img{
                height: 100%;
                width:100%;
            }
    }
    
}


@media screen and (max-width:850px){
    width: auto;
    margin-bottom:300px;
    height: auto;
    .content{
        padding:0px;
   
    }
    .banner{
       
        width: 100%;
        height:350px;
        margin-bottom: 50px;
    }
} 

`

export const ContainerOne=styled.section`
 height: 800px;
  display: flex;
  margin-bottom: 50px;
 justify-content: center;
        
        .left{
            padding: 100px 0;
            width: 60%;
            h2{
                font-size: 43px;
                font-family:'Segoe-UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            p,a{
                margin:32px 0;
                font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
                font-size:19px;
                font-weight: 500;
            }
            .list{
                font-size: 17px;
            }
            button{
                width: 60%;
                border:none;
                border-radius:12px;
                color: #FFF;
                font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
                background-color: ${GlobalStyle.bgTheme};
                margin: 39px 0;
                transition: all ease .3s;
                font-size: 23px;
                padding: 32px 22px;
                cursor: pointer;
                &:hover{
                    box-shadow:  0 0 22px ${GlobalStyle.bgTheme};
                   outline:2px solid  ${GlobalStyle.bgThemeSecondary};
                }
              
            }
            

        }
        .right{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
           
            img{
                height:650px;
                width: 80%;
                border-radius:35px 23px;
            }
        }


 @media screen and (max-width:850px){
    flex-direction: column;
    padding:0 12px;
    margin: 390px 0;
    .left{
        justify-content: center;
        width: 100%;
        h2{
            font-size: 30px;
        }
    }
    .left{
        p,ul,li{
                margin:32px 12px;
                font-family: 'Poppins';
                font-size: 18px;
                font-weight: 800;
            }
       button{
        width: 100%;
        font-size: 18px;
       }
       
        
    }
    .right{
        margin-bottom: 90px;
        img{
            width: 80%;
            height: 438px;
        }
    }
} 


`

export const ContainerTwo=styled.section`

display: none;
flex-direction:column;
justify-content: center;
margin: 160px 0;

h3{
    font-size: 32px;
    text-align: center;
    color: #aaa;
}

.cxs{
    margin:50px 70px;
    height: 600px;
    display: flex;
    .cx-image{
       width: 50%;
       img{
        width: 100%;
        height: 100%;
       }
    }
    .itens{
        background-color: ${GlobalStyle.bgTheme};
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 33px 0;
        h4{
            font-size: 22px;
            color:${GlobalStyle.bgThemeSecondary};
            font-weight: 800;
            margin-left: 20px;
            font-family: 'Segoe-UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        ul{
            margin: 30px 0;
            font-size: 21px;
           
            li{
                margin: 32px 0;
                color:${GlobalStyle.bgThemeSecondary};
                color: white;
                list-style: disc;
                list-style-position:inside;
                font-weight: 500;
                font-size: 16px;
                font-family:'Segoe-UI', Tahoma, Geneva, Verdana, sans-serif;
            }
        }
        a{
              transition: all ease .2s;
              display: flex;
              justify-content: center;
              align-items: center;
                width: 70%;
                border-radius: 2px;
                font-size: 19px;
                cursor: pointer;
                padding: 32px 22px;
                background-color: #8696FE;
                border:none;
                color: #FFF;
                font-weight: 700;
                &:hover{
                    background-color: #4942E4;
                }
            }
    }
     
}

@media screen and (max-width: 850px) {
    width: 100%;
   height: auto;
   margin-bottom: 60px;
  background-color: ${GlobalStyle.bgTheme};
    h3{
        display: none;
        padding:32px 8px;
        text-align: center;
        color: #FFF;
    }
    h4{
        font-size: 22px;
        padding: 18px;
    }
    .cxs{
        margin:50px 12px;
        height: auto;
        flex-direction: column;
        box-shadow:none;
        .cx-image{
          width:100%;
        }
        .cx-image{
            height: 350px;
            img{
                border-radius: 5px;
            }
        }
        .itens{
            padding: 12px;
            li{
                font-size: 18px;
                font-weight: 800;
                margin: 8px 0;
            }
            a{
                font-size: 15px;
                border-radius: 8px;
                width: 90%;
                font-family: 'Montserrat', sans-serif;
            }
        }
    }
}
`

export const ContainerTrue=styled.div`
min-height: 600px;
margin: 50px 0;
display: flex;

.cx-image{
    flex: 1;
    display: flex;
    align-items: center;
    img{
        width: 100%;
        height: 100%;   
    }
}
.info{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    padding: 0 22px;
    h3{
        font-size: 34px;
        margin: 22px 0;
        font-weight: 800;
        font-size: 43px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }
  
    p,a{
         margin:32px 0;
          font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
          font-size:19px;
        font-weight: 500;
    }
    .list{
        font-size: 17px;
    }
       
        a{
                width: 60%;
                display: flex;
                justify-content: center;
                align-items:center;
                border:none;
                border-radius:12px;
                color: #FFF;
                background-color: ${GlobalStyle.bgTheme};
                margin: 39px 0;
                font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
                transition: all ease 0.3s;
                font-size: 23px;
                padding: 32px 22px;
                cursor: pointer;
                &:hover{
                    box-shadow:  0 0 22px ${GlobalStyle.bgTheme};
                   outline:2px solid  ${GlobalStyle.bgThemeSecondary};
                }
              
            }
}

@media screen and (max-width: 850px) {
    flex-direction: column;
    padding: 22px;

    .cx-image{
        height: 700px;
    }
    .info{
      width: auto;
      padding: 0 12px;

        h3{
            font-size: 900;
            font-size: 29px;
        }
        li{
            font-size:18px;
        }
        a{
            width: 80%;
            font-size: 18px;
        }
       
    }
}

`