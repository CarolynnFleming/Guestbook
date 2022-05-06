import { createContext, useContext, useState } from 'react';
import { getUser, signInUser, signUpUser } from '../services/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });

  const signUp = async (email, password) => {
    const newUser = await signUpUser({ email, password });

    setUser(newUser);
    
  };

  const login = async (email, password) => {
    const officialUser = await signInUser({ email, password });

    if (officialUser) {
      setUser(officialUser);
    }
  };
  const logout = () => {
    setUser({ email: null });
  };
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
