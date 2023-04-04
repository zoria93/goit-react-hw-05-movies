import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchInput = styled.input`
  height: 32px;
  width: 250px;

  border-radius: 8px;
  border-color: deepskyblue;
  &:hover,
  &:focus,
  &:active {
    outline-color: orangered;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  margin-left: 3px;
  text-decoration: none;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  background-color: deepskyblue;

  &:hover,
  &:focus,
  &:active {
    background-color: orangered;
  }
`;
export const List = styled.li`
  margin-top: 10px;
`;

export const Item = styled(Link)`
  color: black;
  color: inherit;
  font-size: 15px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &:active {
    color: orangered;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;
