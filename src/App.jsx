import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import Context from './Context/Context'
import Detail from './Pages/Detail'
import Favs from './Pages/Favs'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='*' element={<h1>Page not found - Error 404</h1>}/>
      </Routes>
    </>
  )
}

export default App
