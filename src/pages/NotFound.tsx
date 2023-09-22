import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="fullpage-container">
      <h1>Ups...</h1>
      <h3>No hemos encontrado la página solicitada</h3>
      <button className="btn">
        <Link to="/">Sácame de aquí</Link>
      </button>
    </div>
  );
};
export default NotFound;
