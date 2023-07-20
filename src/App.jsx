import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
function App() {

  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}></Route>
        </Route>
      </Routes> */}
      <Header/>
      <h1>hello</h1>
    </>
  )
}

export default App
