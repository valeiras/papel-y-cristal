import { QUIENES_SOMOS } from '../../assets/ts/ids';
import Fullpage from '../Fullpage';
import styled from 'styled-components';

const QuienesSomos: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage title="Quiénes somos" selfId={QUIENES_SOMOS} nextId={nextId}>
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default QuienesSomos;

const Wrapper = styled.div``;
