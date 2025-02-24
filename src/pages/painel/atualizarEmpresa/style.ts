import { GlobalStyle } from '../../../globalStyle';
import styled from "styled-components";




export const Page=styled.div`
display: flex;
justify-content: center;
.content{
  width: 70%;
}



@media screen and (max-width:950px){

  justify-content:start;
  .content{
    width:auto;
  }
}
`

export const editorStyle = {
  border: '2px solid #3498ff',
  borderRadius: '4px',
  height: '320px',
};