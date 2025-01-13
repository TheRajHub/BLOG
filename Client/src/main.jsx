import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './LoginPage.jsx'
import './main.css'
import Admin from './Admin.jsx'
import BlogEditor from './BlogEditor.jsx'
import Work from './Work.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Admin />
  </StrictMode>,
)
