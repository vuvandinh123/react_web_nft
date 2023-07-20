import './App.scss'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout'
import HomePage from './pages/HomePage/HomePage';
import CardList from './components/Gloabal/CardList';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      <CardList/>
    </>
  )
}

export default App
