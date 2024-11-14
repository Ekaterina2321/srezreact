import './App.css'

import { Header } from "./components/Header/Header"
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/HomePage/HomePage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { TovarPage } from './pages/TovarPage/TovarPage';
function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage/>} />
        <Route path='/catalog/:id' element={<TovarPage/>} />
      </Routes>
    </>
  )
}

export default App

