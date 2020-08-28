import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import EventApi from '../../Api/EventApi';

export const Login = () => {
  // const [login, setLogin] = useState({});
  const [brugernavn, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    EventApi.post(
      '/login/login',
      { brugernavn, password },
      { withCredentials: true }
    ).then((res) => {
      console.log(res);
      setRedirect(true);
    }, []);
  };

  // const handleChange = e => {
  //   setLogin({ [e.target.name]: e.target.value });
  // };

  if (redirect) {
    return <Redirect to="/admin" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="username-group">
        <label htmlFor="username">Username:</label>
        <input
          type="username"
          value={brugernavn}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="password-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
