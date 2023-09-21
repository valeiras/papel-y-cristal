import styled from 'styled-components';
import logo from '../../assets/imgs/Logo.svg';
import { NavLink } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <NavLink
        to="/"
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <img src={logo} alt="Papel y cristal" className="logo-img" />
      </NavLink>
    </Wrapper>
  );
};
export default Logo;

const Wrapper = styled.div`
  height: 80%;

  .logo-img {
    height: 100%;
  }
`;
