import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/AdminNav.scss';
import { Redirect } from 'react-router-dom';
import EventApi from '../../Api/EventApi';
export const Admin = () => {
  const [redirect, setRedirect] = useState(false);
  const [info, setInfo] = useState();
  useEffect(() => {
    EventApi.get('/login/loggedin', { withCredentials: true }).catch((err) => {
      setInfo(err.response.status);
    });
  }, []);
  console.log(info);
  if (info === 401) {
    return <Redirect to="/" />;
  }
  return (
    <div className="admin-nav">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/edit/omos">Edit Om os</Link>
        </li>
        <li className="nav-item">
          <Link to="/edit/sponsorer">Add/Edit/Delete Sponsorer</Link>
        </li>
        <li className="nav-item">
          <Link to="/edit/bestyrelsesmedlemmer">
            Add/Edit/Delete Bestyrelsesmedlemmer
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/edit/kontakter">Add/Edit/Delete Kontakter</Link>
        </li>
        <li className="nav-item">
          <Link to="/edit/events">Add/Edit/Delete Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/edit/attending">Tilmeldt Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/edit/subs">Tilmeldt Nyhedsbred</Link>
        </li>
      </ul>
    </div>
  );
};
