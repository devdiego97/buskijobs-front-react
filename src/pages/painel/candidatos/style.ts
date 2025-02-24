import { styled } from "styled-components";



export const GridFilter=styled.div`
display:grid;
grid-template-columns: repeat(4,6fr);


@media screen and (max-width:950px) {
  display: flex;
  flex-direction:column;
  margin: 50px;
  div{
    width:80%;
  }

  .filter-i{
    margin: 9px 0 ;
  }

}
`
export const ContainerProfessional=styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap:22px 8px;
    justify-content: center;
    margin: 80px 5px;
    padding: 18px;

 @media screen and (max-width:950px) {
  display: flex;
  flex-direction:column;

}
`
