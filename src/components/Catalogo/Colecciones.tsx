import { COLECCIONES } from '../../assets/js/ids';
import Fullpage from '../Fullpage';
import styled from 'styled-components';

const Colecciones: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage title="Colecciones" selfId={COLECCIONES} nextId={nextId}>
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default Colecciones;

const Wrapper = styled.div``;
