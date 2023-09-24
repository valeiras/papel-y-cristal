import { NOVEDADES } from '../assets/ts/names';
import { Fullpage } from './';
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
