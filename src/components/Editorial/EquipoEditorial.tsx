import { EQUIPO_EDITORIAL } from '../../assets/ts/names';
import { Fullpage } from '..';
import styled from 'styled-components';

const EquipoEditorial: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage
      title={EQUIPO_EDITORIAL.name}
      selfId={EQUIPO_EDITORIAL.friendlyUrl}
      nextId={nextId}
    >
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default EquipoEditorial;

const Wrapper = styled.div``;
