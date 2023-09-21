import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

const Fullpage: React.FC<{
  children: React.ReactNode;
  selfId: string;
  nextId?: string;
}> = ({ children, selfId, nextId }) => {
  const handleBtnClick = () => {
    if (nextId) {
      const linkedElement = document.getElementById(nextId);
      linkedElement?.scrollIntoView();
    }
  };

  return (
    <Wrapper id={selfId}>
      {children}
      {nextId && (
        <FaChevronDown className="arrow-down-btn" onClick={handleBtnClick} />
      )}
    </Wrapper>
  );
};
export default Fullpage;

const Wrapper = styled.div`
  min-height: calc(100dvh - var(--navbar-height));
  position: relative;
  scroll-margin-top: var(--navbar-height);
  display: flex;
  flex-direction: column;

  .arrow-down-btn {
    margin: 0 auto;
    cursor: pointer;
    font-size: 1.5rem;
    transition: var(--transition);
    margin-bottom: 1rem;
  }

  .arrow-down-btn:hover {
    transform: translateY(3px);
  }

  &:nth-child(3n) {
    background-color: var(--theme-color-white);
  }

  &:nth-child(3n + 1) {
    background-color: var(--theme-color-light-green);
  }

  &:nth-child(3n + 2) {
    background-color: var(--theme-color-dark-green);
    color: var(--theme-color-white);
  }
`;
