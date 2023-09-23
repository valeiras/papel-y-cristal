import { Colecciones, Autores } from '../components';
import { AUTORES } from '../assets/ts/ids';

const Catalogo: React.FC = () => {
  return (
    <>
      <Colecciones nextId={AUTORES} />
      <Autores />
    </>
  );
};
export default Catalogo;
