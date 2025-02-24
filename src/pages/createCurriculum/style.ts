import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

export const Page=styled.div`
margin: 50px 20px;
display: flex;
align-items: center;
flex-direction: column;
.form{
    width: 70%;
    padding: 22px;
    fieldset{
       
        padding: 12px;
         margin: 18px 0;
        legend{
            font-size: 22px;
            font-weight: 33px;
            font-weight: 700;
            font-family: 'Arial';
            display: flex;
            align-items: center;
            .svg{
                height: 45px;
                width: 45px;
                margin:0 3px;
            }
            .stroke{
                fill:${GlobalStyle.bgTheme};
            }
        
        }
        
           
    }


}



@media screen and (max-width:890px){
margin: 50px 5px;
padding: 6px;

.form{
    width: auto;
}

}
`

