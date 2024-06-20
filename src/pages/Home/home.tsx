import { Summary } from '../../components/Summary/summary'
import {
  HomeContainerStyles,
  HomeSmallScreenContent,
  HomeTableStyles,
  PriceHighLight,
} from './Home.styles'
import { TransactionsContext } from '../../contexts/transactionsContext'
import { dateFormatter, valueFormatter } from '../../utils/formats'
import { SearchForm } from './components/searchForm'
import { useContextSelector } from 'use-context-selector'
import { ArrowFatRight } from '@phosphor-icons/react'

export function Home() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Summary />

      <HomeContainerStyles>
        <SearchForm />

        <HomeTableStyles>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighLight textcolor={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {valueFormatter.format(transaction.value)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.date))}</td>
                </tr>
              )
            })}
          </tbody>
        </HomeTableStyles>
        <HomeSmallScreenContent>
          {transactions.map((transaction) => {
            return (
              <section key={transaction.id}>
                <header>{transaction.description}</header>
                <main>
                  <PriceHighLight textcolor={transaction.type}>
                    {valueFormatter.format(transaction.value)}
                  </PriceHighLight>
                </main>
                <footer className="flexReset">
                  <p className="flexReset">
                    <ArrowFatRight />
                    {transaction.category}
                  </p>
                  <p>{dateFormatter.format(new Date(transaction.date))}</p>
                </footer>
              </section>
            )
          })}
        </HomeSmallScreenContent>
      </HomeContainerStyles>
    </div>
  )
}
