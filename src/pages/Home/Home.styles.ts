import styled, { css } from 'styled-components'

export const HomeContainerStyles = styled.div`
  margin-top: 8rem;
`

export const SearchStyles = styled.form`
  display: flex;
  gap: 1rem;

  input {
    width: 88%;
    padding: 1rem 0.5rem;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.primary};
    border: none;
    border-radius: 8px;

    &::placeholder {
      color: ${(props) => props.theme.gray4};
    }
  }

  button {
    width: 12%;
    background: ${(props) => props.theme.secundary};

    border: solid 2px ${(props) => props.theme.green2};
    border-radius: 8px;

    color: ${(props) => props.theme.green1};
    gap: 0.75rem;
    font-weight: bold;

    cursor: pointer;
    transition: 0.2s;

    &:not(:disabled):hover {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.green2};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  @media (max-width: 780px) {
    button {
      width: 23%;

      p {
        display: none;
      }
    }
  }
`

export const HomeTableStyles = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  tbody {
    background: ${(props) => props.theme.gray5};
    word-break: break-all;

    td {
      padding: 1.5rem 2rem;

      &:first-child {
        width: 45%;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        width: 15%;
        border-bottom-right-radius: 6px;
      }
    }
  }

  @media (max-width: 780px) {
    display: none;
  }
`

export const HomeSmallScreenContent = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  section {
    min-height: 9.5rem;
    background: ${(props) => props.theme.gray6};
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    header {
      color: ${(props) => props.theme.gray2};
    }

    main {
      font-size: 1.5rem;
      color: ${(props) => props.theme.green1};
    }
  }

  footer {
    justify-content: space-between;
    color: ${(props) => props.theme.gray4};
  }

  @media (min-width: 781px) {
    display: none;
  }
`

interface PriceHighLightProps {
  textcolor: 'income' | 'outcome'
}

export const PriceHighLight = styled.div<PriceHighLightProps>`
  ${(props) =>
    props.textcolor === 'income' &&
    css`
      color: ${props.theme.green1};
    `}

  ${(props) =>
    props.textcolor === 'outcome' &&
    css`
      color: ${props.theme.red1};
    `}
`
