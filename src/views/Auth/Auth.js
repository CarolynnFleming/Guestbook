import { set } from 'msw/lib/types/context';
import { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signUpUser, signInUser } from '../../services/user';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const [personIn, setPersonIn] = useState(false);
  const { user, setUser } = useUser();

  const useSignIn = () => {
    setEmail('');
    setPassword('');
    setPersonIn((before) => !before);
  };
  const handleSubmit = async (event) => {
    setError('');

    try {
      event.preventDefault();
      const doingIt = personIn ? await signUpUser({ email, password })
        : await signInUser({ email, password });

      setUser({ email: doingIt.email });
      history.replace('/');
    } catch (error) {
      setError(error.message);
    }
  }; 

  async function handleSignUp() {
    const user = await signUpUser(email, password);
    setPerson(user);
  }

  return (
    <>
      <h1>Welcome to Guest Book!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" 
          vaule={email} 
          onChange={(event) => setEmail(event.target.value)} 
          placeholder="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" 
          vaule={password} 
          onChange={(event) => setPassword(event.target.value)} 
          placeholder="password"/>
        <button type="submit" aria-label="Sign In">Sign In</button>
        <button type="submit" onClick={handleSignUp}>Sign Up</button>
        <p>{error}</p>
      </form>
    </>
  );
}
