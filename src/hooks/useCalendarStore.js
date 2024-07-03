import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';
import { calendarApi } from '../api';
import { convertEventsDateEvents } from '../helpers';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


export const useCalendarStore = () => {

  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector( state => state.calendar );
  const { user } = useSelector( state => state.auth );

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  };

  const startSavingEvent = async( calendarEvent ) => {

    try {
      if ( calendarEvent.id ) {
        // Actualizando
        await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent );
  
        dispatch( onUpdateEvent({ ...calendarEvent, user }) );
        return;
      };
  
      // Creando
      const { data } = await calendarApi.post('/events', calendarEvent );
  
      dispatch( onAddNewEvent({ ...calendarEvent, id: data.event.id, user }) );
      
    } catch ( error ) {
      console.log(error);
      Swal.fire( 'Error al guardar', error.response.data.msg, 'error' );
    };
  };

  const startDeletingEvent = async() => {
    // TODO: Llegar al backend
    try {
      await calendarApi.delete(`/events/${ activeEvent.id }`);

      dispatch( onDeleteEvent() );

    } catch ( error ) {
      console.log(error);
      Swal.fire( 'Error al eliminar', error.response.data.msg, 'error' );
    };
  };

  const startLoadingEvents = async() => {
    // dispatch( onSetEvents( data.events ) );
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsDateEvents( data.events );

      dispatch( onLoadEvents( events ) );
      
    } catch ( error ) {
      console.log( 'Error cargando eventos' );
      console.log( error );
    }
  };

  return {
    //* Properties
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Methods
    setActiveEvent,
    startDeletingEvent,
    startLoadingEvents,
    startSavingEvent,
  };
};
