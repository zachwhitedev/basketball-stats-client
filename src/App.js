import React from 'react';
import { Helmet } from 'react-helmet';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './css/App.css';

import LandingPage from './components/LandingPage/index';
import LoginPage from './components/LoginPage/index';
import RegisterPage from './components/RegisterPage/index';
import ConfirmationPage from './components/ConfirmationPage/index';
import UserDashboard from './dashboards/UserDashboard/index';
import TeamDashboard from './dashboards/TeamDashboard/index';
import GameActive from './dashboards/GameActive/index';
import PricingPage from './components/PricingPage/index';
import SupportPage from './components/SupportPage/index';

function BackgroundColor() {
  const bgStyle =
    'background: -webkit-linear-gradient(to right, #0072ff, #00a6ff); background: linear-gradient(to right, #0072ff, #00a6ff);';
  return (
    <Helmet>
      <style>{`body { ${bgStyle} }`}</style>
    </Helmet>
  );
}

const stripePromise = loadStripe('pk_test_2xK8atukOFA9TVCJt215Mvog');

function App() {
  return (
    <Router>
      <BackgroundColor />
      <Switch>
        <Route
          path='/'
          exact
          render={() => {
            if (localStorage.getItem('token')) {
              return <Redirect to='/dashboard' />;
            } else {
              return <LandingPage />;
            }
          }}
        ></Route>
        <Route
          path='/login'
          exact
          render={() => {
            if (!localStorage.getItem('token')) {
              return <LoginPage />;
            } else {
              return (
                <Redirect
                  to={{
                    pathname: '/dashboard',
                  }}
                />
              );
            }
          }}
        ></Route>
        <Route
          path='/dashboard'
          exact
          render={() => {
            if (localStorage.getItem('token')) {
              return <UserDashboard />;
            } else {
              return (
                <Redirect
                  to={{
                    pathname: '/login',
                  }}
                />
              );
            }
          }}
        ></Route>
        <Route
          path='/team'
          render={() => {
            if (localStorage.getItem('token')) {
              return <TeamDashboard />;
            } else {
              return (
                <Redirect
                  to={{
                    pathname: '/login',
                  }}
                />
              );
            }
          }}
        ></Route>
        <Route
          path='/register'
          exact
          render={() => {
            if (localStorage.getItem('token')) {
              return <Redirect to='/dashboard' />;
            } else {
              return <RegisterPage />;
            }
          }}
        ></Route>
        <Route
          path='/team'
          render={() => {
            if (localStorage.getItem('token')) {
              return <TeamDashboard />;
            } else {
              return (
                <Redirect
                  to={{
                    pathname: '/login',
                  }}
                />
              );
            }
          }}
        ></Route>
        <Route
          path='/game'
          render={() => {
            if (localStorage.getItem('token')) {
              return <GameActive />;
            } else {
              return (
                <Redirect
                  to={{
                    pathname: '/login',
                  }}
                />
              );
            }
          }}
        ></Route>
        <Route path='/support' exact>
          <SupportPage />
        </Route>
        <Route path='/pricing' exact>
        <Elements stripe={stripePromise}>
          <PricingPage />
        </Elements>
        </Route>
        <Route path='/userconfirmation/ipvtw0vfmlvh5fk2s'>
          <ConfirmationPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
