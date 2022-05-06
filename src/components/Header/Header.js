import React from 'react';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/user';


export default function Header() {
    const { user, setUser } = useUser();

    const signOut = async => {
        setUser('');
        await signOutUser();
    }
  return (
    <div>Header</div>
  );
}
