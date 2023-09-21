import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useNavbarContext } from './Navbar';

const Toggle: React.FC = () => {
  const { showMobileMenu, setShowMobileMenu } = useNavbarContext();
  const toggleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <ToggleWrapper>
      <button
        className={
          showMobileMenu
            ? 'invisible-btn toggle-btn active'
            : 'invisible-btn toggle-btn'
        }
        onClick={toggleShowMobileMenu}
      >
        <FaBars />
      </button>
    </ToggleWrapper>
  );
};
export default Toggle;

const ToggleWrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }

  .toggle-btn {
    font-size: 1.2rem;
    transition: var(--transition);
  }

  .active {
    transform: rotate(-90deg);
  }
`;
