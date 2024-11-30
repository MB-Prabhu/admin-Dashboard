import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminContext from './Components/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AdminContext>
      <App />
    </AdminContext>
  // </StrictMode>,
)
