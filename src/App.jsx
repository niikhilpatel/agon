import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Footer from './components/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}  ></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>


      </>
      )
}

      export default App
