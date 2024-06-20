import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { NameAndIcon, SummaryContent, SummaryStyles } from './Summary.styles'
import { valueFormatter } from '../../utils/formats'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summaryValues = useSummary()

  return (
    <SummaryStyles>
      <SummaryContent>
        <NameAndIcon>
          <p>Entrada</p>
          <span className="arrowUp">
            <ArrowCircleUp />
          </span>
        </NameAndIcon>
        <p className="money">{valueFormatter.format(summaryValues.income)}</p>
      </SummaryContent>

      <SummaryContent>
        <NameAndIcon>
          <p>Saídas</p>
          <span className="arrowDown">
            <ArrowCircleDown />
          </span>
        </NameAndIcon>
        <p className="money">{valueFormatter.format(summaryValues.outcome)}</p>
      </SummaryContent>

      <SummaryContent
        bgcolor={
          summaryValues.total > 0
            ? 'green2'
            : summaryValues.total < 0
              ? 'red1'
              : undefined
        }
      >
        <NameAndIcon>
          <p>Total</p>
          <span>
            <CurrencyDollar />
          </span>
        </NameAndIcon>
        <p className="money">{valueFormatter.format(summaryValues.total)}</p>
      </SummaryContent>
    </SummaryStyles>
  )
}
