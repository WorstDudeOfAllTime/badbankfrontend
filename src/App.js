import './App.css';
import Layout from './components/Layout';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import AccountPage from './components/AccountPage'
import AllUsers from './components/AllUsers'
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import About from './components/About';
import CreateAccount from './components/CreateAccount'
import React, {useState, useContext} from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<AccountPage loggedIn={loggedIn}/>} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route path="/createAccount" element={<CreateAccount/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
