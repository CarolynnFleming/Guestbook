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
  if (user.email) return <Redirect to="/" />;

  return (
    <>
      <div>
        <h2>
          {personIn ? 'Sign Up' : 'Welcome Back Sign In !'}
        </h2>
        <p>
            Or <a href="#" onClick={useSignIn}>
            {' '}
            { setPersonIn ? 'Sing In' : 'Make an Account!'}
          </a>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="alaways" value="true" />
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" 
              id="email"
              name="email"
              autoComplete="email"
              required
              vaule={email} 
              onChange={(event) => setEmail(event.target.value)} 
              placeholder="Email Address"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" 
              id="password"
              name="password"
              autoComplete="password"
              required
              vaule={password} 
              onChange={(event) => setPassword(event.target.value)} 
              placeholder="Password"/>
          </div>
          <div>
            <button type="submit">
              {personIn ? 'Make an Account!' : 'Sign In'}
            </button>
            <p>{error}</p>
          </div>
        </div>
      </form>
    
    </>
  );
}
