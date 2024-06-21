import { Details, loader as detailsLoader } from '@routes/details';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from '@/components/ErrorPage';
import Edit, {
  loader as editLoader,
  action as editAction,
} from '@/routes/edit';
import { Layout } from '@/routes/layout';
import { List, loader as listLoader } from '@/routes/list';

import { TodoDetail } from './routes/todoDetail';
import TodoListPage from './routes/todoList';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <List />,
        loader: listLoader,
      },
      {
        path: 'details/:id',
        element: <Details />,
        loader: detailsLoader,
      },
      {
        path: 'details/:id/edit',
        element: <Edit />,
        loader: editLoader,
        action: editAction,
      },
      {
        path: 'todos',
        element: <TodoListPage />,
      },
      {
        path: 'todos/:id',
        element: <TodoDetail />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
