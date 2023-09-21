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
    <div id="error-page">
      <h1 className="title-error">Ups...</h1>
      <h2 className="subtitle-error">Algo ha salido mal...</h2>
      <h4 className="status-error">{errorMessage}</h4>
    </div>
  );
};

export default ErrorPage;
