import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Header = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 5px;

  margin-bottom: 16px;
  border-bottom: 1px solid #ececec;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  & nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
