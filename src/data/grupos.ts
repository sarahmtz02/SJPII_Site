// Grupos parroquiales. Inicio muestra los cuatro primeros.

export interface Grupo {
  t: string;
  e: string;
  d: string;
  /** Ruta de la foto en /public; sin foto se muestra el marcador del sistema de diseño. */
  img?: string;
}

export const grupos: Grupo[] = [
  { t: 'Pastoral Juvenil', e: 'Jóvenes', d: 'Viernes 19:30, salón parroquial.' },
  { t: 'Matrimonios', e: 'Familias', d: 'Un sábado al mes, 18:00.' },
  { t: 'Catequesis infantil', e: 'Niños', d: 'Sábados 10:00 a 12:00.' },
  { t: 'Coro parroquial', e: 'Liturgia', d: 'Ensayos los jueves 20:00.' },
  { t: 'Grupo de oración', e: 'Oración', d: 'Martes 19:30 en la capilla.' },
  { t: 'Pastoral de la salud', e: 'Servicio', d: 'Visitas a enfermos en casa.' },
  { t: 'Lectores y ministros', e: 'Liturgia', d: 'Formación mensual.' },
  { t: 'Cáritas parroquial', e: 'Servicio', d: 'Despensas y acompañamiento.' },
];
