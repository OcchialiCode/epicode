import logo from './logo.svg';
import './App.css';

import CardGrid from './components/CardGrid';
import ControlledForm from './components/ControlledForm';
import UnControlledForm from './components/UnControlledForm';
import LightSwitch from './components/LightSwitch';
import Counter from './components/Count';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <link className="navbar-brand" href="#">Navbar</link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/light-switch">Switch</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/counter">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">Users</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Switch> 
            <Route path="/light-switch">
              <LightSwitch />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;