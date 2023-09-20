import styled from 'styled-components';

const Toggle: React.FC = () => {
  return <ToggleWrapper>Toggle</ToggleWrapper>;
};
export default Toggle;

const ToggleWrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;
