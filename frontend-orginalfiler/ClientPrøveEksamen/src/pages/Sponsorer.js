import React, { useState, useEffect } from 'react';
import '../assets/scss/Sponsors.scss';
import GoldSponsors from '../components/GoldSponsors';
import SilverSponsors from '../components/SilverSponsors';
import OrdinarySponsors from '../components/OrdinarySponsors';
import EventApi from '../Api/EventApi';

const Sponsorer = () => {
  const [sponsors, setSponsor] = useState({});

  useEffect(() => {
    EventApi.get('/sponsor').then((res) => {
      setSponsor(res.data);
    });
  }, []);
  console.log(sponsors);

  return (
    <div className="Sponsors">
      <GoldSponsors data={sponsors} />
      <SilverSponsors data={sponsors} />
      <OrdinarySponsors data={sponsors} />
    </div>
  );
};

export default Sponsorer;
