import React, { useState, useEffect, Fragment } from 'react';
import '../assets/scss/MainSponsor.scss';
import EventApi from '../Api/EventApi';
const MainSponsor = () => {
  const [list, setList] = useState([]);
  const [sponsors, setSponsors] = useState({});

  useEffect(() => {
    EventApi.get('/sponsor').then((res) => {
      setList(res.data.splice(Math.floor(Math.random() * res.data.length), 1));

      const interval = setInterval(() => {
        setList(
          res.data.splice(Math.floor(Math.random() * res.data.length), 1)
        );
      }, 10000);
    });
  }, []);
  useEffect(() => {
    setSponsors(list[0]);
  }, [list]);

  return (
    <Fragment>
      {list.map((sponsor, index) => (
        <div
          className="MainSponsor"
          id={sponsor.sponsorkategori.kategori}
          key={index}
        >
          <h3 className="SponsorTitle">Sponsorer</h3>
          <img
            src={`/img/sponsors/${sponsor.logo}`}
            alt=""
            className="MainSponsorImg"
          />
        </div>
      ))}
    </Fragment>
  );
};

export default MainSponsor;
