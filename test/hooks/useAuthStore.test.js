import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { act, renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { authSlice } from '../../src/store';
import { initialState, notAuthenticatedState } from '../fixtures/authStates';
import { useAuthStore } from '../../src/hooks';
import { testUserCredentials } from '../fixtures/testUser';


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

  test('startLogin debe de realizar el login correctamente', async() => {
    
    localStorage.clear();
    const mockStore = getMockStore({ ...notAuthenticatedState });

    const { result } = renderHook( () => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={ mockStore } >{ children }</Provider>
    });

    await act( async() => {
      await result.current.startLogin( testUserCredentials )
    });

    const { errorMessage, status, user } = result.current;
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: { name: 'Test User', uid: '668630bc68c99e279a4400f1' }
    });

    expect( localStorage.getItem( 'token' ) ).toEqual( expect.any( String ) );
    expect( localStorage.getItem( 'token-init-date' ) ).toEqual( expect.any( String ) );
  });
});