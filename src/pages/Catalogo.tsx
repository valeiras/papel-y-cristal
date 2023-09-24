import { Colecciones, Autores } from '../components';
import { AUTORES } from '../assets/ts/names';
import { getFriendlyUrl } from '../assets/ts/utils';

const Catalogo: React.FC = () => {
  return (
    <>
      <Colecciones nextId={getFriendlyUrl(AUTORES)} />
      <Autores />
    </>
  );
};
export default Catalogo;
