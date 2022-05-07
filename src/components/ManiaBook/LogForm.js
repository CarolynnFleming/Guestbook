import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { createEntry } from '../../services/entries';

export default function LogForm({ addLog }) {
    const [content, setContent] = useState('');
    const { user } = useUser();

    
  return (
    <div>LogForm</div>
  )
}
