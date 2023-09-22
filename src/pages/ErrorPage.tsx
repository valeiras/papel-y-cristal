import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div className="fullpage-container">
      <h1>Ups...</h1>
      <h2>Algo ha salido mal...</h2>
      <h4>{errorMessage}</h4>
    </div>
  );
};

export default ErrorPage;
