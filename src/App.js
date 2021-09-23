import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer.component';
import HomePage from './components/Home.component';
import RealEstatePage from './components/RE.component';
import ContactPage from './components/Contact.component';
import AboutPage from './components/About.component';
import ConstructionPage from './components/Construction.component';
import SpecialEventsPage from './components/SE.component';
import FunPage from './components/Fun.component';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component ={HomePage}/>
        <Route path='/realty' exact component ={RealEstatePage}/>
        <Route path='/construction' exact component = {ConstructionPage}/>
        <Route path='/specialevents' exact component = {SpecialEventsPage}/>
        <Route path='/fun' exact component = {FunPage}/>
        <Route path='/contact' exact component = {ContactPage}/>
        <Route path='/about' exact component = {AboutPage}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
