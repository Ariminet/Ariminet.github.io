import React, { Fragment } from 'react';
import '../assets/scss/SilverSponsor.scss';
const SilverSponsors = (sponsors) => {
  const sponsorList = sponsors.data.length
    ? sponsors.data.map((sponsor) => {
        return (
          <Fragment key={sponsor._id}>
            {sponsor.sponsorkategori.kategori === 'Sølv' ? (
              <div className="silver-img-container" key={sponsor._id}>
                <img src={`/img/sponsors/${sponsor.logo}`} alt={sponsor.navn} />
              </div>
            ) : null}
          </Fragment>
        );
      })
    : null;
  return (
    <div className="Silver">
      <h4 className="title">SØLV SPONSORE</h4>
      <div className="sponsor-container">{sponsorList}</div>
    </div>
  );
};

export default SilverSponsors;
