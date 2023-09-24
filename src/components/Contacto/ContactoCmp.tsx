import { CONTACTO } from '../../assets/ts/names';
import { Fullpage } from '..';
import styled from 'styled-components';

const ContactoComponent: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <Fullpage
      title={CONTACTO.name}
      selfId={CONTACTO.friendlyUrl}
      nextId={nextId}
    >
      <Wrapper></Wrapper>
    </Fullpage>
  );
};
export default ContactoComponent;

const Wrapper = styled.div``;
