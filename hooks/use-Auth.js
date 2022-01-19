import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
// @ts-ignore
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID, API_KEY } from '@env';

import * as Google from 'expo-google-app-auth';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from '@firebase/auth';
import { auth } from '../Firebase';

const AuthContext = createContext({});

const config = {
  scopes: ['profile', 'email'],
  permissions: ['public_profile', 'email', 'gender', 'location'],
  iosClientId: IOS_CLIENT_ID,
  androidClientId: ANDROID_CLIENT_ID,
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const [initialLoading, setInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //logged in
        setUser(user);
      } else {
        setUser(null);
      }
      setInitialLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    await Google.logInAsync(config)
      .then(async (logInResult) => {
        if (logInResult.type === 'success') {
          // login
          const { idToken, accessToken } = logInResult;
          const credentials = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );
          await signInWithCredential(auth, credentials);
        }
        return Promise.reject();
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      signInWithGoogle,
      isLoading,
      error,
      logOut,
    }),
    [user, error, isLoading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

// @ts-ignore
export default function useAuth() {
  return useContext(AuthContext);
}
