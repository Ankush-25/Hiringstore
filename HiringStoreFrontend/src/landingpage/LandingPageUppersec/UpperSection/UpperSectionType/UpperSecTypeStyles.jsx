import styled from 'styled-components';

export const JobBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding-bottom:100px;
  margin: auto;
`;
export const SingleJobBoxCon = styled.div`
  background-color: #b761b7;
  border-radius: 10px;
  padding: 16px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  align-items: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover{
    box-shadow: 0px 0px 40px rgb(176 176 176); 
    cursor: pointer;
    transform: scale(1.1)
  }
`
