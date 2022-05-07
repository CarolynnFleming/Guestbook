import { useEffect, useState } from 'react';
import Log from '../../components/ManiaBook/Log';
import LogForm from '../../components/ManiaBook/LogForm';
import { useUser } from '../../context/UserContext';
import { getEntries } from '../../services/entires'; 

export default function Entries() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  const fetchLogs = () => {
    getEntries()
      .then(setLogs)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchLogs();
  }, []);
  return (
    <>
      <LogForm addLog={fetchLogs} />
      {loading ? (
        <p>Loading Logs...</p>
      ) : (
        <>
          <h1>Past Logs</h1>
          <ul>
            {logs.length ? (
              logs.map(({ id, description, created_at }) => {
                return(
                  <li key={id}>
                    <Log
                      description={description}
                      author={user.email}
                      date={created_at}/>
                  </li>
                );
              })
            ) : (
              <li>
                        Write Something!
              </li>
            )}
          </ul>
        </>
      )}
    </>
  );
}
