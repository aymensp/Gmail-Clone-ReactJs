import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './Mail';
import MailList from './MailList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app_body">
        <SideBar />
        <Switch>
          <Route path="/mail" component={Mail}/>
          <Route path="/" component={MailList}/>
        </Switch>
        </div>
       
      </div>
    </Router>

  );
}

export default App;
