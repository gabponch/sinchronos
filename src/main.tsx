import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Cadastro from './pages/Cadastro.tsx';
import Recuperar from './pages/Recuperar.tsx';
import Ponto from './pages/Ponto.tsx';
import Corrigir from './pages/Corrigir.tsx';
import Historico from './pages/Historico.tsx';
import Confirmação from './pages/Confirmação.tsx';
import Justificativa from './pages/Justificar.tsx';
import Notificacoes from './pages/Notificacoes.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/recuperar-senha",
    element: <Recuperar />,
  },
  {
    path: "/ponto",
    element: <Ponto />,
  },
  {
    path: "/corrigir",
    element: <Corrigir />,
  },
  {
    path: "/historico",
    element: <Historico />,
  },
  {
    path: "/confirmacao",
    element: <Confirmação />,
  },
  {
    path: "/justificativa",
    element: <Justificativa />,
  },
  {
    path: "/notificacoes",
    element: <Notificacoes />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


