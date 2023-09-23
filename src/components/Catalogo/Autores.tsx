import { AUTORES } from '../../assets/ts/ids';
import { Fullpage } from '../';
import styled from 'styled-components';

const Autores: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage title="Autores" selfId={AUTORES} nextId={nextId}>
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default Autores;

const Wrapper = styled.div``;
