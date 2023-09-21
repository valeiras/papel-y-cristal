import { QUIENES_SOMOS } from '../../assets/js/ids';
import Fullpage from '../Fullpage';
import styled from 'styled-components';

const QuienesSomos: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage selfId={QUIENES_SOMOS} nextId={nextId}>
      <Wrapper>Quiénes Somos</Wrapper>
    </Fullpage>
  );
};
export default QuienesSomos;

const Wrapper = styled.div`
  flex: 1;
`;
