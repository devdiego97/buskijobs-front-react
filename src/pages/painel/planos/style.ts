import styled from "styled-components";


export const Page=styled.div`
margin: 40px 0;
padding: 50px 170px;
display: flex;
font-family: 'Poppins';
.content{
display: flex;
flex-direction: column;
padding:35px;
h3{
    font-size: 35px;
    text-align: center;
    margin: 22px 0;
    color: #aaa;
    .svg{
        fill: #aaa;
        height: 95px;

    }
}

.golden{
        color: #FFB000;
        .svg{
           fill: #FFB000;
           height: 95px;

        }
    
}
p{
    font-size: 19px;
    color: gray;
    text-align: justify;
}


}


@media screen and (max-width:750px){
    .content{
        padding: 0;
        .planos{
            flex-direction: column;
            width: 100%;
            h3{
                display: flex;
                flex-direction: column;
                .svg{
                    margin: 12px 0;
                }
            }
        }
    }
}

`