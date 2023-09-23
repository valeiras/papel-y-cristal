import { DISTRIBUCION } from '../../assets/ts/ids';
import { Fullpage } from '..';
import styled from 'styled-components';

const Distribucion: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage title="Distribución" selfId={DISTRIBUCION} nextId={nextId}>
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default Distribucion;

const Wrapper = styled.div``;
