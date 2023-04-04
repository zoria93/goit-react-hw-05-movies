import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ececec;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
`;
export const Div = styled.div`
  margin-left: 15px;
`;

export const Text = styled.p`
  margin: 20px 0;
  max-width: 700px;
`;

export const Title = styled.h2`
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 5px;
  text-decoration: none;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  background-color: orangered;
`;
export const TextBtn = styled(Link)`
  color: white;
`;

export const List = styled.ul`
  margin-top: 10px;

  border-bottom: 1px solid #ececec;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
`;

export const ImgDiv = styled.div`
  margin-bottom: 10px;
`;

export const TextLink = styled(Link)`
  margin-left: 10px;
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

export const Item = styled.li`
  margin-bottom: 5px;
`;
