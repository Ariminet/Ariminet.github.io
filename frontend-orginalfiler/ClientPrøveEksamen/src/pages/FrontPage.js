import React, { useState, useEffect } from 'react';
import '../assets/scss/FrontPage.scss';
import EventApi from '../Api/EventApi';
import DateCountdown from 'react-date-countdown-timer';

const FrontPage = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    EventApi.get('/event').then((res) => {
      setEventTitle(res.data[0].titel);
      setDate(res.data[0].dato);
    });
  }, []);
  const unit = ['år', 'måned', 'dag', 'timer', 'minutter'];
  console.log(date);
  return (
    <div className="Counter">
      <DateCountdown
        dateTo={date}
        numberOfFigures="4"
        locales_plural={unit}
        callback={() => alert('Hello')}
      />
      <p className="title"> TIL {eventTitle}</p>
    </div>
  );
};

export default FrontPage;
