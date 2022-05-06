import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signUpUser } from '../../services/user';

export default function Auth() {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();
  const [setPerson] = useState('');
    
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await login(email, password);

      const url = location.state.origin ? location.state.origin.pathname : '/';
      history.replace(url);
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
