import styled from "styled-components";



export const Page=styled.div`
padding: 60px;
margin-bottom: 300px;
min-height: 100vh;
.text{
    margin: 19px 5px;
    color: gray;
}

form{
    margin: auto 100px;
    justify-content: center;
}


@media screen and (max-width:950px){
    padding: 50px auto ;
    form{
        margin: 20px 0;
    }
}
`


export const GridFlexInput=styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
justify-content: center;

@media screen and (max-width:950px){
    display: flex;
    flex-direction: column;
    justify-content: start;
    div{
        width: 100%;
    }
    .vstack{
        margin: 9px 0;
    }
}
`
