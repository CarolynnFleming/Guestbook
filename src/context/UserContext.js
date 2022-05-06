import { createContext, useContext, useState } from 'react';
import { getUser, signInUser } from '../services/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = userState(currentUser || { email: null });

  const login = async (email, password) => {
    const authenticatedUser = await signInUser({ email, password });

    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  };
  const logout = () => {
    setUser({ email: null });
  };
  return(
      <UserContext.Provider value={{ user, login, logout }}>
          {children}
      </UserContext.Provider>
  )
};
