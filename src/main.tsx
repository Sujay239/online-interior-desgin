import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import styles from './index.css?inline'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <App />
  </StrictMode>,
)
