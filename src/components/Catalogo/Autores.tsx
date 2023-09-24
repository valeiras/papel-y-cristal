import { AUTORES } from '../../assets/ts/names';
import { Fullpage } from '../';
import styled from 'styled-components';

const Autores: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage title={AUTORES.name} selfId={AUTORES.friendlyUrl} nextId={nextId}>
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default Autores;

const Wrapper = styled.div``;
