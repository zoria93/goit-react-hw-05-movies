import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin-bottom: 15px;
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
