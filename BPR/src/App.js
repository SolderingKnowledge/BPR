import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Location from './components/Location';
import Contact from './components/Contact';
import Post from './components/Post';
import './index.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Route path='/locations' component={Location} />
            <Route path='/contact' component={Contact} />
            <Route path='/post' component={Post} />
            <Route path='/' component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
