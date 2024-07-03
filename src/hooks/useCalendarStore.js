import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';
import { calendarApi } from '../api';
import { convertEventsDateEvents } from '../helpers';


export const useCalendarStore = () => {

  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector( state => state.calendar );
  const { user } = useSelector( state => state.auth );

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  };

  const startSavingEvent = async( calendarEvent ) => {
    // TODO: Update Event
    if ( calendarEvent._id ) {
      // Actualizando
      dispatch( onUpdateEvent({ ...calendarEvent }) );
    } else {
      // Creando
      const { data } = await calendarApi.post('/events', calendarEvent );

      dispatch( onAddNewEvent({ ...calendarEvent, id: data.event.id }) );
    }
  };

  const startDeletingEvent = () => {
    // TODO: Llegar al backend


    dispatch( onDeleteEvent() );
  };

  const startLoadingEvents = async() => {
    // TODO: Llegar al backend
    // dispatch( onSetEvents( data.events ) );
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsDateEvents( data.events );
      console.log(events);
      
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
