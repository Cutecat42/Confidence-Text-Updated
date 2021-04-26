import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import DailyQuoteWeb from './components/DailyQuoteWeb';
import AllQuotes from './components/AllQuotes';
import { useAuth0 } from '@auth0/auth0-react';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Logout from './components/Logout';
import Signup from './components/Signup';
import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import './css/App.css';

function App() {
  const { user } = useAuth0(); 
  const [userAuth, setUserAuth] = useState("");  

  return (
    <div className='App'>
      <BrowserRouter removeWarning={userAuth}>
          <NavBar user={user}/>
            <Switch>
              <Route exact path='/login'>
                {user ? <Redirect to="/daily" /> : <Login setUserAuth={setUserAuth}/>}
              </Route>
              <Route exact path='/logout'>
                <Logout />
              </Route>
              <Route exact path='/daily'>
                {!user ? <Redirect to="/" /> : <DailyQuoteWeb />}
              </Route>
              <Route exact path='/profile'>
                {!user ? <Redirect to="/" /> : <Profile />}
              </Route>
              <Route exact path='/all'>
                {!user ? <Redirect to="/" /> : <AllQuotes />}
              </Route>
              <Route exact path='/'>
                {user ? <Redirect to='/daily' /> : <Home />}
              </Route>
              <Route exact path='/signup'>
                {!user ? <Redirect to='/' /> : <Signup />}
              </Route>
              <Route>
                <Redirect from='*' to='/404' />
                <NotFound />
              </Route>
            </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;
