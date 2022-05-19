import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import CompaniesList from './CompaniesList'
import CompanyCreateUpdate from './CompanyCreateUpdate'
import CustomersList from './CustomersList'
import CustomerCreateUpdate from './CustomerCreateUpdate'
import './App.css';


const BaseLayout = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Django React Demo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">CUSTOMERS</a> 
          <a className="nav-item nav-link" href="/customer/">CREATE CUSTOMER</a>
          <a className="nav-item nav-link" href="/compony/">COMPANIES</a> 
          <a className="nav-item nav-link" href="/company/">CREATE COMPANY</a>
        </div>
      </div>
    </nav>

    <div className="content">
      <Route path="/" exact component={CustomersList} />
      <Route path="/customer/:pk" component={CustomerCreateUpdate} />
      <Route path="/customer/" exact component={CustomerCreateUpdate} />
      <Route path="/compony/" exact component={CompaniesList} />
      <Route path="/company/:pk" component={CompanyCreateUpdate} />
      <Route path="/company/" exact component={CompanyCreateUpdate} />
    </div>
  </div>
  
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    );
  }
}

export default App;
