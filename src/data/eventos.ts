// Calendario parroquial (datos de ejemplo del prototipo).

export type ColorLiturgico = 'blanco' | 'morado' | 'rosa' | 'verde' | 'rojo';

export interface Evento {
  /** Fecha ISO, AAAA-MM-DD */
  d: string;
  t: string;
  h: string;
  l: string;
  lit?: ColorLiturgico;
}

const posadas: Evento[] = Array.from({ length: 8 }, (_, i) => ({
  d: `2026-12-${16 + i}`,
  t: 'Posada parroquial',
  h: '19:30',
  l: 'Atrio del templo',
}));

export const eventos: Evento[] = [
  { d: '2026-11-02', t: 'Misa por los Fieles Difuntos', h: '19:00', l: 'Templo parroquial', lit: 'morado' },
  { d: '2026-11-07', t: 'Pláticas prebautismales', h: '10:00', l: 'Salón parroquial' },
  { d: '2026-11-22', t: 'Solemnidad de Cristo Rey', h: '12:00', l: 'Templo y atrio', lit: 'blanco' },
  { d: '2026-11-28', t: 'Retiro de Adviento', h: '09:00 – 14:00', l: 'Salón parroquial', lit: 'morado' },
  { d: '2026-11-29', t: 'Primer domingo de Adviento', h: 'Todas las Misas', l: 'Templo parroquial', lit: 'morado' },
  { d: '2026-12-05', t: 'Pláticas prebautismales', h: '10:00', l: 'Salón parroquial' },
  { d: '2026-12-08', t: 'Inmaculada Concepción', h: '19:00', l: 'Templo parroquial', lit: 'blanco' },
  { d: '2026-12-12', t: 'Mañanitas a la Virgen de Guadalupe', h: '06:00', l: 'Atrio del templo', lit: 'blanco' },
  { d: '2026-12-13', t: 'Tercer domingo de Adviento', h: 'Todas las Misas', l: 'Templo parroquial', lit: 'rosa' },
  ...posadas,
  { d: '2026-12-24', t: 'Misa de Nochebuena', h: '22:00', l: 'Templo parroquial', lit: 'blanco' },
  { d: '2027-01-01', t: 'Santa María, Madre de Dios', h: '12:00', l: 'Templo parroquial', lit: 'blanco' },
  { d: '2027-01-06', t: 'Epifanía y rosca comunitaria', h: '18:00', l: 'Salón parroquial', lit: 'blanco' },
  { d: '2027-01-09', t: 'Pláticas prebautismales', h: '10:00', l: 'Salón parroquial' },
];

/** Eventos destacados en Inicio. */
export const destacados = [
  { t: 'Retiro de Adviento', f: 'Sáb 28 nov · 09:00', l: 'Salón parroquial' },
  { t: 'Posadas parroquiales', f: '16 – 24 dic · 19:30', l: 'Atrio del templo' },
];
