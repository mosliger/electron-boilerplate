import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import { connectRedux } from '../utils';

const Home = () => {
  const [users, setUsers] = useState([])
  const [valueInput, setValueInput] = useState('')
  useEffect(() => {
    try {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.on('user-reply', (event, arg) => {
        if (arg !== null) setUsers(JSON.parse(arg))
      })
    } catch (err) {
      console.error(err);
    }
  }, [])
  
  const handleCreateUser = () => {
    try {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.send('create-user', { username: valueInput });
      setValueInput('')
    } catch (err) {
      console.log('err', err);
    }
  }

  const getUser = () => {
    try {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.send('get-user');
    } catch (err) {
      console.log('err', err);
    }
  }

  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
          <input type="text" value={valueInput} onChange={e => setValueInput(e.target.value)}/>
          <button onClick={handleCreateUser}>Create User</button>
        </p>
        <button onClick={getUser}>get User</button>
        <h2>User</h2>
        <ul>
          {users.map((value) => (<li key={value.username}>{value.username}</li>))}
        </ul>
    </div>
  );
};

Home.propTypes = {
  // dispatch: PropTypes.func.isRequired
};

const mapState = state => state;

export default connectRedux(mapState)(Home);
