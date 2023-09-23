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
                const node = evt.currentTarget as HTMLElement;
                const { left } = node.getBoundingClientRect();
                console.log(evt.target);

                console.log(node.getBoundingClientRect());

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
                    window.scrollTo(0, 0);
                  }}
                >
                  {name}
                  <div className="underline"></div>
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
    font-size: 1.3rem;
    height: 100%;
    display: flex;
    align-items: center;
    padding: calc(1.5rem + 2px) 0 1.5rem var(--navlink-left-padding);
    text-align: right;
  }

  .underline {
    width: 0%;
    height: 2px;
  }

  .active .underline {
    width: 100%;
    height: 2px;
    background-color: var(--theme-color-dark-green);
    animation: line-appear 0.5s ease-in-out;
  }

  @keyframes line-appear {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;
