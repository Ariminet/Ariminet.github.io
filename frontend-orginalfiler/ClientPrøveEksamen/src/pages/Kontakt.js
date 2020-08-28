import React, { useState, useEffect } from 'react';
import EventApi from '../Api/EventApi';
import '../assets/scss/Kontakt.scss';
const Kontakt = () => {
  const [contact, setContact] = useState({
    navn: String,
    emailadresse: String,
    emne: String,
    besked: String,
  });

  const [admins, setAdmins] = useState({});
  const [Id, setId] = useState('');
  const [person, setPerson] = useState();
  const [post, setPost] = useState('');
  const [status, setStatus] = useState();
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const { navn, emailadresse, emne, besked } = contact;
  const handleSubmit = (e) => {
    e.preventDefault();
    EventApi.post('/kontakt', contact, { withCredentials: true }).catch(
      (err) => {
        console.log(err.message);
      }
    );
    console.log(contact);
  };

  useEffect(() => {
    EventApi.get('/bestyrelse/').then((res) => {
      setAdmins(res.data);
    });
  }, []);
  useEffect(() => {
    EventApi.get(`/bestyrelse/${Id.value}`).then((res) => {
      setPerson(res.data);
      setPost(res.data.bestyrelsespost);
    });
  }, [Id]);
  useEffect(() => {
    EventApi.get(`/bestyrelsespost/${post}`).then((res) => {
      setStatus(res.data);
    });
  }, [post]);
  console.log(person);

  const valueChange = (e) => {
    setId({ value: e.target.value });
  };
  console.log(Id);

  const optionList = admins.length ? (
    admins.map((admin) => {
      return (
        <option value={admin._id}>
          {admin.fornavn} {admin.efternavn}
        </option>
      );
    })
  ) : (
    <div></div>
  );

  return (
    <div className="contact-container">
      <div className="left-side">
        <h3 className="contact-title">Kontakt os</h3>
        <p className="contact-undertitle">
          Vi bestræber os for at give dig svar tilbage inden for 48 timer
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Dit Navn</label>
            <input
              type="text"
              className="form-control"
              name="navn"
              value={navn}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputEmail">Din Email</label>
            <input
              type="email"
              className="form-control"
              name="emailadresse"
              value={emailadresse}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">emne</label>
            <input
              type="subject"
              className="form-control"
              name="emne"
              value={emne}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Besked</label>
            <textarea
              className="form-control"
              rows="10"
              name="besked"
              value={besked}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn">
            Send Besked
          </button>
        </form>
      </div>
      <div className="right-side">
        <h4 className="company-title">
          Her finder du information om vores bestyrelse
        </h4>
        <select className="select" value={Id.value} onChange={valueChange}>
          {optionList}
        </select>

        {person !== undefined ? (
          <div className="company-contact-details">
            <div className="detail-img-container">
              <img
                src={`/img/bestyrelse/${person.billede}`}
                alt={person.billede}
                className="detail-img"
              />
            </div>
            <div className="detail-info">
              <p className="detail-name">
                {person.fornavn} {person.efternavn}
              </p>
              <p className="detail-status">{status.post}</p>
              <p className="detail-describtion">{person.beskrivelse}</p>
              <p className="detail-email">Email: {person.email}</p>
            </div>
          </div>
        ) : (
          <p className="please-select">Vælg venligst kontakt person</p>
        )}
      </div>
    </div>
  );
};

export default Kontakt;
