import React, { useState, useEffect, Fragment } from 'react';
import EventApi from '../Api/EventApi';
import '../assets/scss/OmOs.scss';

const OmOs = () => {
  const [om, setOm] = useState();

  useEffect(() => {
    EventApi.get('/omos').then((res) => {
      setOm(res.data[0]);
    });
  }, []);
  return (
    <Fragment>
      {om !== undefined ? (
        <div className="om-os">
          <h2 className="om-os-title">{om.overskrift}</h2>
          <div className="img-text">
            <img
              src={`/img/omos/${om.billede}`}
              alt={om.billede}
              className="image"
            />
            <p className="text">{om.beskrivelse}</p>
          </div>
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default OmOs;
