import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";


export const Container=styled.div`
display: flex;
flex-direction: column;
padding:50px 150px;

.content{
    min-height: 100vh;
}

@media screen and (max-width:769px){
    h2{
        margin:auto 22px;
        margin-top: 50px;
    }
    padding: 100px 7px;
}
`