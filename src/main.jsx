import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import './index.css'
import Contact from "./routes/contacts.jsx";
import Root, { loader as rootLoader, action as rootAction } from './routes/root'
import { loader as contactLoader } from './routes/contacts.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage />,
  loader: rootLoader,
  action: rootAction,
  children: [
    {
      path: "contacts/:contactId",
      element: <Contact />,
      loader: contactLoader
    }
  ]
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
