import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [valueInput, setValueInput] = useState('')

  const { ipcRenderer } = window.require('electron');

  ipcRenderer.on('user-reply', (event, arg) => {
    console.log('arg >>>', arg);
   if (arg !== null) setUsers(JSON.parse(arg))
  })

  const handleCreateUser = () => {
    try {
      ipcRenderer.send('create-user', { username: valueInput });
      setValueInput('')
    } catch (err) {
      console.log('err', err);
    }
  }

  const getUser = () => {
    try {
      ipcRenderer.send('get-user');
    } catch (err) {
      console.log('err', err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <input type="text" value={valueInput} onChange={e => setValueInput(e.target.value)}/>
          <button onClick={handleCreateUser}>Create User</button>
        </p>
        <button onClick={getUser}>get User</button>
        <h2>User</h2>
        <ul>
          {users.map((value) => (<li key={value.username}>{value.username}</li>))}
        </ul>
      </header>
    </div>
  );
}

export default App;
