import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from "./components/pageHome"
import Error from "./components/pageError"
import Produtos from "./components/pageProdutos"
import EditarProduto from "./components/pageEditarProduto"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <Error/>,
    children:[
      {path : "/home", element: <Home/>},
      {path : "/produtos", element: <Produtos/>},
      {path : "/editarproduto", element: <EditarProduto/>}
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
