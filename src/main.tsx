import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { AddMovie, EditMovie, MovieDetails } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        index: true,
        element: null,
      },
      {
        path: '/:id',
        element: <MovieDetails />,
      },
      {
        path: '/new',
        element: <AddMovie />,
      },
      { path: '/:id/edit', element: <EditMovie /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
