import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import ListingPage from './pages/ListingPage';
import ProductPage from './pages/ProductPage';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListingPage} />
          <Route path="/:id" component={ProductPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
