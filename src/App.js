import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const RouterApp = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/works' component={Works} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h1>Kenshir0f</h1>
    <p>こんにちは</p>
    <ul>
      <li><a href='works'>Works</a></li>
      <li><a href='about'>About</a></li>
      <li><a href='contact'>Contact</a></li>
    </ul>
  </div>
)

const Works = () => (
  <div>
    <h1>Works</h1>
    <p><a href="/">Back</a></p>
  </div>
)

const About = () => (
  <div>
    <h1>About</h1>
    <p><a href="/">Back</a></p>
  </div>
)

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <p><a href="/">Back</a></p>
  </div>
)

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">ふじけんです</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default RouterApp;
