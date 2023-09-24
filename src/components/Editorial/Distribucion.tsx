import { DISTRIBUCION } from '../../assets/ts/names';
import { Fullpage } from '..';
import styled from 'styled-components';

const Distribucion: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage
      title={DISTRIBUCION.name}
      selfId={DISTRIBUCION.friendlyUrl}
      nextId={nextId}
    >
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default Distribucion;

const Wrapper = styled.div``;
