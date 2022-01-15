import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: grid;
  gap: 40px;
  margin-top: 40px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
