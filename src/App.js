import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <ToastContainer /> 
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
