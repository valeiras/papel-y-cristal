import { COLECCIONES } from '../../assets/ts/names';
import { Fullpage } from '../';
import styled from 'styled-components';
import { MultipleItemSlider } from '..';
import { collections } from '../../data/collections';

const Colecciones: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage
      title={COLECCIONES.name}
      selfId={COLECCIONES.friendlyUrl}
      nextId={nextId}
    >
      <Wrapper>
        <div className="inner-container">
          <MultipleItemSlider
            items={collections}
            basename={`/${COLECCIONES.friendlyUrl}`}
          ></MultipleItemSlider>
        </div>
      </Wrapper>
    </Fullpage>
  );
};
export default Colecciones;

const Wrapper = styled.div`
  /* width: 80vw; */
  min-height: 100%;
  color: var(--theme-color-dark-green);
  display: flex;
  align-items: center;
  justify-content: center;

  .inner-container {
    width: 80vw;
    margin: auto;
  }
`;
