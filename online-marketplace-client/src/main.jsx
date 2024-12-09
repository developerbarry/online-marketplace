import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import Root from './layouts/Root/Root'
import HomePage from './pages/HomePage/HomePage'

const FallbackComponent = () => <div>Loading...</div>;


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={routes} />
  </StrictMode>,
)


// which one is prefer 
// if i used v7 then i don't need to upgrading stuff like this