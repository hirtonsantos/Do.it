import { Toaster } from "react-hot-toast";
import Routes from "./Components/Routes/index";
import GlobalStyle from "./Components/styles/Global"

function App() {
  return(
    <>
    <GlobalStyle />
    <Toaster
    position = "top-right"
    autoClose = {5000}
    hideProgressBar = {false}
    newestOnTop = {false}
    closeOnClick
    rtl = {false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <Routes/>
    </>
  )
}

export default App;
