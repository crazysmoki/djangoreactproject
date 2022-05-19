import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import CompaniesList from './CompaniesList'
import CompanyCreateUpdate from './CompanyCreateUpdate'
import CustomersList from './CustomersList'
import CustomerCreateUpdate from './CustomerCreateUpdate'
import CompanyCreate from './CompanyCreate';
import './App.css';


const BaseLayout = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">AntHill</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">CUSTOMERS</a>           
          <a className="nav-item nav-link" href="/compony/">COMPANIES</a>                    
        </div>
          <div className='collapse navbar-collapse' >            
            <a className="nav-item nav-link" >CREATE</a>
              <div className='collapse navbar-collapse'>
                <a className="nav-item nav-link" href="/create/customer/">CUSTOMERS</a>
                <a className="nav-item nav-link" href="/create/company/">COMPANIES</a>
              </div>
          </div> 
      </div>
    </nav>

    <div className="content">
      <Route path="/" exact component={CustomersList} />
      <Route path="/customer/:pk" component={CustomerCreateUpdate} />
      <Route path="/create/customer/" exact component={CustomerCreateUpdate} />
      <Route path="/compony/" exact component={CompaniesList} />
      <Route path="/company/:pk" component={CompanyCreateUpdate} />
      <Route path="/create/company/" exact component={CompanyCreate} />
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
