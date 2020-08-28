import React from 'react';
import { Link } from 'react-router-dom';
import NextRun from './components/NextRun';
import './assets/scss/Navigation.scss';
import Search from './components/Search';

export const Navigation = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/events">
            EVENTS <div className="line"> |</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sponsorer">
            SPONSORER <div className="line"> |</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/omos">
            OM RUNIT <div className="line"> |</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/kontakt">KONTAKT</Link>
        </li>
      </ul>
      <Search />
      <NextRun />
    </nav>
  );
};
