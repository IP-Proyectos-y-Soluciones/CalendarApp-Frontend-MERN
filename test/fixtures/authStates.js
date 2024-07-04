

export const initialState = {
  status: 'checking', 
  user: {},
  errorMessage: undefined,
};

export const authenticatedState = {
  status: 'authenticated', 
  user: {
    uid: 'abc',
    name: 'Ozzy',
  },
  errorMessage: undefined,
};

export const noAuthenticatedState = {
  status: 'not-authenticated', 
  user: {},
  errorMessage: undefined,
};