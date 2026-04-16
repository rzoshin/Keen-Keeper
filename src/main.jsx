import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, Routes } from 'react-router'
import { router } from './routes/Routes'
import { ToastContainer } from 'react-toastify'
import Providers from './context/Providers'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" theme="light" newestOnTop/>
    </Providers>
  </StrictMode>,
)
