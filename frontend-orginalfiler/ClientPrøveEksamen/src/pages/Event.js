import React, { useState, useEffect, Fragment } from 'react';
import EventApi from '../Api/EventApi';
import '../assets/scss/EventDetail.scss';

const Event = (props) => {
  const [event, setEvent] = useState();
  const [distance, setDistance] = useState();
  const [regionId, setRegionId] = useState();
  const [region, setRegion] = useState();
  const [email, setEmail] = useState();
  const [eventId, setEventId] = useState();
  const [date, setDato] = useState();
  const dato = new Date(date).toLocaleDateString('en-GB', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  useEffect(() => {
    EventApi.get(`/event/${props.match.params.eventId}`).then((res) => {
      setEvent(res.data);
      setDistance(res.data.distance);
      setRegionId(res.data.region);
      setEventId(res.data._id);
      setDato(res.data.dato);
    });
  }, [props.match.params.eventId]);
  useEffect(() => {
    EventApi.get(`/region/${regionId}`).then((result) => {
      setRegion(result.data.regionnavn);
    });
  }, [regionId]);

  const distanceKM = distance / 1000;

  const handleSubmit = (e) => {
    e.preventDefault();
    EventApi.post('/eventtilmelding', {
      email,
      event: eventId,
    });

    setEmail('');
  };

  return (
    <div className="main-event-container">
      {event !== undefined ? (
        <div className="event-container">
          <div className="left-container">
            <img
              src={`/img/event/${event.billede}`}
              alt={event.billede}
              className="image-container"
            />
          </div>
          <div className="right-side">
            <p className="header-title">
              55 UD AF {event.antalpladser} PLADSER OPTAGET
            </p>
            <h3 className="event-title">{event.titel}</h3>
            <p className="date">D.{dato}</p>
            <p className="text">{event.beskrivelse}</p>
            <div className="info-text-container">
              <p className="region">Region: {region}</p>
              <p className="distance">Distance: {distanceKM} KM</p>
              <p className="price">Pris {event.pris} KR</p>
            </div>
            {event.antalpladser !== 0 ? (
              <form onSubmit={handleSubmit} className="Attend-mail">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  placeholder="Tilmeldelse email"
                />
                <input type="submit" id="submit" value="Tilmeld" />
              </form>
            ) : (
              <Fragment></Fragment>
            )}
          </div>
        </div>
      ) : (
        <div className="null">nothing</div>
      )}
    </div>
  );
};

export default Event;
