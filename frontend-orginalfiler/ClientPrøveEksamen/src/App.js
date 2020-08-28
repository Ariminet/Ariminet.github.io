import React, { Fragment, useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navigation } from './Navigation';

import Events from './pages/Events';
import Sponsorer from './pages/Sponsorer';
import OmOs from './pages/OmOs';
import Kontakt from './pages/Kontakt';
import Footer from './components/Footer';
import './index.css';
import './assets/scss/App.scss';
import LogoImg from './assets/img/logo.jpg';
import NextEvent from './components/NextEvent';
import NewsLetter from './components/NewsLetter';
import MainSponsor from './components/MainSponsor';
import FrontPage from './pages/FrontPage';
import Event from './pages/Event';
import EventApi from './Api/EventApi';
import AdvSearch from './pages/AdvSearch';
import { Login } from './components/admin/Login';
import { Logout } from './components/admin/Logout';
import { Admin } from './components/admin/Admin';
import EditOmOs from './components/adminModul/EditOmOs';
import { EditSponsorer } from './components/adminModul/EditSponsorer';
import { EditBoard } from './components/adminModul/EditBoard';
import { EditContacts } from './components/adminModul/EditContacts';
import { EditEvents } from './components/adminModul/EditEvents';
import { EventAttendees } from './components/adminModul/EventAttendees';
import { Subscribers } from './components/adminModul/Subscribers';
import history from './useHistory/createBrowserHistory';

function App() {
  const [bgImage, setBgImage] = useState();
  useEffect(() => {
    EventApi.get('/login/loggedin', { withCredentials: true });
    EventApi.get('/event').then((res) => {
      setBgImage(res.data[0].billede);
    });
  }, []);
  return (
    <Fragment>
      <Router history={history}>
        <Navigation />
        <div id="cover">
          <div id="cover-bg">
            <img
              src={`/img/event/${bgImage}`}
              alt={bgImage}
              className="cover-bg-img"
            />
            <Link to="/" className="LogoLink" aria-label="Runit">
              <img src={LogoImg} alt="" className="Logo-brand" />
            </Link>
            <Switch>
              <Route exact path="/">
                <FrontPage />
              </Route>
              <Route exact path="/events">
                <Events />
              </Route>
              <Route exact path="/event/:eventId" component={Event} />
              <Route exact path="/sponsorer">
                <Sponsorer />
              </Route>
              <Route exact path="/omos">
                <OmOs />
              </Route>
              <Route exact path="/kontakt">
                <Kontakt />
              </Route>
              <Route exact path="/advanceretsøg">
                <AdvSearch />
              </Route>
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/edit/omos" component={EditOmOs} />
              <Route exact path="/edit/sponsorer" component={EditSponsorer} />
              <Route
                exact
                path="/edit/bestyrelsesmedlemmer"
                component={EditBoard}
              />
              <Route exact path="/edit/kontakter" component={EditContacts} />
              <Route exact path="/edit/events" component={EditEvents} />
              <Route exact path="/edit/attending" component={EventAttendees} />
              <Route exact path="/edit/subs" component={Subscribers} />
            </Switch>
          </div>
          <div className="right-side">
            <NextEvent />
            <NewsLetter />
            <MainSponsor />
          </div>
        </div>

        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
