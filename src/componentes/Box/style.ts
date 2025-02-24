import styled from "styled-components"
import { DivInterface } from "."


export const Container=styled.div<DivInterface>`
border-radius: 5px;
padding:0;
background-color: ${props=>props.bg ? props.bg : '#F5F5F5'};
box-shadow: 0 0 8px #000;
width:970px;
height: auto;

@media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    bottom: 0;
    overflow-y: scroll;
    border-radius: none;
}
`