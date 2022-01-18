import React, { createContext, useContext } from 'react';
import * as Google from 'expo-google-app-auth';
// @ts-ignore
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from '@env';

const AuthContext = createContext({});

const config = {
  scopes: ['profile', 'email'],
  permissions: ['public_profile', 'email', 'gender', 'location'],
  iosClientId: IOS_CLIENT_ID,
  androidClientId: ANDROID_CLIENT_ID,
};

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    await Google.logInAsync(config)
      .then(async (logInResult) => {
        // login
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <AuthContext.Provider value={{ user: null, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

// @ts-ignore
export default function useAuth() {
  return useContext(AuthContext);
}
