import { QuienesSomos, EquipoEditorial, Distribucion } from '../components';
import { EQUIPO_EDITORIAL, DISTRIBUCION } from '../assets/ts/names';

const Editorial: React.FC = () => {
  return (
    <>
      <QuienesSomos nextId={EQUIPO_EDITORIAL.friendlyUrl} />
      <EquipoEditorial nextId={DISTRIBUCION.friendlyUrl} />
      <Distribucion />
    </>
  );
};
export default Editorial;
