import { Escribenos, RecepcionDeOriginales } from '../components';
import { RECEPCION_DE_ORIGINALES } from '../assets/ts/ids';

const Contacto: React.FC = () => {
  return (
    <>
      <Escribenos nextId={RECEPCION_DE_ORIGINALES} />
      <RecepcionDeOriginales />
    </>
  );
};
export default Contacto;
