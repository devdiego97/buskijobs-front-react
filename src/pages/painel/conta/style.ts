import styled from "styled-components";


export const Page=styled.div`

.data{
    margin: 100px 0;
    display: flex;
    justify-content: center;
    .content-data{
        padding:22px;
        box-shadow: 0 0 12px #aaa;
        border: 1px solid gray;
        height:500px;
        width: 500px;
        p{
        border-bottom: 1px solid gray;
        padding: 12px;
        strong{ margin-right: 9px;}
       }
       .cx-btn,.cx-btn-close{
            display: flex;
            justify-content:center;
            align-items: center;
            width: 100%;
            margin: 50px 0;
            span{
                transition: all ease .3s;
                cursor: pointer;
                &:hover{
                    color: #1D24CA;
                    text-decoration: underline;
                }
            }
            button{
                cursor: pointer;
                width: 150px;
                padding: 12px;
                color: white;
                background-color:#387ADF;
                border: none;
                border-radius: 9px;
                transition: all ease .3s;
                &:hover{
                    background-color: #1D24CA;
                }
            }
        }
   
    }}

`

export const ContentModal=styled.div`
width:580px;
padding:12px 52px;
height: fit-content;
.cx-input{
    padding: 4px;
    small{
        font-size:13px;
        cursor: pointer;
    }
    label{
    max-width: 100px;
    margin-right:9px;
    font-size:13px;
}
input{
    background-color: #DEDE;
    flex:1;
    padding: 9px;
    font-size:13px;
}

p{
    margin: 5px 0;
    color: #EE4266;
    font-size: 13px;
}
    
}


.cx-btn{
    display:flex;

    margin:30px 0;
    justify-content:center;
}
`