import { useEffect, useState } from 'react';
import Log from '../../components/ManiaBook/LogForm';
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
  return (
    <div>Entries</div>
  );
}
