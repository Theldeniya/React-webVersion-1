import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch>
          <Route path='/' exact />
        </switch>
      </Router>
    </>
  );
}

export default App;
