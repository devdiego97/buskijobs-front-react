import { GlobalStyle } from "../../globalStyle";
import { styled } from "styled-components";

type Props={
    bgTheme?:string
    onModuleBody?:boolean,
    activeButton?:boolean;
}

export const Page=styled.div<Props>`
padding: 100px 25px;
min-height: 100vh;
h3{
    font-size: 25px;
}


 .li{
        width: inherit;
    }


.player-tools{
    display: flex;
    height:570px;
    margin: 50px 0;
    .player{
        width: 60%;
        margin-right: 20px;
        padding: 15px;
        height: 100%;
        .cx-player{
            width: 100%;
            height: 100%;
            border-radius: 9px;
            box-shadow: 0 0 22px #000;
            border: 1px solid #aaa;
            iframe{
                height: 100%;
                width: 100%;
                
            }
           
        }
        
          video{
            height: 100%;
            border-radius: 9px;
            box-shadow: 0 0 22px #000;
            border: 1px solid #aaa;
            width: 100%;
        }

        
    }
    .tools{
        flex: 1;
        border-radius: 9px;
        border:1px solid #DDD;
        padding: 22px;
            .header-tools{
                border-radius: 33px;
                padding: 9px 22px;
                border: 1px solid #aaa;
                background-color: ${GlobalStyle.bgTheme};
                border:${props=>props.bgTheme === 'light' ? '1px solid #aaa':` 1px solid ${GlobalStyle.bgThemeSecondary}`} ;
                display:flex;
                align-items:center;
                justify-content:center;
                    .btn-tools{
                        cursor:pointer;
                        margin:0 22px;
                    
                        .svg{
                            height:45px;
                            transition:all ease .2s;
                            width:45px;
                            stroke:${props=>props.bgTheme === 'light' ? '#aaa': `white`};
                            fill:transparent;
                           &:hover{ stroke:${GlobalStyle.bgThemeSecondary}}; }
                    }
               }
            }
            .about{
                padding: 22px 12px;
                font-size:15px;
                font-weight:500;
                color:grey;
            }
            .modules-player{
                margin: 15px 0;
                padding:12px;
                overflow-y:auto;
                max-height:400px;
                &::-webkit-scrollbar {
                  width: 3px;
                 margin-left:12px;
                  border-radius: 5px;
                 background-color: ${GlobalStyle.bgThemeSecondary};
                 }
           &::-webkit-scrollbar-thumb {
              background:grey;
            }
            }
    }




.tools-box{
    .menu-tools{
        display:flex;
            align-items:center;
            margin-bottom:30px;
            .svg{
                fill:transparent;
            }
    }

    .box-tools{
            display:grid;
            grid-template-columns:repeat(3,1fr);
            gap:5px;
            padding:12px 0;
    }
        
    
}

@media screen and (max-width:950px){
    padding: 100px 12px;

    .player-tools{
        flex-direction: column;
        height: auto;
        justify-content:center;
        .cplayer{
            height: 250px;
            width: 96%;
            margin: 10px 0;
            video{
                width:100%;
                box-shadow:0;
            }
        }
    }



    .tools-box{
        .box-tools{
           display:flex;
           flex-direction:column;
           

            
       }
    }
}
`


export const BoxNote=styled.div<Props>`
 background-color:${GlobalStyle.bgTheme};
height:100%;
outline: 1px solid #ddd;
margin: 30px 0;
border-radius: 9px;
transition: all ease .2s;
padding:12px;
    .header-box{
        display: flex;
        padding: 5px 12px;
        justify-content: flex-end;
    span{
            cursor: pointer;
            .svg{
                height: 25px;
                fill:#aaa;
                &:hover{
                    fill:${GlobalStyle.bgThemeSecondary}; 
                }
            }
    }
    }
    .cx-text{
        display: flex;
        justify-content: center;
        width: 100%;
        textarea{
            border:none;
            box-shadow: 0 0 12px #222;
            outline: 2px solid ${GlobalStyle.bgThemeSecondary};
            height:350px;
            width: 100%;
            padding: 12px;
            resize: none;
            border-radius:3px;
        }
    }
.cx-btn{
    display: flex;
    justify-content: center;
    padding: 20px 0;
    button{
        width: 50%;
        padding: 12px;
        border-radius: 6px;
        border:none;
        background-color:#6895D2;
        color:white;
        cursor:pointer;
        &:hover{
            background-color:#0B60B0;
        }
    }
}
`

