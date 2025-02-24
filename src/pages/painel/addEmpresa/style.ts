import { GlobalStyle } from '../../../globalStyle';
import styled from "styled-components";




export const Page=styled.div`
display: flex;
justify-content: center;
padding-bottom: 100px;
.content{
  width: 70%;

  form{
    .stack{
      margin: 12px 0;
    }
    .msg-error{
      font-size: 11px;
      margin: 9px 0;
    }
  }
}



@media screen and (max-width:950px){

  justify-content:start;
  .content{
    width:auto;
  }
}
`