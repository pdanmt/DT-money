import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchStyles } from '../Home.styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../contexts/transactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = zod.object({
  query: zod.string(),
}) // definição dos tipos dos valores dos formulários

type searchFormInputs = zod.infer<typeof searchFormSchema> // integração com o ts, para que não seja necessário criar um interface

export function SearchForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const loadTransactionApi = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.loadTransactionApi
    },
  )

  async function handleSearchTransaction(data: searchFormInputs) {
    await loadTransactionApi(data.query)
    reset()
  }

  return (
    <SearchStyles onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        required
        placeholder="Busque por transações"
        {...register('query')} // nome do input
      />
      <button className="flexReset" disabled={isSubmitting}>
        <MagnifyingGlass size={19} />
        <p>Buscar</p>
      </button>
    </SearchStyles>
  )
}
