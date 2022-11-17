// A C T I O N S   V S  L O A D E R S
//Utiliza Loaders para obtener datos de una API o de un objeto similar a un state
//Utiliza Actions para procesar la entrada de datos de un Form

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Layout from './components/Layout';
import './index.css';
import Index, { loader as clientesLoader } from './pages/Index';
import NuevoCliente from './pages/NuevoCliente';
import { action as nuevoClienteAction } from './pages/NuevoCliente'; //importamos el action y lo renombramos

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />, //carga los clientes
        loader: clientesLoader, //Asociamos el Loader
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction, //asociamos el action a el componente
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
