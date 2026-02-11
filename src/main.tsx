import React from 'react'
import { createRoot } from 'react-dom/client'
import RoutesApp from '@/routes/app'
import { BrowserRouter } from 'react-router-dom'
import '@/styles/tailwind/index.css' 

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
