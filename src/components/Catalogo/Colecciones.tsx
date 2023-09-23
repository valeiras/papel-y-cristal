import { COLECCIONES } from '../../assets/ts/ids';
import { Fullpage } from '../';
import styled from 'styled-components';
import { MultipleItemSlider } from '..';
import { collections } from '../../data/collections';

const Colecciones: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage title="Colecciones" selfId={COLECCIONES} nextId={nextId}>
      <Wrapper>
        <MultipleItemSlider items={collections}></MultipleItemSlider>
      </Wrapper>
    </Fullpage>
  );
};
export default Colecciones;

const Wrapper = styled.div`
  width: 80vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--theme-color-dark-green);
`;
