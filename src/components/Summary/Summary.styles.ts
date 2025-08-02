import styled, { css } from 'styled-components'

interface SummaryContentProps {
  bgcolor?: 'green2' | 'red1'
}

export const SummaryStyles = styled.div`
  margin: -4.5rem auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  overflow: auto;

  @media (max-width: 780px) {
    width: 92vw;
  }
`

export const SummaryContent = styled.div<SummaryContentProps>`
  width: 20rem;
  min-height: 8.2rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${(props) => props.theme.gray5};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  .money {
    font-size: 2rem;
    font-weight: 700;
  }

  &:last-child {
    ${({ theme, bgcolor }) => {
      switch (bgcolor) {
        case 'green2':
          return css`
            background: ${theme.green2};
          `
        case 'red1':
          return css`
            background: ${theme.red1};
          `
        default:
          return css`
            background: ${theme.gray5};
          `
      }
    }}

    @media (max-width: 780px) {
      min-width: 15rem;
    }
  }
`

export const NameAndIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${(props) => props.theme.gray2};
  }

  span {
    font-size: 1.7rem;
  }

  .arrowUp {
    color: ${(props) => props.theme.green1};
  }

  .arrowDown {
    color: ${(props) => props.theme.red1};
  }
`
