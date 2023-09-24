/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';
import { Logo, MobileMenu, Navlinks, Toggle } from '..';
import { createContext, useContext, useState } from 'react';

interface NavbarContextType {
  currSectionName: string;
  setCurrSectionName: React.Dispatch<React.SetStateAction<string>>;
  currSectionLeftPos: number;
  setCurrSectionLeftPos: React.Dispatch<React.SetStateAction<number>>;
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextType | null>(null);

const Navbar: React.FC = () => {
  const [currSectionName, setCurrSectionName] = useState('');
  const [currSectionLeftPos, setCurrSectionLeftPos] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        currSectionName,
        setCurrSectionName,
        currSectionLeftPos,
        setCurrSectionLeftPos,
        showMobileMenu,
        setShowMobileMenu,
      }}
    >
      <Wrapper
        onMouseLeave={() => {
          setCurrSectionName('');
        }}
      >
        <div className="nav-center">
          <Logo />
          <Navlinks />
          <Toggle />
        </div>
        <MobileMenu />
      </Wrapper>
    </NavbarContext.Provider>
  );
};
export default Navbar;

export const useNavbarContext = () => {
  return useContext(NavbarContext) as NavbarContextType;
};

const Wrapper = styled.nav`
  background: var(--theme-color-white);
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: fit-content;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  padding: 0 var(--side-padding);

  .nav-center {
    width: 100%;
    height: var(--navbar-height);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-toggle {
  }

  .nav-links {
    display: none;
    position: absolute;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
      position: absolute;
    }

    .nav-links {
      position: static;
      display: flex;
    }
  }
`;
