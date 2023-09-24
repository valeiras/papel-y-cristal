import { ContactoCmp, RecepcionDeOriginales } from '../components';
import { RECEPCION_DE_ORIGINALES } from '../assets/ts/names';
import { getFriendlyUrl } from '../assets/ts/utils';

const Contacto: React.FC = () => {
  return (
    <>
      <ContactoCmp nextId={getFriendlyUrl(RECEPCION_DE_ORIGINALES)} />
      <RecepcionDeOriginales />
    </>
  );
};
export default Contacto;
