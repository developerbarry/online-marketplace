import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import Root from './layouts/Root/Root'
import HomePage from './pages/HomePage/HomePage'
import LogInPage from './pages/LogInPage/LogInPage'
import SIgnUpPage from './pages/SignUpPage/SIgnUpPage'
import AuthProvider from './AuthProvider/AuthProvider'
import JobDetails from './components/JobDetails/JobDetails'
import PrivateRoute from './privateRoute/PrivateRoute'

const FallbackComponent = () => <div>Loading...</div>;


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><JobDetails /></PrivateRoute>
      },
      {
        path: 'sign-in',
        element: <LogInPage />
      },
      {
        path: 'sign-up',
        element: <SIgnUpPage />
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>,
)

