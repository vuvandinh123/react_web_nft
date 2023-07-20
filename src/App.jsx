import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/HomePage/HomePage';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
