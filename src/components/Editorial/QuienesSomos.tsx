import { QUIENES_SOMOS } from '../../assets/ts/names';
import { Fullpage } from '..';
import styled from 'styled-components';

const QuienesSomos: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage
      title={QUIENES_SOMOS.name}
      selfId={QUIENES_SOMOS.friendlyUrl}
      nextId={nextId}
    >
      <Wrapper>
        <p>
          Somos una editorial independiente fundada en 2016, en el seno cultural
          y artístico de la ciudad de Granada, bajo el nombre de Poesía para tu
          día. En nuestras primeras publicaciones, el papel y el cristal fueron
          los principales materiales que se usaron para experimentar con otros
          formatos en poesía, siendo este el origen del nuevo nombre,{' '}
          <strong>Papel y Cristal Ediciones.</strong>
        </p>
        <p>
          En nuestras publicaciones tratamos poesía, narrativa e ilustración,
          poniendo siempre el máximo cuidado en todo lo que hacemos, revisando
          con mimo y detalle cada palabra, página y ejemplar para que llegue a
          manos lectoras en perfecto estado.
        </p>
        <p>
          Actualmente, estamos en proceso de crecimiento gracias a la sempiterna
          energía de <strong>Alberto Miñán</strong> (editor) y{' '}
          <strong>JD Verdejo</strong> (editor técnico).
        </p>
      </Wrapper>
    </Fullpage>
  );
};
export default QuienesSomos;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 0;
  p {
    font-size: 1.1rem;
    line-height: 1.5;
    text-align: justify;
    margin-top: 1rem;
  }

  @media (min-width: 992px) {
    width: 50vw;
    p {
      font-size: 1.3rem;
    }
  }
`;
