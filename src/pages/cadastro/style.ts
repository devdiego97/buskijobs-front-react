import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";

export const Page=styled.div`
min-height: 100vh;
padding: 50px 30px;



form{
 
  margin: 30px;
}

@media screen and (max-width: 768px){
   padding: 0px 9px;
   height: auto;
   margin-top: 20px;
    form{
        justify-content: start;
        .cx-inputs{
          width:100%;
          .cx-input{
            input{
            width: 90%;
          }
          }
        }
        button{
            padding: 12px 22px;
            width: 90%;
            font-size: 16px;
        }
    }
}
`

export const FileInputRender=styled.div`

.input{
  
}


`