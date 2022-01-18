import { useState } from 'react';
import useGlobalData from '../../hooks/userGlobalData';
import './style.css';

function Dashboard() {
  const { name, updateName } = useGlobalData();
  const [localName, setLocalName] = useState('');

  return (
    <div className="container">
      <h1>Home</h1>
      <h2>{name}</h2>
      <input type="text" onChange={(e) => setLocalName(e.target.value)} placeholder='Nome' />
      <button onClick={() => updateName(localName)}>Salvar</button>
    </div >
  );
}

export default Dashboard;
