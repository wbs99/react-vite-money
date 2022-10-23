import { createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome1 } from '../components/RedirectToWelcome1';
import { Test } from '../components/Test';
import { Welcome1 } from '../components/Welcome1';
import { Welcome2 } from '../components/Welcome2';
import { Welcome3 } from '../components/Welcome3';
import { Welcome4 } from '../components/Welcome4';
import { MainLayout } from '../layouts/MainLayout';
import { Start } from '../views/Start';

export const router = createBrowserRouter([
  {
    path: '/', element: <MainLayout />,
  },
  {
    path: "/welcome",
    element: <MainLayout />,
    errorElement: <RedirectToWelcome1 />,
    children: [
      { path: '1', element: <Welcome1 /> },
      { path: '2', element: <Welcome2 /> },
      { path: '3', element: <Welcome3 /> },
      { path: '4', element: <Welcome4 /> },

    ]
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/test/:id",
    element: <Test />,
  },
]);