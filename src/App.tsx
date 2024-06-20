import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/transactionsContext'
import { AppRoutes } from './routes'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <TransactionsProvider>
        <AppRoutes />
      </TransactionsProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}
