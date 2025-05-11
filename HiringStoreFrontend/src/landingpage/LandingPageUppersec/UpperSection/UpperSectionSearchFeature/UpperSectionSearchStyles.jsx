import styled from "styled-components";

export const UpperSearchAndTextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    color: white;
`

export const SearchBar = styled.div`
    border-radius: 34px;
    display: flex;
    background: white;
    padding: 8px;
    margin: auto;
    align-items: center;
    width: 100vh;
`
export const SearchInput = styled.input`
    margin-left: ${(props) => (props.index === 0? '5px':null)};
    width: ${(props) => props.index === 0 ? '35%' : props.index === 1 ? '30%' : '25%'};
    font-size: 20px;
    height: 5vh;
    border: none;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-size: 16px;
    }
`

export const SearchButton = styled.button`
    border: none;
    background: #b761b7;
    color: white;
    margin-right: 8px;
    border-radius: 24px;
    font-size: 17px;
    padding: 10px 24px 10px 24px;
`