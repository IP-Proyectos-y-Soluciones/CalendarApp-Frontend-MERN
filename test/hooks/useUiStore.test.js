import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { act, renderHook } from '@testing-library/react';
import { useUiStore } from '../../src/hooks';
import { Provider } from 'react-redux';
import { uiSlice } from '../../src/store';


const getMockStore = ( initialState ) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer
    },
    preloadedState: {
      ui: { ...initialState }
    }
  });
};


describe('Pruebas en useUiStore', () => {
  
  test('debe de regresar los valores por defecto', () => {

    const mockStore = getMockStore({ isDateModalOpen: false });
    
    const { result } = renderHook( () => useUiStore(), {
      wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
    });
    expect( result.current ).toEqual({
      isDateModalOpen: false,
      closeDateModal: expect.any( Function ),
      openDateModal: expect.any( Function ),
      toggleDateModal: expect.any( Function ),
    });
  });
});