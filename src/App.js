import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Park from './components/parks/Park';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import NPSState from './context/nps/NPSState';

function App() {
  return (
    <NPSState>
      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/park/:parkCode' component={Park} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </NPSState>
  );
}

export default App;
