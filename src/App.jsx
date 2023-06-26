import { ToastContainer } from "react-toastify"
import { GlobalStyles } from "./GlobalStyles"
import Router from "./router"
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <Router />
    </>

  )
}

export default App
