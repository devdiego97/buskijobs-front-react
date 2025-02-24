import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";


export const Container=styled.footer`
background-color:#272829;
min-height: 350px;
padding: 60px 20px;
display: grid;
color:grey;
h3{
    color: ${GlobalStyle.bgThemeSecondary};
    margin-bottom: 50px;
    font-size: 20px;
}
grid-template-columns: repeat(3,1fr);

.bx{
    p{
        text-align: justify;
    }
    a{
        color: grey;
        margin: 3px 0;
        transition: all ease .3s;
       &:hover{
        color: ${GlobalStyle.bgThemeSecondary};
        text-decoration: underline;
       }
    }
}
.bx-1{
    font-size: 15px;
    .medias{
        margin: 22px 0;
        .media-icons{
            margin:30px;
            display: flex;
            align-items: center;
            .svg{
                height: 45px;
                stroke: grey;
                margin-right:12px;
                transition: all ease .3s;
                cursor: pointer;
                &:hover{
                    stroke: ${GlobalStyle.bgThemeSecondary};
                }
        }
        }
    }
}
.bx-2,.bx-3{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width:950px) {
    display: flex;
    flex-direction: column;

    .bx{
        margin: 30px;
    }
}
`
