import React from 'react'
import { createRoot } from 'react-dom/client'
import RoutesApp from '@/routes/app'
import { BrowserRouter } from 'react-router-dom'
import '@/styles/tailwind/index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

createRoot(document.getElementById('root')!).render(
<QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </React.StrictMode>,
</QueryClientProvider>
)
