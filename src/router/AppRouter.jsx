import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();
  // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

  useEffect(() => {
    checkAuthToken();
  }, []);

  if ( status === 'checking' ) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  };

  return (
    <Routes>
      {
        ( status === 'not-authenticated' )  
          ? (
              <>
                <Route path="/auth/*" element={ <LoginPage /> } />
                <Route path="/*" element={ <Navigate to="/auth/login" /> } />
              </>
            )
          : (
              <>
                <Route path="/" element={ <CalendarPage /> } />
                <Route path="/*" element={ <Navigate to="/" /> } />
              </>
            )
      }

    </Routes>
  );
};
