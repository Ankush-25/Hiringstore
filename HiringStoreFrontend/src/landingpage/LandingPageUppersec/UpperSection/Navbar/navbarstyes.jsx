import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(0, 123, 255, 0.4); }
  50% { box-shadow: 0 0 25px rgba(0, 123, 255, 0.7); }
`;

const slideInFromTop = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const jobPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgb(29, 29, 29);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(19, 19, 19, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(128, 128, 128, 0.1);
 

  &:hover {
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    height: 45px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  .company-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-left: 0.5rem;
    background: linear-gradient(135deg, #007bff, #0056b3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .tagline {
    font-size: 0.75rem;
    color: #6c757d;
    font-weight: 500;
    margin-left: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 700px;
  margin: 0 2rem;
  position: relative;

  @media (max-width: 1024px) {
    max-width: 300px;
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
    max-width: none;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 4px 20px rgba(0, 123, 255, 0.15);
  }

  &:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    background: transparent;
    color: #333;

    &::placeholder {
      color: #6c757d;
      font-weight: 500;
    }
  }

  .search-icon {
    color: #007bff;
    font-size: 1.1rem;
    margin-right: 0.5rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .location-divider {
    height: 20px;
    width: 1px;
    background: #dee2e6;
    margin: 0 0.5rem;
  }

  .location-input {
    flex: 1;
    min-width: 120px;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 0.9rem;
    background: transparent;
    color: #333;

    &::placeholder {
      color: #6c757d;
    }
  }
  
  .search-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    margin-left: 15px;
    cursor: pointer;
    font-weight: 500;
    white-space: nowrap;
    transition: all 0.2s ease;
    
    &:hover {
      background: #0056b3;
    }
    
    svg {
      font-size: 0.9rem;
    }
  }
`;

export const MainNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    gap: 0.5rem;
    background: white;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    animation: ${slideInFromTop} 0.3s ease-out;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  font-size: 0.9rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .nav-icon {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(0, 123, 255, 0.1);
    color: #007bff;
    transform: translateY(-2px);
    
    .nav-icon {
      transform: scale(1.1);
    }
  }

  &.active {
    background: #007bff;
    color: white;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  }

  &.jobs-link {
    background: linear-gradient(135deg, #28a745, #20c997);
    color: white;
    animation: ${jobPulse} 2s ease-in-out infinite;
    
    &:hover {
      background: linear-gradient(135deg, #218838, #1e7e34);
      transform: translateY(-2px) scale(1.05);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }
`;

export const NotificationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #6c757d;

  &:hover {
    background: rgba(0, 123, 255, 0.1);
    color: #007bff;
    transform: scale(1.1);
  }

  .notification-icon {
    font-size: 1.2rem;
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: #dc3545;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  animation: ${pulseGlow} 2s ease-in-out infinite;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  background: rgba(0, 123, 255, 0.05);
  border: 1px solid rgba(0, 123, 255, 0.1);

  &:hover {
    background: rgba(0, 123, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
  }

  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #007bff, #0056b3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    .user-name {
      font-size: 0.9rem;
      font-weight: 600;
      color: #333;
      line-height: 1.2;
    }
    
    .user-role {
      font-size: 0.75rem;
      color: #6c757d;
      line-height: 1.2;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }
`;

export const PostJobButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  .post-icon {
    font-size: 1rem;
  }
`;

export const AuthButton = styled.button`
  background: ${({ variant }) => 
    variant === 'login' 
      ? 'transparent' 
      : 'linear-gradient(135deg, #007bff, #0056b3)'};
  color: ${({ variant }) => variant === 'login' ? '#007bff' : 'white'};
  border: ${({ variant }) => variant === 'login' ? '2px solid #007bff' : 'none'};
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.3);
    background: ${({ variant }) => 
      variant === 'login' 
        ? '#007bff' 
        : 'linear-gradient(135deg, #0056b3, #004085)'};
    color: white;
  }

  .auth-icon {
    font-size: 1rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: #007bff;
  border: none;
  color: white;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  z-index: 1000;
  overflow: hidden;
  border: 1px solid #e9ecef;
  animation: ${slideInFromTop} 0.3s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
  }
`;

export const DropdownItem = styled.div`
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #495057;
  font-weight: 500;

  &:hover {
    background: rgba(0, 123, 255, 0.1);
    color: #007bff;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f1f3f4;
  }

  .dropdown-icon {
    font-size: 1rem;
  }
`;
