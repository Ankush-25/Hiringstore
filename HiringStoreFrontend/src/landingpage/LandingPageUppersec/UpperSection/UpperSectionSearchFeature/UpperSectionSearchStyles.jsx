import styled from "styled-components";

export const UpperSearchAndTextWrapper = styled.div`
    width: 100%;
    padding: 100px;
    color: white;
    box-sizing: border-box;
`

export const SearchBar = styled.div`
    border-radius: 34px;
    display: flex;
    background: white;
    padding: 14px;
    margin: auto;
    align-items: center;
    width: 100vh;
`
export const SearchInput = styled.input`
    margin-left: 5px;
    width: 32%;
    font-size: 20px;
    height: 3vh;
    border: none;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-size: 16px;
    }
`
