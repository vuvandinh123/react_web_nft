import './App.scss'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from './layout/layout'
import HomePage from './pages/HomePage/HomePage';
function App() {

  return (
    <>
       <HashRouter>
      <Switch>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Switch>
    </HashRouter>
    </>
  )
}

export default App
