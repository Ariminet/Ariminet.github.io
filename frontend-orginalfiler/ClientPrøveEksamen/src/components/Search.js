import React from 'react';
import { Link } from 'react-router-dom';
import ArrowImg from '../assets/img/Arrow.png';
import '../assets/scss/Search.scss';
const Search = () => {
  return (
    <div id="SearchComp">
      <div id="search">
        <button id="buttonSearch">SØG</button>
        <input
          aria-label="search"
          type="search"
          name="search"
          id="InputSearch"
        />
      </div>
      <div className="AdvSearch">
        <img className="SearchImg" src={ArrowImg} alt="Arrow" />
        <Link to="/advanceretsøg">Advanceret søg</Link>
      </div>
    </div>
  );
};

export default Search;
