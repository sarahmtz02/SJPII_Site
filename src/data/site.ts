export type PageId =
  | 'inicio'
  | 'horarios'
  | 'sacramentos'
  | 'comunidad'
  | 'eventos'
  | 'nosotros'
  | 'oracion'
  | 'donativos';

export const routes: Record<PageId, string> = {
  inicio: '/',
  horarios: '/horarios',
  sacramentos: '/sacramentos',
  comunidad: '/comunidad',
  eventos: '/eventos',
  nosotros: '/nosotros',
  oracion: '/oracion',
  donativos: '/donativos',
};

export const nav: { id: PageId; label: string }[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'horarios', label: 'Horarios' },
  { id: 'sacramentos', label: 'Sacramentos' },
  { id: 'comunidad', label: 'Comunidad' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'oracion', label: 'Oración' },
  { id: 'donativos', label: 'Donativos' },
];

// Datos de ejemplo del prototipo: reemplazar por los reales de la parroquia.
export const parish = {
  name: 'Parroquia San Juan Pablo II',
  city: 'Corregidora, Querétaro',
  address: 'Av. Ejemplo 123, Col. Centro',
  phone: '442 000 0000',
  officeHours: ['Lun a Vie 10:00 – 14:00 y 16:00 – 19:00', 'Sáb 10:00 – 13:00'],
  social: { facebook: '#', instagram: '#', youtube: '#' },
  liveStream: '#',
};
