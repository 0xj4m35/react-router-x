import React, { Component } from 'react';
import './App.css';
import Router, { Route, Link } from './router/router'
import SampleComponent from './component/SampleComponent'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>My React-Router</p>
          <Router>
              <nav>
                <Link to='/'>A</Link>
                <Link to='/b'>B</Link>
                <Link to='/c'>C</Link>
              </nav>
              <Route path='/' component={<SampleComponent name="A"/>}/>
              <Route path='/b' component={<SampleComponent name="B"/>}/>
              <Route path='/c' component={<SampleComponent name="C"/>}/>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
