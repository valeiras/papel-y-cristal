import styled from 'styled-components';
import { useNavbarContext } from './Navbar';
import { useRef, useState, useEffect } from 'react';
import { sections } from '../../data/sections';
import { Link } from 'react-router-dom';
import { getFriendlyUrl } from '../../assets/js/utils';

const MobileMenu: React.FC = () => {
  const { showMobileMenu, setShowMobileMenu } = useNavbarContext();
  const [desiredMenuHeight, setDesiredMenuHeight] = useState(0);

  const menuLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desiredHeight =
      menuLinksRef.current !== null && showMobileMenu
        ? menuLinksRef.current.getBoundingClientRect().height
        : 0;
    setDesiredMenuHeight(desiredHeight);
  }, [showMobileMenu]);

  return (
    <MobileMenuWrapper style={{ height: `${desiredMenuHeight}px` }}>
      <div className="links" ref={menuLinksRef}>
        {sections.map(({ id, name: sectionName, subsections }) => {
          return (
            <div className="section" key={id}>
              <Link
                className="section-title"
                to={`/${getFriendlyUrl(sectionName)}`}
                onClick={() => setShowMobileMenu(false)}
              >
                {sectionName}
              </Link>
              <div className="subsections">
                {subsections.map((subsectionName) => {
                  return (
                    <Link
                      className="subsection-title"
                      to={`/${getFriendlyUrl(sectionName)}/${getFriendlyUrl(
                        subsectionName
                      )}`}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {subsectionName}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </MobileMenuWrapper>
  );
};
export default MobileMenu;

const MobileMenuWrapper = styled.div`
  overflow: hidden;
  text-align: left;
  margin: 0 auto;
  width: fit-content;
  transition: var(--transition);

  @media (min-width: 992px) {
    display: none;
  }

  .section-title {
    font-weight: 600;
    font-size: 1.5rem;
  }

  .subsections {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 0.5rem;
    padding: 0.5rem 0rem 1rem 1rem;
  }
`;
