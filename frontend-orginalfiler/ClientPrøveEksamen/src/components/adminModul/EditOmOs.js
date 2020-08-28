import React, { useState, useEffect } from 'react';
import EventApi from '../../Api/EventApi';
const EditOmOs = () => {
  const [edit, setEdit] = useState({
    overskrift: String,
    beskrivelse: String,
    billede: Array,
    id: String,
  });
  const [picture, setPicture] = useState('');

  const [omos, setOmos] = useState({});
  const onChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const onFileChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.files[0] });
  };
  useEffect(() => {
    setPicture(edit.billede.name);
  }, [edit.billede]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { overskrift, beskrivelse, billede } = edit;

    EventApi.put(
      `/omos/admin/${omos._id}`,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
        overskrift,
        beskrivelse,
        picture,
      },
      { withCredentials: true }
    );
    console.log(overskrift, beskrivelse, billede);
    console.log(billede.name);
    console.log(picture);
  };
  useEffect(() => {
    EventApi.get('/omos/').then((res) => {
      setOmos(res.data[0]);
    });
  }, []);
  console.log(omos);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Overskrift</label>
          <input
            type="text"
            name="overskrift"
            value={edit.overskrift}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Beskrivelse</label>
          <input
            type="text"
            name="beskrivelse"
            value={edit.beskrivelse}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input type="file" name="billede" onChange={onFileChange} />
        </div>
        <button type="submit" className="btn">
          Edit Om Os
        </button>
      </form>
    </div>
  );
};

export default EditOmOs;
