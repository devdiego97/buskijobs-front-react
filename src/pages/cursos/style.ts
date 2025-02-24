
import styled from "styled-components";

export const Page=styled.div`

#card-filter{
    margin: 160px 0;
    padding: 12px;
    .grid-selects{
        display: grid;
        gap: 0;
        grid-template-columns: repeat(4,6fr);
       justify-content: center;
       align-items: center;
       
    }
}

@media screen and (max-width:750px) {
    #card-filter{
        .grid-selects{
            display: flex;
            flex-direction: column;
           
        }
    }
}

`
export const GridCourses=styled.div`
display:grid;
grid-template-columns: repeat(4,1fr);
gap: 12px;
margin: 50px 0;


@media screen and (max-width:950px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .card-course{
        width: 80%;
    }
}


`