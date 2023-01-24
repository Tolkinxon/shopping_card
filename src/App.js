import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { ToastContainer } from 'react-toastify'
import { ContextProvider } from './context'


function App() {
  return (
    <div className="App">
      <ToastContainer /> 
      <Header />
      <ContextProvider>
      <Main />
      </ContextProvider>
      <Footer />
    </div>
  )
}

export default App
