import { useContext, useState } from 'react';
import './style.css';

function Dashboard({ GlobalContext }) {
  const { name, setName } = useContext(GlobalContext);
  const [localName, setLocalName] = useState('');
  return (
    <div className="container">
      <h1>Home</h1>
      <h2>{name}</h2>
      <input type="text" onChange={(e) => setLocalName(e.target.value)} placeholder='Nome' />
      <button onClick={() => setName(localName)}>Salvar</button>
    </div >
  );
}

export default Dashboard;
