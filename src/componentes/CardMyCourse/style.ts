import styled from "styled-components";



export const Box=styled.div`
display: flex;
border-radius: 9px;
width: auto;
height: 150px;
border-radius: 12px;
border:1px solid  #DDDD;
transition:all ease .3s;

&:hover{
    box-shadow:  0 0 22px #aaa;
}
.left{
    width: 45%;
    img{
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        height: 100%;
        width: 100%;
    }
}

.right{
    flex: 1;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    padding:22px 12px;
    display: flex;
    flex-direction: column;
   justify-content: center;
    h3{
        font-size: 14px;
        color: #222;
        font-family: 'Poppins';
    }
    button{
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;
        width: 100%;
        border: none;
        cursor: pointer;
        color: #fff;
        border-radius: 8px;
        transition: all ease .3s;
        background-color: #525CEB;
        .svg{
            stroke: white;
            margin-right: 5px;
            height: 25px;
        }
        &:hover{
            outline: 1px solid #525CEB;
            background-color: #0D1282;
        }
    }
}



`