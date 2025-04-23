import styled, {keyframes ,css } from "styled-components";

export const SingleCompanyComp = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    aspect-ratio: 16/9;
`
const scrollX = keyframes`
from {
    transform: translateX(0);
}
to {
    transform: translateX(-100%);
}
`;
const common = css`
    display: flex;
    align-items: center; 
    width: auto ;
    will-change: transform; 
    animation:  ${scrollX}  15s linear infinite;  
`
export const OuterSliderComCover = styled.div`
    display: flex;
    margin: auto; 
    width: 70%;
    height: 133px;
    overflow: hidden;
    mask-image: linear-gradient(to right, hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 1) 10%,
        hsl(0 0% 0% / 1) 90%,
        hsl(0 0% 0% / 0));
`
export const CompaniesContainer = styled.div`
  ${common};
`
export const CompaniesContainerSec = styled.div`
    ${common};
    animation-direction: reverse;
    animation-delay:-3s;
`