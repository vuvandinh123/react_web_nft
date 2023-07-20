import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter scrollRestoration="auto">
      <App />
    </HashRouter>
  </React.StrictMode>,
)
