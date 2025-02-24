import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";


export const ContainerJobs=styled.div`
margin:150px 20px;
min-height: 500px;
display: flex;
flex-direction: column;

.cx-data-info{
    margin: 60px 0;
    display: flex;
   fieldset{
    padding: 22px;
    legend{
        display: flex;
        align-items: center;
        font-size: 19px;
        color:${GlobalStyle.bgTheme};
        .svg{
            height: 25px;
            fill: ${GlobalStyle.bgThemeSecondary};
        }
    }
    #filters{
            display: flex;
            justify-content: space-around;
            align-items:center;
          
        }
    }
}
.cx-jobs{
    margin: 20px 0;
}
@media screen and (max-width: 950px) {
    margin:20px 20px; 
    .cx-data-info{
        fieldset{
            padding: 12px;
            #filters{
                display:grid;
                justify-content: center;
              
            }
        }
   }
}
`