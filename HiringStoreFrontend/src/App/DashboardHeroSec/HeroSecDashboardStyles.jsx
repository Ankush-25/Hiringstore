import styled from "styled-components";

export const HeroSecWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  align-items: center;
`;

export const HeroSecbuttonCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%
`;

export const HeroSecImage = styled.img`
  width: 460px;
  border-radius: 40px;
`;
export const HerSecButtons = styled.button`
  border: 1px solid #b761b7;
  border-radius: 20px;
  background-color: #211f1f;
  padding: 11px;
  color: white;
  font-size: 1.2rem;
  &:hover{
  background-color:rgb(250, 220, 250);
  color: black;
  cursor:pointer;
  }
`;
