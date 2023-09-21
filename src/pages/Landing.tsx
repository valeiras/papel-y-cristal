import { Colecciones, Novedades, QuienesSomos } from '../components';
import { COLECCIONES, QUIENES_SOMOS } from '../assets/js/ids';

const Landing: React.FC = () => {
  return (
    <>
      <Novedades nextId={COLECCIONES} />
      <Colecciones nextId={QUIENES_SOMOS} />
      <QuienesSomos />
    </>
  );
};
export default Landing;
