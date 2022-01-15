import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 40px;
  color: ${(props) => props.theme.colors.text};

  h3 {
    margin-bottom: 25px;
    font-size: 22px;
    text-transform: capitalize;
    padding-left: 10px;
    border-left: 6px solid var(--primary);

    &:hover {
      color: var(--primary);
      cursor: pointer;
    }
  }

  p {
    text-transform: capitalize;
  }
`;
