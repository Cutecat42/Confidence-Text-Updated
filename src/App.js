import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Logout from './Logout';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/logout'>
          <Logout />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
