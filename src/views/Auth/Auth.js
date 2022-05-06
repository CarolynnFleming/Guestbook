import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();
    
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

  return (
    <>
      <h1>Welcome to Guest Book!</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" 
          vaule={email} 
          onChange={(event) => setEmail(event.target.value)} 
          placeholder="email"/>
        <input type="password" 
          vaule={password} 
          onChange={(event) => setPassword(event.target.value)} 
          placeholder="password"/>
        <button type="submit">Sign In</button>
        <p>{error}</p>
      </form>
    </>
  );
}
