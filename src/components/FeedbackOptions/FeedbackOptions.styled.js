import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const Btn = styled.button`
  font-size: 16px;
  padding: 7px;
  font-weight: 600;
  border-radius: 7px;
  background-color: #ff8c00;
  transition-duration: 150ms;
  transition-timing-function: linear;
  color: white;

  li:first-child & {
    background-color: #228b22;
  }
  li:last-child & {
    background-color: #ff6347;
  }

  &::first-letter {
    text-transform: capitalize;
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
