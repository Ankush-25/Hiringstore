import styled from "styled-components";

export const SingleCompanyComp = styled.div`
    border : 1px solid white;
    height : 100px;
    width : 100px
    overflow: hidden;
    padding: 12px;
    border-radius: 5px;
       .CompaniesImages {
            height: 100px;
        }

`

export const OuterSliderComCover = styled.div`
 display: flex;
 width: 1200px;
 gap: 25px;
 margin: auto;
 height: 133px;    
 overflow: hidden;
 padding: 10px;
 border: 1px solid red ;
`
export const SliderButton = styled.button`

    background-color: white;
    border: none;
    color: black;
    font-size: 46px;
    margin: auto;
    padding: 13px;
    cursor: pointer;
    border-radius: 40px;

    &:hover {
        background-color:rgb(39, 93, 255);
        
    }
`