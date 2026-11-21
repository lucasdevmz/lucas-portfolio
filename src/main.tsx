import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'
import { ThemeProvider } from './contexts/ThemeContext'
import './styles/global.css'
import './styles/themes.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/contact.css'
import './styles/footer.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
