import { BsJustify } from "react-icons/bs";
import { FlexboxGrid } from "rsuite";
import styled from "styled-components";

export const Page=styled.div`
margin: 50px 20px;
display: flex;
flex-direction: column;
#content-course{
    margin: 100px 0;
    display: flex;
}
.left{
    width: 60%;
    section{
        h3{
            display: flex;
            align-items: center;
            font-size: 20px;
            .svg{
                height: 55px;
                width: 55px;
            }
        }
        p,ul{
            margin: 22px 0;
        }


        ul{
            li{
                list-style: circle;
            }
           
        }
    }
}

.right{
    flex:1;
    display: flex;
    justify-content: center;
    align-items:center;

}


@media screen and (max-width:950px){
  #content-course{
        flex-direction: column;
        .left{
            width: auto;
        }
        .right{
            width: auto;
        }
  }
}
`

export const BoxCourse=styled.div`
width: 70%;
border-radius: 12px;
box-shadow: 0 0 12px #000;
.top{
    height: 240px;
    background-color: #DEDEDE;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    img{
        height: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        width: 100%;
    };
}
.bottom{
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
border: 1px solid grey;
    .info{
        display: flex;
        margin: 30px 0;
        justify-content: space-around;
        span{
            border: 1px solid grey;
            padding: 12px;
            border-radius: 12px;
            font-size: 12px;
        }
    
    }
    .cx-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        button{
            cursor: pointer;
            width: 60%;
            color: white;
            padding: 12px;
            border-radius: 12px;
            transition: all ease .3s;
            background-color:#387ADF;
            border: none;
            &:hover{
                background-color:#1D24CA;
            }
        }
    }
}



`