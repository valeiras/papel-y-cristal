import {
  INICIO,
  EDITORIAL,
  CATALOGO,
  TIENDA,
  CONTACTO,
  QUIENES_SOMOS,
  EQUIPO_EDITORIAL,
  DISTRIBUCION,
  COLECCIONES,
  AUTORES,
} from '../assets/ts/names';

export const sections = [
  {
    name: INICIO.name,
    subsections: [],
    staticUrl: '/',
  },
  {
    name: EDITORIAL.name,
    subsections: [QUIENES_SOMOS.name, EQUIPO_EDITORIAL.name, DISTRIBUCION.name],
  },
  {
    name: CATALOGO.name,
    subsections: [COLECCIONES.name, AUTORES.name],
  },
  {
    name: TIENDA.name,
    subsections: [],
    outboundLink: 'https://www.etsy.com/es/shop/papelycristal',
  },
  {
    name: CONTACTO.name,
    subsections: [],
  },
];
