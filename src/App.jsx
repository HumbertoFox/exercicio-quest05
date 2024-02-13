import { AppRouters } from "./pages/routes";
import { HeaderPage } from "./components/header/header";
import { GlobalStyleis } from "./components/styles/globalstyle";
import { ThemeProvider } from "./components/contexts/themecontext";

function App() {

  return (
    <ThemeProvider>
      <GlobalStyleis />
      <HeaderPage />
      <AppRouters />
    </ThemeProvider>
  );
};

export default App;