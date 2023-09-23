import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { useNavbarContext } from './Navbar';
import { nanoid } from 'nanoid';
import { getFriendlyUrl } from '../../assets/ts/utils';
import { NavHashLink } from 'react-router-hash-link';

const Submenu: React.FC<{
  sectionName: string;
  subsections: string[];
  id: number;
}> = ({ sectionName, subsections, id }) => {
  const submenuLinksRef = useRef<HTMLDivElement>(null);
  const [linksHeight, setLinksHeight] = useState(0);

  const { sectionId, setSectionId, currSectionLeftPos } = useNavbarContext();

  useEffect(() => {
    const currHeight =
      submenuLinksRef.current !== null && sectionId === id
        ? submenuLinksRef.current.getBoundingClientRect().height
        : 0;
    setLinksHeight(currHeight);
  }, [sectionId, id]);

  if (sectionId !== id || subsections?.length === 0) {
    return null;
  }

  const linkStyles = {
    height: `${linksHeight}px`,
    left: `calc(${currSectionLeftPos}px + var(--navlink-left-padding) - var(--submenu-padding))`,
  };

  return (
    <Wrapper style={linkStyles}>
      <div className="links" ref={submenuLinksRef}>
        {subsections?.map((subsectionName: string) => {
          const url = `${getFriendlyUrl(sectionName)}/#${getFriendlyUrl(
            subsectionName
          )}`;
          return (
            <NavHashLink
              to={url}
              key={nanoid()}
              className="single-link"
              onClick={() => {
                setSectionId(-1);
              }}
            >
              {subsectionName}
            </NavHashLink>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Submenu;

const Wrapper = styled.div`
  transition: 0.5s ease-in-out height;
  overflow: hidden;
  position: absolute;
  box-shadow: var(--shadow-1);
  background-color: var(--theme-color-white);
  --submenu-padding: 1.5rem;

  .links {
    margin-top: 1px;
    background-color: var(--theme-color-white);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    box-shadow: var(--shadow-1);
    position: relative;
    border-radius: var(--borderRadius);
  }
  .single-link {
    font-size: 1.2rem;
  }
`;
