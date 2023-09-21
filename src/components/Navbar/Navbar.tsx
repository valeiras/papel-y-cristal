/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';
import { Logo, MobileMenu, Navlinks, Toggle } from '..';
import { createContext, useContext, useState } from 'react';

interface NavbarContextType {
  sectionId: number;
  setSectionId: React.Dispatch<React.SetStateAction<number>>;
  currSectionLeftPos: number;
  setCurrSectionLeftPos: React.Dispatch<React.SetStateAction<number>>;
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextType | null>(null);

const Navbar: React.FC = () => {
  const [sectionId, setSectionId] = useState(-1);
  const [currSectionLeftPos, setCurrSectionLeftPos] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        sectionId,
        setSectionId,
        currSectionLeftPos,
        setCurrSectionLeftPos,
        showMobileMenu,
        setShowMobileMenu,
      }}
    >
      <NavbarWrapper
        onMouseLeave={() => {
          setSectionId(-1);
        }}
      >
        <div className="nav-center">
          <Logo />
          <Navlinks />
          <Toggle />
        </div>
        <MobileMenu />
      </NavbarWrapper>
    </NavbarContext.Provider>
  );
};
export default Navbar;

export const useNavbarContext = () => {
  return useContext(NavbarContext) as NavbarContextType;
};

const NavbarWrapper = styled.nav`
  background: var(--theme-color-white);
  position: fixed;
  top: 0;
  width: 100%;
  height: fit-content;
  box-shadow: var(--shadow-1);
  transition: var(--transition);

  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
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
