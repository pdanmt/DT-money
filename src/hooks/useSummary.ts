import { useMemo } from 'react'
import { TransactionsContext } from '../contexts/transactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summaryValues = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.value
        } else {
          acc.outcome += transaction.value
        }
        acc.total = acc.income - acc.outcome
        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions]) // só vai recalcular quando a váriável transactions mudar

  return summaryValues
}
