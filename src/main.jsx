import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from "./routes/pageHome"
import Error from "./routes/pageError"
import Produtos from "./routes/pageProdutos"
import EditarProduto from "./routes/pageEditarProduto"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <Error/>,
    children:[
      {path : "/", element: <Home/>},
      {path : "/produtos", element: <Produtos/>},
      {path : "/editar/produto/:id", element: <EditarProduto/>}
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
