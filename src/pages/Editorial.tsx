import { QuienesSomos, EquipoEditorial, Distribucion } from '../components';
import { EQUIPO_EDITORIAL, DISTRIBUCION } from '../assets/ts/names';
import { getFriendlyUrl } from '../assets/ts/utils';

const Editorial: React.FC = () => {
  return (
    <>
      <QuienesSomos nextId={getFriendlyUrl(EQUIPO_EDITORIAL)} />
      <EquipoEditorial nextId={getFriendlyUrl(DISTRIBUCION)} />
      <Distribucion />
    </>
  );
};
export default Editorial;
