import styled from "styled-components";

export const GridCourses=styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap:22px 12px;
margin: 100px 0;

@media screen and (max-width:750px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

@media screen and (max-width:1024px) {
    grid-template-columns: repeat(2,1fr);
}
`