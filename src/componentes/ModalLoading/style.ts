import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

type Props={
    visible:boolean
}
export const Box=styled.div<Props>`
display:${props=>props.visible ? 'flex':'none'};
transition: opacity 0.3s ease;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);
opacity:${props=>props.visible ? '1':'0'};
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    .box-content{
        box-shadow: 0 0 12px #222;
        background-color: #DDD;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 350px;
        border-radius: 22px;
        width: 550px;
        p{
            font-weight: 770;
            color: #222;
        }
         .spin{
            margin: 20px 0;
          height: 50px;
           width: 50px;
       }
    }
}
`