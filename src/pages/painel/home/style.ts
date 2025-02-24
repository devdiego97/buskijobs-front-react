
import { styled } from "styled-components";


export const Page=styled.div`
margin: 130px auto;
width: 83%;
margin-right: 50px;
display: flex;
flex-direction: column;
align-items: center;

.cx-box{
    margin: 30px 0;
    font-family: 'Montserrat';
}



.content-box-one, .content-box-two{
    display: flex;
    width:100%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
  
    .text{
        width: 40%;
        h3{
            font-size: 34px;
            margin-bottom: 30px;
        }
        p{
            font-family: 'Montserrat';
        }
    }
}

.content-box-true{
    display: flex;
    width:100%;
    height: 100%;
    align-items: center;
  
    .text{
        width: 40%;
        h3{
            font-size: 34px;
            margin-bottom: 30px;
        }
        p{
            font-family: 'Montserrat';
        }
    }
}

@media screen and (max-width: 780px) {
    
    .cx-box{
        .text{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            h3{
                font-size: 25px;
            }
        }
    }


}
`

