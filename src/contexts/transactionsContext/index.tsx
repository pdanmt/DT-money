import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../../libs/axios'

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  value: number
  category: string
  date: string
}

interface AddNewTransactionProps {
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextProps {
  transactions: TransactionsProps[]
  loadTransactionApi: (query?: string) => Promise<void>
  AddNewTransaction: (data: AddNewTransactionProps) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  const loadTransactionApi = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'date',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const AddNewTransaction = useCallback(
    async (data: AddNewTransactionProps) => {
      const response = await api.post('/transactions', {
        ...data,
        date: new Date().toISOString(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    loadTransactionApi()
  }, [loadTransactionApi])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loadTransactionApi,
        AddNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
