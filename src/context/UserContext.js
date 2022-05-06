import { createContext, useContext, useState, useMemo } from 'react';
import { getUser } from '../services/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null });

 const value = useMemo (() => ({ user, setUser }), [user.email]);
  return(
    <UserContext.Provider value={{ user, signUp, login, logout }}>{children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
