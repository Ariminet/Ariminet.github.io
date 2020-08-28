import React, { useState, useEffect } from 'react';
import EventApi from '../Api/EventApi';
const AdvSearchLeft = (events) => {
  return (
    <div>
      <form className="filter-form" onSubmit="{handleSubmit}">
        <div className="form-group">
          <label htmlFor="name" id="løbs-navn">
            Løbs Navn
          </label>
          <input
            type="text"
            className="form-control"
            name="løb"
            value="{filter}"
            onChange="{(e) => setFilter(e.target.value)}"
          />
        </div>

        <div className="price-container">
          <p className="price-title">Til og fra pris</p>
          <div className="form-group">
            <label htmlFor="InputPrisStart">Pris fra</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value="{contact.email}"
              onChange="{onChange}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPrisTil">Pris til</label>
            <input
              type="subject"
              className="form-control"
              name="subject"
              value="{contact.subject}"
              onChange="{onChange}"
            />
          </div>
        </div>
        <div className="radio-container">
          <p className="distance-title">Distance</p>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="{10000}"
                checked="{selected.value === 10000}"
                onClick="{handleOptionChange}"
              />
              Over-10KM
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="{9999}"
                checked="{selected.value === 9999}"
                onClick="{handleOptionChange}"
              />
              Under-10KM
            </label>
          </div>
        </div>
        <div className="input-region">
          <p className="region-title">Hvor i landet</p>
          <select value="{setRegion.value}" onChange="{handleRegion}">
            <option>Please Select One</option>
            <option value="nordjylland">Nordjylland</option>
            <option value="midtjylland">Midtjylland</option>
            <option value="sydjylland">Sydjylland</option>
            <option value="sjælland">Sjælland</option>
          </select>
        </div>
        <button type="submit" className="btn">
          Søg
        </button>
      </form>
    </div>
  );
};

export default AdvSearchLeft;
