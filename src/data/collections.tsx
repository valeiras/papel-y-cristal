import { sliderItemType } from '../assets/ts/types';
import picture from '../assets/imgs/La_fuerza.jpg';
import { nanoid } from 'nanoid';

export const collections: sliderItemType[] = [
  { name: 'origami', img: picture, id: nanoid() },
  { name: 'marcapáginas', img: picture, id: nanoid() },
  { name: 'remite', img: picture, id: nanoid() },
  { name: 'collage', img: picture, id: nanoid() },
];
