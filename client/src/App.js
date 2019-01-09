import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './views/home.jsx';
import Projects from './views/projects.jsx';
import About from './views/about.jsx'
import Book from './views/book.jsx';
import Private from './views/private.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/about" component={About}/>
            <Route path="/book" component={Book}/>
            <Route path="/private/:id" component = {Private}/>
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
