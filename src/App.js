import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import DailyQuoteWeb from './components/DailyQuoteWeb';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Logout from './components/Logout';
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
        <Route exact path='/login'>
          <Login setUserAuth={setUserAuth}/>
        </Route>
        <Route exact path='/logout'>
          <Logout />
        </Route>
        <Route exact path='/daily'>
        {!user ? <Redirect to="/" /> : <DailyQuoteWeb/>}
        </Route>
        <Route exact path='/profile'>
        {!user ? <Redirect to="/" /> : <Profile/>}
        </Route>
        <Route exact path='/'>
        {user ? <Redirect to="/daily" /> : <Home/>}
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
