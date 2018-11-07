import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx'
import About from './pages/about.jsx'
import Book from './pages/book.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path ="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/book" component={Book}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
