import { Link } from 'react-router-dom'
import igniteLogo from '../../../public/ignite-logo.svg'
import { HeaderContentStyles, HeaderStyles } from './Header.styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal/newTransactionModal'

export function Header() {
  return (
    <HeaderStyles>
      <HeaderContentStyles>
        <Link to={'/'} className="flexReset">
          <img src={igniteLogo} alt="" />
          <p>DT money</p>
        </Link>

        <Dialog.Root>
          <Dialog.Trigger>Nova transação</Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContentStyles>
    </HeaderStyles>
  )
}

/* O dialog.trigger cria um novo botão, mas caso eu não queira isso, eu poderia colocar uma propriedade no trigger chamada asChild, que evita que o trigger crie um novo botão e aproveite o que eu criei. */
