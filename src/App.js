import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import { login, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }))
      }
    })
  }, [])
  return (
    <Router>
      {!user ? <Login /> : (
        <div className="App">
          <Header />
          <div className="app_body">
            <SideBar />
            <Switch>
              <Route path="/mail" component={Mail} />
              <Route path="/" component={MailList} />
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}

    </Router>

  );
}

export default App;
