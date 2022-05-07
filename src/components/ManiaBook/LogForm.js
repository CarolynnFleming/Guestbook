import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { createEntry } from '../../services/entries';

export default function LogForm({ addLog }) {
  const [content, setContent] = useState('');
  const { user } = useUser();

  const  log = async (event) => {
    event.preventDefault();
    const book = await createEntry({ userId: user.id, content });
    addLog(book);
    setContent('');
  };


  return (
    <div>LogForm</div>
  );
}
