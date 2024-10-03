import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme.js'
import {router} from './router/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
