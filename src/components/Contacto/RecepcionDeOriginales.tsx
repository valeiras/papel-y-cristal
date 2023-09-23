import { RECEPCION_DE_ORIGINALES } from '../../assets/ts/ids';
import { Fullpage } from '..';
import styled from 'styled-components';

const RecepcionDeOriginales: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage
      title="Recepción de originales"
      selfId={RECEPCION_DE_ORIGINALES}
      nextId={nextId}
    >
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default RecepcionDeOriginales;

const Wrapper = styled.div``;
