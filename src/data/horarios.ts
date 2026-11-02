// Horarios de ejemplo del prototipo: reemplazar por los reales de la parroquia.

export interface Misa { h: string; t: string }

export const misas: { dia: string; misas: Misa[] }[] = [
  {
    dia: 'Domingo',
    misas: [
      { h: '08:00', t: 'Misa' },
      { h: '10:00', t: 'Misa con niños' },
      { h: '12:00', t: 'Misa' },
      { h: '19:00', t: 'Misa con jóvenes' },
    ],
  },
  {
    dia: 'Sábado',
    misas: [
      { h: '08:00', t: 'Misa' },
      { h: '19:00', t: 'Misa anticipada dominical' },
    ],
  },
  {
    dia: 'Lunes a viernes',
    misas: [
      { h: '08:00', t: 'Misa' },
      { h: '19:00', t: 'Misa' },
    ],
  },
];

export const misasDomingo = misas[0].misas;

export const confesiones = [
  { d: 'Mié y Vie', h: '18:00 – 19:00' },
  { d: 'Sábado', h: '11:00 – 13:00' },
  { d: 'Domingo', h: 'Antes de cada Misa' },
];

export const despacho = [
  { d: 'Lun a Vie', h: '10:00 – 14:00 y 16:00 – 19:00' },
  { d: 'Sábado', h: '10:00 – 13:00' },
  { d: 'Domingo', h: 'Cerrado' },
];
