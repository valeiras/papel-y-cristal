import { Colecciones, Novedades, QuienesSomos } from '../components';
import { COLECCIONES, QUIENES_SOMOS } from '../assets/ts/names';
import { getFriendlyUrl } from '../assets/ts/utils';

const Landing: React.FC = () => {
  return (
    <>
      <Novedades nextId={getFriendlyUrl(COLECCIONES)} />
      <Colecciones nextId={getFriendlyUrl(QUIENES_SOMOS)} />
      <QuienesSomos />
    </>
  );
};
export default Landing;
