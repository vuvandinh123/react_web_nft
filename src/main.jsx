import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import store from './redux/store.js';
// scrollRestoration="auto" 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter >
        <App />
      </HashRouter>
    </Provider>

  </React.StrictMode>,
)
