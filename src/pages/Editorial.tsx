import { QuienesSomos, EquipoEditorial, Distribucion } from '../components';
import { EQUIPO_EDITORIAL, DISTRIBUCION } from '../assets/ts/ids';

const Editorial: React.FC = () => {
  return (
    <>
      <QuienesSomos nextId={EQUIPO_EDITORIAL} />
      <EquipoEditorial nextId={DISTRIBUCION} />
      <Distribucion />
    </>
  );
};
export default Editorial;
