import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/NextEvent.scss';
import EventApi from '../Api/EventApi';

const NextEvent = () => {
  const [events, setEvents] = useState({});
  const dato = new Date(events.dato).toLocaleDateString('en-GB', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  useEffect(() => {
    EventApi.get('/event').then((res) => {
      setEvents(res.data[0]);
    });
  }, []);
  // console.log(events);

  return (
    <div className="NextEvent" key={events._id}>
      <h4 className="EventSpots">
        {events.antalpladser <= 70 ? 'FÅ PLADSER TILBAGE' : 'MANGE PLADSER'}
      </h4>
      <h2 className="Event">{events.titel}</h2>
      <p className="Date">D.{dato}</p>
      <p className="text">{events.beskrivelse}</p>
      <p className="price">Pris: {events.pris}</p>
      <Link to={`/event/${events._id}`} className="ReadMore">
        LÆS MERE
      </Link>
    </div>
  );
};

export default NextEvent;
