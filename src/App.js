import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mail from './Mail';
import MailList from './MailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';

function App() {
const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
const user = useSelector(selectUser)
  return (
    <Router>
      {!user ? <Login/> : (
    <div className="App">
    <Header />
    <div className="app_body">
    <SideBar />
    <Switch>
      <Route path="/mail" component={Mail}/>
      <Route path="/" component={MailList}/>
    </Switch>
    </div>
  {sendMessageIsOpen && <SendMail />} 
  </div>
      )}
  
    </Router>

  );
}

export default App;
