import { 
  authSlice, 
  clearErrorMessage, 
  onChecking, 
  onLogin, 
  onLogout 
} from '../../../src/store/auth/authSlice';
import { authenticatedState, initialState } from '../../fixtures/authStates';
import { testUserCredentials } from '../../fixtures/testUser';


describe('Pruebas en el authSlice', () => {
  
  test('Debe de regresar el estado inicial', () => {
    
    expect( authSlice.getInitialState() ).toEqual( initialState );
  });

  test('Debe de poner el estado en checking', () => {
    
    const state = authSlice.reducer( initialState, onChecking() );
    expect( state ).toEqual({
      status: 'checking', 
      user: {},
      errorMessage: undefined,
    });
  });

  test('Debe de realizar un Login', () => {
    
    const state = authSlice.reducer( initialState, onLogin( testUserCredentials ) );
    expect( state ).toEqual({
      status: 'authenticated', 
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  test('Debe de realizar el Logout', () => {
    
    const state = authSlice.reducer( authenticatedState, onLogout() );
    expect( state ).toEqual({
      status: 'not-authenticated', 
      user: {},
      errorMessage: undefined,
    });
  });

  test('Debe de realizar el Logout', () => {
    
    const errorMessage = 'Credenciales no válidas';
    const state = authSlice.reducer( authenticatedState, onLogout( errorMessage ) );
    expect( state ).toEqual({
      status: 'not-authenticated', 
      user: {},
      errorMessage: errorMessage,
    });
  });

  test('Debe de limpiar el mensaje de error', () => {
    
    const errorMessage = 'Credenciales no válidas';
    const state = authSlice.reducer( authenticatedState, onLogout( errorMessage ) );
    const clearedState = authSlice.reducer( state, clearErrorMessage() );
    expect( clearedState.errorMessage ).toBe( undefined );
  });
});