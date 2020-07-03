import React, {createContext, useState, useEffect, useContext} from 'react';
import asyncStorage from '@react-native-community/async-storage';

import * as auth from '../services/auth';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [getUser, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await asyncStorage.getItem('@RNauth:user');
      const storageToken = await asyncStorage.getItem('@RNauth:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    const {token, user} = response;

    setUser(user);
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    await asyncStorage.setItem('@RNauth:user', JSON.stringify(user));
    await asyncStorage.setItem('@RNauth:token', token);
  }

  function signOut() {
    asyncStorage.clear().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider
      value={{signed: !!getUser, user: getUser, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
