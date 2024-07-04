import { 
  calendarSlice, 
  onAddNewEvent, 
  onDeleteEvent, 
  onLoadEvents, 
  onLogoutCalendar, 
  onSetActiveEvent, 
  onUpdateEvent
} from '../../../src/store/calendar/calendarSlice';
import { 
  calendarWithActiveEventState,
  calendarWithEventsState, 
  events, 
  initialState 
} from '../../fixtures/calendarStates';


describe('Pruebas en el calendarSlice', () => {
  
  test('Debe de regresar el estado por defecto', () => {
    
    const state = calendarSlice.getInitialState();
    expect( state ).toEqual( initialState );
  });

  test('onSetActiveEvent debe de activar el evento', () => {
    
    const event = events[ 0 ];
    const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent( event ) );
    expect( state.activeEvent ).toEqual( event );
  });

  test('onAddNewEvent debe de agregar el evento', () => {
    
    const newEvent = {
      id: '3',
      start: new Date('2024-07-05 13:00:00'),
      end: new Date('2024-07-05 15:00:00'),
      title: 'Reunión de Negocios',
      notes: 'Alguna nota!!'
    };

    const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent( newEvent ) );
    expect( state.events ).toEqual([ ...events, newEvent ]);
  });

  test('onUpdateEvent debe de actualizar el evento', () => {
    
    const updatedEvent = {
      id: '1',
      start: new Date( '2024-07-04 12:00:00' ),
      end: new Date( '2024-07-04 15:00:00' ),
      title: 'Reunión del Team de Trabajo',
      notes: 'Planificar aplicación CammionApp!!',
    };

    const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent( updatedEvent ) );
    expect( state.events ).toContain( updatedEvent );  
  });

  test('onDeleteEvent debe de borrar el evento activo', () => {
    
    const state = calendarSlice.reducer( calendarWithActiveEventState, onDeleteEvent() );
    expect( state.events ).not.toContain( calendarWithActiveEventState.activeEvent );
    expect( state.activeEvent ).toBeNull();
  });

  test('onLoadEvents debe de establecer los eventos', () => {
    
    const state = calendarSlice.reducer( initialState, onLoadEvents( events ) );
    expect( state.isLoadingEvents ).toBe( false );
    expect( state.events ).toEqual( events );

    const newState = calendarSlice.reducer( state, onLoadEvents( events ) );
    expect( state.events.length ).toBe( events.length );
  });

  test('onLogoutCalendar debe de limpiar el estado', () => {
    
    const state = calendarSlice.reducer( calendarWithActiveEventState, onLogoutCalendar() );
    expect( state ).toEqual( initialState );
  });
});