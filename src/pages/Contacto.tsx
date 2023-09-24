import { ContactoCmp, RecepcionDeOriginales } from '../components';
import { RECEPCION_DE_ORIGINALES } from '../assets/ts/names';

const Contacto: React.FC = () => {
  return (
    <>
      <ContactoCmp nextId={RECEPCION_DE_ORIGINALES.friendlyUrl} />
      <RecepcionDeOriginales />
    </>
  );
};
export default Contacto;
