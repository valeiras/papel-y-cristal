import { useParams } from 'react-router-dom';
import { Fullpage } from '../components';
import { getFriendlyUrl } from '../assets/ts/utils';
import { collections } from '../data/collections';

const Coleccion: React.FC = () => {
  const { collectionUrl } = useParams<{ collectionUrl: string }>() as {
    collectionUrl: string;
  };

  const currCollection = collections.find(({ friendlyUrl }) => {
    return friendlyUrl === collectionUrl;
  }) || { name: '' };
  const { name: collectionName } = currCollection;

  return (
    <Fullpage title={collectionName} selfId={getFriendlyUrl(collectionName)}>
      {' '}
    </Fullpage>
  );
};
export default Coleccion;
