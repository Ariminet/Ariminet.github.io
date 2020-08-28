import React, { Fragment } from 'react';
import '../assets/scss/OrdinarySponsor.scss';

const OrdinarySponsors = (sponsors) => {
  const sponsorList = sponsors.data.length
    ? sponsors.data.map((sponsor) => {
        return (
          <Fragment key={sponsor._id}>
            {sponsor.sponsorkategori.kategori ===
            'Almindelig samarbejdspartner' ? (
              <div className="ordinary-img-container" key={sponsor._id}>
                <img src={`/img/sponsors/${sponsor.logo}`} alt={sponsor.navn} />
              </div>
            ) : null}
          </Fragment>
        );
      })
    : null;
  return (
    <div className="Ordinary">
      <h4 className="title">ALMINDELIGE PARTNERE</h4>
      <div className="sponsor-container">{sponsorList}</div>
    </div>
  );
};

export default OrdinarySponsors;
