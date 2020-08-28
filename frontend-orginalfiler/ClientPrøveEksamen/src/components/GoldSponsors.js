import React, { Fragment } from 'react';
import '../assets/scss/GoldSponsor.scss';
const GoldSponsors = (sponsors) => {
  console.log(sponsors.data);
  const sponsorList = sponsors.data.length
    ? sponsors.data.map((sponsor) => {
        return (
          <Fragment key={sponsor._id}>
            {sponsor.sponsorkategori.kategori === 'Guld' ? (
              <div className="gold-img-container" key={sponsor._id}>
                <img src={`/img/sponsors/${sponsor.logo}`} alt={sponsor.navn} />
              </div>
            ) : null}
          </Fragment>
        );
      })
    : null;

  return (
    <div className="Gold">
      <h4 className="title">GOLD SPONSORE</h4>
      <div className="sponsor-container">{sponsorList}</div>
    </div>
  );
};

export default GoldSponsors;
