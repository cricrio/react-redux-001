import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oups!</h1>
      <p>Something went wrong!</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
