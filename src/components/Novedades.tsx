import { NOVEDADES } from '../assets/ts/ids';
import Fullpage from './Fullpage';
import styled from 'styled-components';

const Novedades: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage title="Novedades" selfId={NOVEDADES} nextId={nextId}>
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default Novedades;

const Wrapper = styled.div``;
