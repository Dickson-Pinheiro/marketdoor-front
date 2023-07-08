import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify"
import { GlobalStyles } from "./GlobalStyles"
import { defaultTheme } from "./styles/themes/default";
import { orangeBlack } from "./styles/themes/orangeBlack";
import Router from "./router"
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <ThemeProvider theme={orangeBlack}>
      <ToastContainer />
      <GlobalStyles />
      <Router />
    </ThemeProvider>

  )
}

export default App
