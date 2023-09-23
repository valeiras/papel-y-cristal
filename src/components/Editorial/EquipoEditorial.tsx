import { EQUIPO_EDITORIAL } from '../../assets/ts/ids';
import { Fullpage } from '..';
import styled from 'styled-components';

const EquipoEditorial: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage
      title="Equipo editorial"
      selfId={EQUIPO_EDITORIAL}
      nextId={nextId}
    >
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default EquipoEditorial;

const Wrapper = styled.div``;
