import styled from "styled-components";
import { IBoxImageText } from ".";

export const Box=styled.div<IBoxImageText>`
      position: relative;
      width: 100%; 
      height: ${props=>props.height ? props.height : '400px'}; 
      background: url(${props=>props.urlImage ? props.urlImage : ''}) center/cover; 
      border-radius:${props=>props.radius ? props.radius : '0'} ;
      overflow: hidden;
      .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(50, 50, 50, 0.7);
      //background-color: rgba(255, 255, 255, 0.5); 
      background-color: rgba(30, 30, 30, 0.7);
    }

    .conteudo {
      position: relative;
      z-index: 1; /* Certifica-se de que o conteúdo esteja acima da overlay */
      padding: 20px; /* Adapte conforme necessário */
      color: #fff; /* Adapte a cor do texto conforme necessário */
    }



`