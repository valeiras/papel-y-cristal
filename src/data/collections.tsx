/* eslint-disable react-refresh/only-export-components */
import { itemType } from '../assets/ts/types';
import picture from '../assets/imgs/La_fuerza.jpg';
import { nanoid } from 'nanoid';
import { getFriendlyUrl } from '../assets/ts/utils';

const ORIGAMI = 'Origami';
const MARCAPAGINAS = 'Marcapáginas';
const REMITE = 'Remite';
const COLLAGE = 'Collage';

export const collections: itemType[] = [
  {
    name: ORIGAMI,
    friendlyUrl: getFriendlyUrl(ORIGAMI),
    img: picture,
    id: nanoid(),
  },
  {
    name: MARCAPAGINAS,
    friendlyUrl: getFriendlyUrl(MARCAPAGINAS),
    img: picture,
    id: nanoid(),
  },
  {
    name: REMITE,
    friendlyUrl: getFriendlyUrl(REMITE),
    img: picture,
    id: nanoid(),
  },
  {
    name: COLLAGE,
    friendlyUrl: getFriendlyUrl(COLLAGE),
    img: picture,
    id: nanoid(),
  },
];
