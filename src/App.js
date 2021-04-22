import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import Profile from './Profile';
import NavBar from './NavBar';
import Logout from './Logout';
import Login from './Login';
import Home from './Home';
import './App.css';

function App() {
  const { user } = useAuth0(); 
  const [userAuth, setUserAuth] = useState("");  

  return (
    <div className='App'>
      <BrowserRouter removeWarning={userAuth}>
        <NavBar user={user}/>
        <Route exact path='/login'>
          <Login setUserAuth={setUserAuth}/>
          {/* {user ? <Redirect to="/profile" /> : <Login setUserAuth={setUserAuth}/>} */}
        </Route>
        <Route exact path='/logout'>
          <Logout />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/'>
        {user ? <Redirect to="/profile" /> : <Home/>}
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
