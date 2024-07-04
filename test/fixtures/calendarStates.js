
export const events = [
  {
    id: '1',
    start: new Date( '2024-07-04 12:00:00' ),
    end: new Date( '2024-07-04 15:00:00' ),
    title: 'Reunión del Team de Trabajo',
    notes: 'Planificar aplicación CammionApp',
  },
  {
    id: '2',
    start: new Date( '2024-07-21 12:00:00' ),
    end: new Date( '2024-07-21 15:00:00' ),
    title: 'Cumpleaños Damian',
    notes: 'Celebrar el cumpleaños',
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [ ...events ],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [ ...events ],
  activeEvent: { ...events[ 0 ] },
};