import { AppRouters } from "./pages/routes";
import { HeaderPage } from "./components/header/header";
import { GlobalStyleis } from "./components/styles/globalstyle";

function App() {

  return (
    <>
      <GlobalStyleis />
      <HeaderPage />
      <AppRouters />
    </>
  );
};

export default App;