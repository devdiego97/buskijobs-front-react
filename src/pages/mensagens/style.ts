import { styled } from "styled-components";


export const  Page=styled.div`
display:flex;
justify-content: center;
.content{
    padding: 50px 40px;
    width: 70%;
    min-height:900px;
   
    .show-grid{
        .card{
            margin: 20px 0;
        }
    }
}

@media  screen and (max-width:950px) {
    padding: 100px 0;
    .content{
        width: 100%;
        padding: 40px 12px;
    }
}
`