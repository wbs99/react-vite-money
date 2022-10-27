import { createBrowserRouter } from 'react-router-dom'
import { ItemCreate } from '../components/Items/ItemCreate';
import { ItemList } from '../components/Items/ItemList';
import { RedirectToWelcome1 } from '../components/RedirectToWelcome1';
import { TagCreate } from '../components/tags/TagCreate';
import { TagEdit } from '../components/tags/TagEdit';
import { Test } from '../components/Test';
import { Welcome1 } from '../components/Welcome1';
import { Welcome2 } from '../components/Welcome2';
import { Welcome3 } from '../components/Welcome3';
import { Welcome4 } from '../components/Welcome4';
import { MainLayout } from '../layouts/MainLayout';
import { ItemPage } from '../views/ItemPage';
import { Start } from '../views/Start';
import { TagPage } from '../views/TagPage';

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
    path: "/items",
    element: <ItemPage />,
    children: [
      { path: '', element: <ItemList /> },
      { path: 'create', element: <ItemCreate /> },

    ]
  },
  {
    path: "/test/:id",
    element: <Test />,
  },
  {
    path: "/tags",
    element: <TagPage />,
    children: [
      { path: 'create', element: <TagCreate /> },
      { path: ':id/edit', element: <TagEdit /> },
    ]
  },
]);