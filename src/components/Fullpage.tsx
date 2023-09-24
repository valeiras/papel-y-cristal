import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

const Fullpage: React.FC<{
  children: React.ReactNode;
  title: string;
  selfId: string;
  nextId?: string;
}> = ({ children, title, selfId, nextId }) => {
  const handleBtnClick = () => {
    if (nextId) {
      const linkedElement = document.getElementById(nextId);
      linkedElement?.scrollIntoView();
    }
  };

  return (
    <Wrapper id={selfId}>
      <h1>{title}</h1>
      <div className="hor-line"></div>
      <div className="child-container">{children}</div>
      {nextId && (
        <FaChevronDown className="arrow-down-btn" onClick={handleBtnClick} />
      )}
    </Wrapper>
  );
};
export default Fullpage;

const Wrapper = styled.div`
  min-height: calc(100svh - var(--navbar-height));
  position: relative;
  scroll-margin-top: var(--navbar-height);
  display: flex;
  flex-direction: column;
  padding: 2rem var(--side-padding) 1.5rem;

  .arrow-down-btn {
    margin: 0 auto;
    cursor: pointer;
    font-size: 1.5rem;
    transition: var(--transition);
    display: none;
  }

  @media (min-width: 992px) {
    padding: 3rem var(--side-padding) 2rem;

    .arrow-down-btn {
      display: block;
    }
  }

  .arrow-down-btn:hover {
    transform: translateY(3px);
  }

  .hor-line {
    height: 2px;
    width: calc(100% + var(--side-padding));
    background-color: var(--theme-color-dark-green);
    margin-top: 0.5rem;
    position: relative;
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
    font-weight: 300;

    h1 {
      font-weight: 300;
    }
    .hor-line {
      background-color: var(--theme-color-white);
    }
  }

  .child-container {
    flex: 1;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(odd) {
    .hor-line {
      right: var(--side-padding);
    }
    h1 {
      text-align: right;
    }
  }

  &:nth-child(even) {
    h1 {
      text-align: left;
    }
  }
`;
