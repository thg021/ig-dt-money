import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useTheme } from "styled-components";
export function Summary() {
  const theme = useTheme();
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme["green-500"]} />
        </header>
        <strong>R$ 15.034,33</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color={theme["red-500"]} />
        </header>
        <strong>R$ 15.034,33</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme["white"]} />
        </header>
        <strong>R$ 15.034,33</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
