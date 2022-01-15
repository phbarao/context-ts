import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 80%;
  height: 200px;
  background-color: var(--primary);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--darkest);
  margin: 40px 0;
  border: none;
  border-radius: 10px;
  padding: 14px 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-light);
    transition: 0.3s;
  }
`;
