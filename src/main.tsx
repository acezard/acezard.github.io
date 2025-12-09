import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { ArtGallery } from './pages/ArtGallery.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/art" element={<ArtGallery />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
