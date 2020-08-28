import React, { useState } from 'react';
import Letter from '../assets/img/newsletter.png';
import '../assets/scss/NewsLetter.scss';
import EventApi from '../Api/EventApi';
const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    EventApi.post('/nyhedsbrevtilmelding', {
      email,
    });
    setEmail('');
  };

  return (
    <div className="NewsLetterCover">
      <img src={Letter} alt="" className="newsLetter" />

      <input
        aria-label="email"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Din Email"
      />
      <button className="tilmeld" onClick={onSubmit}>
        Tilmeld
      </button>
    </div>
  );
};

export default NewsLetter;
