import styled from 'styled-components'

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-around;
  background: ${(props) => props.theme.primary};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContentStyles = styled.header`
  width: 100%;
  max-width: 72rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;

  a {
    gap: 0.875rem;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 700;
  }

  button {
    height: 3rem;
    background: ${(props) => props.theme.green1};
    border: none;
    border-radius: 8px;
    padding: 0 2rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(1.3);
    }
  }

  @media (max-width: 780px) {
    a {
      font-size: 1rem;
      gap: 2px;

      img {
        width: 1.4rem;
        height: 1.4rem;
      }
    }

    button {
      height: 2.3rem;
      padding: 0 1rem;
    }
  }
`
