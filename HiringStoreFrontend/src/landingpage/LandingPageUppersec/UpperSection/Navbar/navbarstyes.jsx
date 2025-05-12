import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  border-bottom: 1px solid;
  border-color: #515151;
  display: flex;
  padding: 2px;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;
export const MenuBoxContainer = styled(Link)`
  width: 75px;
  text-decoration: none;
  display: flex;
  border-radius: 6px;
  padding: 10px;
  color: white;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 40px rgb(176 176 176); 
  }
`;
export const MenuBarContainer = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
`;
export const LogoIcon = styled.div`
  display: grid;
  align-items: center;
`;
