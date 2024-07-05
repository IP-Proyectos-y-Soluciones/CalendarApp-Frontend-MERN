import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useCalendarStore } from '../../../src/hooks/useCalendarStore';
import { FabDelete } from '../../../src/calendar/components/FabDelete';

jest.mock('../../../src/hooks/useCalendarStore');

describe('Pruebas en <FabDelete />', () => {

  beforeEach( ()=> jest.clearAllMocks() );
  
  test('Debe de mostrar el componente correctamente', () => {

    useCalendarStore.mockReturnValue({
      hasEventSelected: false
    });
    
    render( <FabDelete /> );
    
    const btn = screen.getByLabelText( 'btn-delete' );
    // console.log( btn.classList.toString() );
    expect( btn.classList ).toContain( 'btn' );
    expect( btn.classList ).toContain( 'btn-danger' );
    expect( btn.classList ).toContain( 'fab-danger' );
    expect( btn.style.display ).toBe( 'none' );
    
  });
});