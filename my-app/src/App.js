import React from 'react';
import Home from './Home'
import Review from './Review'
import Support from './Support'
import Submit from './Submit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />}
        <Route path='/review' exact component={Review} />
        <Route path='/submit' exact component={Submit} />
        <Route path='/support' exact component={Support} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
