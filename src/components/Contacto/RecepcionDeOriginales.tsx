import { RECEPCION_DE_ORIGINALES } from '../../assets/ts/names';
import { Fullpage } from '..';
import styled from 'styled-components';

const RecepcionDeOriginales: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage
      title={RECEPCION_DE_ORIGINALES.name}
      selfId={RECEPCION_DE_ORIGINALES.friendlyUrl}
      nextId={nextId}
    >
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default RecepcionDeOriginales;

const Wrapper = styled.div``;
