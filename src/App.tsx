import { ThemeProvider } from "styled-components";
import { Transaction } from "./pages/Transaction";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transaction />
    </ThemeProvider>
  );
}

export default App;
