import styled from "styled-components"

export const FooterWrapper = styled.div`
    border: red solid;
    border-radius: 10px;
    display: flex;
    justify-content: center;
`
export const FooterColumnWrapper = styled.div`
    border: red solid;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: Column;
    
`
export const SingleRowFooterLink = styled.a`
    border: blue solid;
    text-decoration: none;
    font-size: 1rem;
    &hover:{
    color: grey;
    text-decoration: underline;
    }

`
