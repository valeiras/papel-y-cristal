import { ESCRIBENOS } from '../../assets/ts/ids';
import { Fullpage } from '..';
import styled from 'styled-components';

const Escribenos: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage title="Escríbenos" selfId={ESCRIBENOS} nextId={nextId}>
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default Escribenos;

const Wrapper = styled.div``;
