import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";
import GlobalStyles from "./theme/GlobalStyles.styles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Style from "./pages/Style";
import Shop from "./pages/Shop";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/style" element={<Style />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
