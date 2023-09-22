import styled from 'styled-components';
import { sections } from '../../data/sections';
import { NavLink } from 'react-router-dom';
import { useNavbarContext } from './Navbar';
import { Submenu } from '..';
import { getFriendlyUrl } from '../../assets/ts/utils';

const Navlinks: React.FC = () => {
  const { setSectionId, setCurrSectionLeftPos } = useNavbarContext();

  return (
    <Wrapper>
      {sections.map(({ name, id, subsections, staticUrl, outboundLink }) => {
        return (
          <div className="link-and-submenu-container" key={id}>
            <div
              className="nav-item"
              onMouseEnter={(evt) => {
                setSectionId(id);
                const node = evt.target as HTMLElement;
                const { left } = node.getBoundingClientRect();
                setCurrSectionLeftPos(left);
              }}
            >
              {outboundLink ? (
                <a href={outboundLink} target="_blank">
                  {name}
                </a>
              ) : (
                <NavLink
                  to={staticUrl ? staticUrl : `/${getFriendlyUrl(name)}`}
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
    </Wrapper>
  );
};
export default Navlinks;

const Wrapper = styled.div`
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
