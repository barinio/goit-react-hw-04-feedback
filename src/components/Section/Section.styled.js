import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 250px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: inset #0000cd 0 0 7px;
  padding: 15px;
  background-color: #87cefa;

  & h2 {
    color: blue;
  }

  &:first-child {
    margin: 25px auto 15px;
  }
`;
