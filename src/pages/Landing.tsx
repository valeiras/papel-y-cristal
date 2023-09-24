import { Colecciones, Novedades, QuienesSomos } from '../components';
import { COLECCIONES, QUIENES_SOMOS } from '../assets/ts/names';

const Landing: React.FC = () => {
  return (
    <>
      <Novedades nextId={COLECCIONES.friendlyUrl} />
      <Colecciones nextId={QUIENES_SOMOS.friendlyUrl} />
      <QuienesSomos />
    </>
  );
};
export default Landing;
