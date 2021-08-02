import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer.component';
import HomePage from './components/Home.component';
import RealEstatePage from './components/RE.component';
import ContactPage from './components/Contact.component';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component ={HomePage}/>
        <Route path='/realty' exact component ={HomePage}/>
        <Route path='/contact' exact component = {ContactPage}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
