import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import AuthProvider from './AuthProvider/AuthProvider'
import routes from './privateRoute/routes'

const FallbackComponent = () => <div>Loading...</div>;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>,
)

