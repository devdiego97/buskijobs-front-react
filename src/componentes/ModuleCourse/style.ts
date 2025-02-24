import { GlobalStyle } from "../../globalStyle"
import { styled } from "styled-components"

type Props={
    onBody?:boolean,
    bg?:'light' | 'dark'
}


export const Container=styled.div<Props>`
border-radius: 5px;
margin: 12px 0;
border: 1px solid #DDD;


.top{
    padding: 12px;
    font-weight:900;
    .title-btn{
        border-bottom:${props=>props.onBody ? '1px solid #DDD' : 'none'};
        display: flex;
        font-size: 15px;
        justify-content: space-between;
        align-items: center;
        span{
            .svg{
                height: 25px;
                cursor: pointer;
                width: 25px;
                fill:grey;
          }
        }
    }
    .actions-module{
        display: flex;
        padding: 12px 0;
        justify-content: flex-end;
        display:${props=>props.onBody ? 'flex':'none'};
        span,a{
            font-size: 12px;
            border-radius: 8px;
            padding: 12px;
            cursor: pointer;
            color: #fff;
            margin: 0 8px;
            .svg{
                height: 25px;
                stroke:grey;
                width: 25px;
            }
            &:hover{
                .svg{
                    stroke:${GlobalStyle.bgThemeSecondary};
                }
            }
        }
    }
}

.bottom{
    display:${props=>props.onBody ? 'block':'none'};
    .list-card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        margin: 5px 0;
        font-family: Poppins;
        border-radius:8px;
        .card-aula{
            padding: 12px;
        }
            .text{
                display: flex;
                align-items: center;
                .svg{
                    height: 25px;
                    width: 25px;
                    margin-right: 8px;
                    stroke: grey;
                }
            }
            .actions{
                    span,a{
                    font-size: 12px;
                    border-radius: 8px;
                    padding: 12px;
                    cursor: pointer;
                    margin: 0 3px;
                    .svg{
                        height: 25px;
                        stroke:grey;
                        width: 25px;
                    }
                    &:hover{
                        .svg{
                            stroke:${GlobalStyle.bgThemeSecondary};
                        }
                    }
                }
            }
    }
}
`



