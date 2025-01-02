import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Pages/Data'
import Movie from './Pages/Movie'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import MainPage from './Pages/Main'
import Footer from './Pages/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes >
          <Route path="/"  element={<Data />} />
          <Route path='/movie/:id' element={<Movie/>}></Route>
          <Route path='*' element={<h1>Not Found</h1>}></Route>
          <Route path='/main' element={<MainPage></MainPage>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
