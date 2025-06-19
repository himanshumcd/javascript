import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Changer from './changer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Changer/>
  </StrictMode>,
)
