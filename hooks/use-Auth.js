import React, { createContext, useContext } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: null }}>
      {children}
    </AuthContext.Provider>
  );
};

// @ts-ignore
export default function useAuth() {
  return useContext(AuthContext);
}
// @ts-ignore
// @ts-ignore
// @ts-ignore
 