import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { act, renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { authSlice } from '../../src/store';
import { initialState } from '../fixtures/authStates';
import { useAuthStore } from '../../src/hooks';


const getMockStore = ( initialState ) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      auth: { ...initialState }
    }
  });
};


describe('Pruebas en useAuthStore', () => {

  beforeEach( () => localStorage.clear() );
  
  test('Debe de regresar los valores por defecto', () => {

    const mockStore = getMockStore({ ...initialState });

    const { result } = renderHook( () => useAuthStore(), {
        wrapper: ({ children }) => <Provider store={ mockStore } >{ children }</Provider>
    });

    expect( result.current ).toEqual({
      status: 'checking',
      user: {},
      errorMessage: undefined,
      checkAuthToken: expect.any( Function ),
      startLogin: expect.any( Function ),
      startLogout: expect.any( Function ),
      startRegister: expect.any( Function ),
    });
  });
});