import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButtonStyles,
  ContentStyles,
  OverlayStyles,
  TransactionType,
  TransactionTypeButtonStyles,
} from './NewTransactionModal.styles'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import * as zod from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../contexts/transactionsContext'
import { useContextSelector } from 'use-context-selector'

const newTransactionSchema = zod.object({
  description: zod.string(),
  value: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionModalInputs = zod.infer<typeof newTransactionSchema>

export function NewTransactionModal() {
  const AddNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.AddNewTransaction
    },
  )

  const {
    control, // usado quando a informação a ser inserida no formulário não é nativa do html (no caso os botões do radix)
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting },
  } = useForm<NewTransactionModalInputs>({
    resolver: zodResolver(newTransactionSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionModalInputs) {
    AddNewTransaction(data)

    reset()
  }

  return (
    <Dialog.Portal>
      <OverlayStyles /> {/* faz o funddo ficar opaco */}
      <ContentStyles>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButtonStyles>
          <X />
        </CloseButtonStyles>
        <form
          className="flexReset"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('value', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButtonStyles
                    variant="income"
                    className="flexReset"
                    value="income"
                  >
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButtonStyles>

                  <TransactionTypeButtonStyles
                    variant="outcome"
                    className="flexReset"
                    value="outcome"
                  >
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButtonStyles>
                </TransactionType>
              )
            }}
          />

          <button type="submit" className="register" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </ContentStyles>
    </Dialog.Portal>
  )
}
/* O Portal já é do react, ele evita que o elemento seja criado em um mesmo nó DOM (cria por fora de todos os elementos). nesse caso, evita que o modal seja filho do Header, por exemplo. */
