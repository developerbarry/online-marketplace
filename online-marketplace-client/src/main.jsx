import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import Navbar from './components/NavBar/NavBar'

const FallbackComponent = () => <div>Loading...</div>;


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navbar/>,
    HydrateFallback: FallbackComponent,
    loader: () => fetch('https://jsonplaceholder.typicode.com/users')

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={routes} />
  </StrictMode>,
)


// which one is prefer 
// if i used v7 then i don't need to upgrading stuff like this