import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/user';


export default function Header() {
  const { user, setUser } = useUser();

  const signOut = async () => {
    setUser('');
    await signOutUser();
  };
  return (
    <>
      <div>
        <Link to="/">
          <span>Book Mania</span>
        </Link>
      </div>
      <div>
        {user?.email ? (
          <>
            <p>{user.email}</p>
            <button onClick={signOut}>
                    Log Out
            </button>
          </>
        ) : (
          <Link to="/login" href="#">Sign In</Link>
        )}
      </div>
    </>
  );
}
