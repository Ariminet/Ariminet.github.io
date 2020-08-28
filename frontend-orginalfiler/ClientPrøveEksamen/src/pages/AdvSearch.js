import React, { useState, useEffect } from 'react';
import '../assets/scss/AdvSearch.scss';
import { Link } from 'react-router-dom';
import AdvSearchLeft from '../components/AdvSearchLeft';
import EventApi from '../Api/EventApi';

const AdvSearch = () => {
  const [events, setEvents] = useState({});
  useEffect(() => {
    EventApi.get('/event').then((res) => {
      setEvents(res.data);
    });
  }, []);

  const eventList = events.length ? (
    events.map((event) => {
      const dato = new Date(event.dato).toLocaleDateString('en-GB', {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
      return (
        <div className="event-container">
          <img
            src={`/img/event/${event.billede}`}
            alt={event.titel}
            className="event-img"
          />
          <h3 className="event-titel">{event.titel}</h3>
          <p className="date">D.{dato}</p>
          <p className="event-text">{event.beskrivelse}</p>
          <p className="event-price">{`Pris: ${event.pris}`}</p>
          <Link className="event-link" to={`/event/${event._id}`}>
            LÆS MERE
          </Link>
        </div>
      );
    })
  ) : (
    <div>
      <h1>No Events</h1>
    </div>
  );
  return (
    <div className="adv-search">
      <AdvSearchLeft />
      <div className="AdvSearchRight">{eventList}</div>
    </div>
  );
};

export default AdvSearch;
