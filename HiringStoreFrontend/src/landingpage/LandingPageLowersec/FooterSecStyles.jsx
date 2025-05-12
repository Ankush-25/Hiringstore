import styled from "styled-components"

export const FooterWrapper = styled.div`
    border-top: grey 1px solid;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`
export const FooterColumnWrapper = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: Column;
    
`
export const SingleRowFooterLink = styled.a`
    text-decoration: none;
    font-size: 1rem;
    padding:10px;
    color: white;
    &hover:{
    color: grey;
    text-decoration: underline;
    }
`
