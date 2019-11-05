import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/edit' component={Edit} />
        <Route exact path='/add' component={Add} />
      </Switch>
    </Router>
    </>
  );
}


export default App;
