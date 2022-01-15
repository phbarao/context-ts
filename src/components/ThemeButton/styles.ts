import styled from 'styled-components';

export const Container = styled.button`
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.text};
  position: absolute;
  top: 10px;
  right: 25px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
  }

  svg {
    color: ${(props) => props.theme.colors.background};
    font-size: 18px;
  }
`;
