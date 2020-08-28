import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import EventApi from '../Api/EventApi';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [region, setRegion] = useState('');
  const [selected, setSelected] = useState(0);
  console.log(region);
  useEffect(() => {
    EventApi.get('/event').then((res) => {
      setEvents(res.data);
    });
  }, [selected, region]);
  console.log(events);

  const handleOptionChange = (event) => {
    var distance = parseInt(event.target.value);
    setSelected({ value: distance });
  };
  const handleRegion = (event) => {
    setRegion({ value: event.target.value });
  };
  console.log(selected);
  console.log(region);

  const eventList = events.length ? (
    events.map((event) => {
      return (
        <div className="event-container" key={event._id}>
          <img
            src={`/img/event/${event.billede}`}
            alt={event.titel}
            className="event-img"
          />
          <h3 className="event-titel">{event.titel}</h3>
          <p className="date">
            D.
            {new Date(event.dato).toLocaleDateString('en-GB', {
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
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

  const regionList = events
    .filter((event) => event.region.regionnavn.includes(region.value))
    .map((filteredRegion) => (
      <div className="event-container" key={filteredRegion._id}>
        <img
          src={`/img/event/${filteredRegion.billede}`}
          alt={filteredRegion.titel}
          className="event-img"
        />
        <h3 className="event-titel">{filteredRegion.titel}</h3>
        <p className="date">
          D.
          {new Date(filteredRegion.dato).toLocaleDateString('en-GB', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        <p className="event-text">{filteredRegion.beskrivelse}</p>
        <p className="event-price">{`Pris: ${filteredRegion.pris}`}</p>
        <Link className="event-link" to={`/event/${filteredRegion._id}`}>
          LÆS MERE
        </Link>
      </div>
    ));

  const distanceListGreater = events
    .filter((event) => event.distance >= selected.value)
    .map((filteredDistance) => (
      <div className="event-container" key={filteredDistance._id}>
        <img
          src={`/img/event/${filteredDistance.billede}`}
          alt={filteredDistance.titel}
          className="event-img"
        />
        <h3 className="event-titel">{filteredDistance.titel}</h3>
        <p className="date">
          D.
          {new Date(filteredDistance.dato).toLocaleDateString('en-GB', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        <p className="event-text">{filteredDistance.beskrivelse}</p>
        <p className="event-price">{`Pris: ${filteredDistance.pris}`}</p>
        <Link className="event-link" to={`/event/${filteredDistance._id}`}>
          LÆS MERE
        </Link>
      </div>
    ));
  const distanceListLess = events
    .filter((event) => event.distance <= selected.value)
    .map((filteredDistance) => (
      <div className="event-container" key={filteredDistance._id}>
        <img
          src={`/img/event/${filteredDistance.billede}`}
          alt={filteredDistance.titel}
          className="event-img"
        />
        <h3 className="event-titel">{filteredDistance.titel}</h3>
        <p className="date">
          D.
          {new Date(filteredDistance.dato).toLocaleDateString('en-GB', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        <p className="event-text">{filteredDistance.beskrivelse}</p>
        <p className="event-price">{`Pris: ${filteredDistance.pris}`}</p>
        <Link className="event-link" to={`/event/${filteredDistance._id}`}>
          LÆS MERE
        </Link>
      </div>
    ));
  const RegionDistanceGreaterList = events
    .filter(
      (event) =>
        event.distance >= selected.value &&
        event.region.regionnavn.includes(region.value)
    )
    .map((filteredDistance) => (
      <div className="event-container" key={filteredDistance._id}>
        <img
          src={`/img/event/${filteredDistance.billede}`}
          alt={filteredDistance.titel}
          className="event-img"
        />
        <h3 className="event-titel">{filteredDistance.titel}</h3>
        <p className="date">
          D.
          {new Date(filteredDistance.dato).toLocaleDateString('en-GB', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        <p className="event-text">{filteredDistance.beskrivelse}</p>
        <p className="event-price">{`Pris: ${filteredDistance.pris}`}</p>
        <Link className="event-link" to={`/event/${filteredDistance._id}`}>
          LÆS MERE
        </Link>
      </div>
    ));
  const RegionDistanceLessList = events
    .filter(
      (event) =>
        event.distance <= selected.value &&
        event.region.regionnavn.includes(region.value)
    )
    .map((filteredDistance) => (
      <div className="event-container" key={filteredDistance._id}>
        <img
          src={`/img/event/${filteredDistance.billede}`}
          alt={filteredDistance.titel}
          className="event-img"
        />
        <h3 className="event-titel">{filteredDistance.titel}</h3>
        <p className="date">
          D.
          {new Date(filteredDistance.dato).toLocaleDateString('en-GB', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        <p className="event-text">{filteredDistance.beskrivelse}</p>
        <p className="event-price">{`Pris: ${filteredDistance.pris}`}</p>
        <Link className="event-link" to={`/event/${filteredDistance._id}`}>
          LÆS MERE
        </Link>
      </div>
    ));
  return (
    <div className="filter-container">
      <div className="filter-section">
        <h3 className="filter-title">Inkreds</h3>
        <p className="distance-title">Distance</p>
        <div className="input-distance">
          <form>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value={10000}
                  checked={selected.value === 10000}
                  onChange={handleOptionChange}
                />
                Over-10KM
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value={9999}
                  checked={selected.value === 9999}
                  onChange={handleOptionChange}
                />
                Under-10KM
              </label>
            </div>
          </form>

          <div className="input-region">
            <p className="region-title">Hvor i landet</p>
            <select value={setRegion.value} onChange={handleRegion}>
              <option value="">Please Select One</option>
              <option value="Nordjylland">Nordjylland</option>
              <option value="Midtjylland">Midtjylland</option>
              <option value="Sydjylland">Sydjylland</option>
              <option value="Sjælland">Sjælland</option>
            </select>
          </div>
        </div>
      </div>
      <div className="event-title-container">
        <h3 className="event-title">Alle Events</h3>
        <div className="event-main-container">
          {selected === 0 && region === '' ? eventList : null}
          {selected.value === 10000 && region === ''
            ? distanceListGreater
            : null}
          {selected.value === 9999 && region === '' ? distanceListLess : null}
          {region !== '' && selected === 0 ? regionList : null}

          {selected.value === 10000 && region !== ''
            ? RegionDistanceGreaterList
            : null}
          {selected.value === 9999 && region !== ''
            ? RegionDistanceLessList
            : null}
        </div>
      </div>
    </div>
  );
};

export default EventList;
