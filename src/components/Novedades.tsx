import { NOVEDADES } from '../assets/ts/names';
import { Fullpage } from './';
import styled from 'styled-components';

const Novedades: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage
      title={NOVEDADES.name}
      selfId={NOVEDADES.friendlyUrl}
      nextId={nextId}
    >
      <Wrapper>
        <div className="item-container"></div>
      </Wrapper>
    </Fullpage>
  );
};
export default Novedades;

const Wrapper = styled.div`
  .item-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
