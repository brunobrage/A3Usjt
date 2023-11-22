import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Livro from './components/Livro/index';
import App from './App';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/texto/:theme",
    element: <Livro />,
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);

reportWebVitals();
