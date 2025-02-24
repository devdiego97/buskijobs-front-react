import styled from "styled-components";
import { TextAreaInterface} from ".";
import { GlobalStyle } from "../../globalStyle";





export const ContainerTextArea=styled.textarea<TextAreaInterface>`
    padding:${props=>props.p ? props.p : '22px'};
    margin:${props=>props.m ? props.m : '5px 0'};
    width:${props=>props.w? props.w : '100%'};
    height:${props=>props.h? props.h : '80%'};
    outline: none;
    border: none;
    transition: all ease-in .2s;
    resize: none;
    border-radius:${props=>props.bdRadius ? props.bdRadius : '3px'};
    box-shadow:${props=>props.bx ? props.bx : 'none'};
    background-color: ${props=>props.bg ? props.bg : 'white'};
    font-size:${Props=>Props.fsize ? `${Props.fsize}px`: '15px'};
    &:focus{
     outline:2px solid ${GlobalStyle.bgTheme};
   }
@media screen and (max-width:950px){
    width:100%;
}
`