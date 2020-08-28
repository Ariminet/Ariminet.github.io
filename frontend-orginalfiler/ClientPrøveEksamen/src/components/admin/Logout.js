import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import EventApi from '../../Api/EventApi';

export const Logout = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    EventApi.get('/login/logout', { withCredentials: true }).then((res) => {
      setRedirect(true);
    });
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }
  return <Fragment></Fragment>;
};
