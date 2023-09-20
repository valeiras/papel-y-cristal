import styled from 'styled-components';
import { sections } from '../../data/sections';
import { NavLink } from 'react-router-dom';
import { useNavbarContext } from './Navbar';
import { Submenu } from '..';
import { getFriendlyUrl } from '../../assets/js/utils';

const Navlinks: React.FC = () => {
  const { setSectionId, setCurrSectionLeftPos } = useNavbarContext();

  return (
    <NavlinksWrapper>
      {sections.map(({ name, id, subsections, isExternalLink, href }) => {
        return (
          <div className="link-and-submenu-container">
            <div
              key={id}
              className="nav-item"
              onMouseEnter={(evt) => {
                setSectionId(id);
                const node = evt.target as HTMLElement;
                const { left } = node.getBoundingClientRect();
                setCurrSectionLeftPos(left);
              }}
            >
              {isExternalLink ? (
                <a href={href} target="_blank">
                  {name}
                </a>
              ) : (
                <NavLink
                  to={`/${getFriendlyUrl(name)}`}
                  onClick={() => {
                    setSectionId(-1);
                  }}
                >
                  {name}
                </NavLink>
              )}
            </div>
            <Submenu sectionName={name} subsections={subsections} id={id} />
          </div>
        );
      })}
    </NavlinksWrapper>
  );
};
export default Navlinks;

const NavlinksWrapper = styled.div`
  display: none;
  height: 100%;

  .nav-item {
    color: var(--theme-color-dar-green);
    font-size: 1.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1.5rem;
  }
  @media (min-width: 992px) {
    display: flex;
  }
`;
