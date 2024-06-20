import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const OverlayStyles = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  background: #00000085;
  z-index: 9998;
`

export const CloseButtonStyles = styled(Dialog.Close)`
  position: absolute;
  top: 2.8rem;
  right: 3rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 0;
  cursor: pointer;
`

export const ContentStyles = styled(Dialog.Content)`
  width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme.gray5};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  form {
    flex-direction: column;
    gap: 1.3rem;

    input {
      width: 100%;
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.gray2};
      border: none;
      padding: 1rem 0.5rem;
      border-radius: 8px;

      &:first-child {
        margin-top: 1.6rem;
      }

      &::placeholder {
        color: ${(props) => props.theme.gray4};
      }
    }

    button {
      width: 100%;
      border: none;
      border-radius: 8px;
      padding: 1rem 0;
      color: ${(props) => props.theme.gray1};
      cursor: pointer;
      transition: 0.2s;
    }

    .register {
      background: ${(props) => props.theme.green2};

      &:not(:disabled):hover {
        background: ${(props) => props.theme.green1};
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    top: auto;
    bottom: 0;
    left: 0;
    transform: none;
    padding: 2.5rem 1rem;
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  width: 100%;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButtonStyles = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme.gray6};
  color: ${(props) => props.theme.gray2};
  gap: 0.5rem;

  svg {
    color: ${(props) =>
      props.variant === 'income' ? props.theme.green1 : props.theme.red1};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    outline: none;
    background: ${(props) =>
      props.variant === 'income' ? props.theme.green3 : props.theme.red2};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &:not([data-state='checked']):hover {
    background: ${(props) => props.theme.secundary};
  }
`
