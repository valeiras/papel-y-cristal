import { Colecciones, Autores } from '../components';
import { AUTORES } from '../assets/ts/names';

const Catalogo: React.FC = () => {
  return (
    <>
      <Colecciones nextId={AUTORES.friendlyUrl} />
      <Autores />
    </>
  );
};
export default Catalogo;
