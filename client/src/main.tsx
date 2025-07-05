import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './store/userContext.tsx'
import { ProjectProvider } from './store/projectContext.tsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ProjectProvider>
      <App />
      </ProjectProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
