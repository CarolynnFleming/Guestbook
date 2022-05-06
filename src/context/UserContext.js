import { createContext, useContext, useState } from 'react';
import { getUser, signInUser } from '../services/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 const currentUser = getUser();
 const [user, setUser] = userState(currentUser || { email: null });

 
}