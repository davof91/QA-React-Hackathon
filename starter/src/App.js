import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
import SignUp from './Components/Signup/Signup';
import Header from './Components/Nav/Header'
import Footer from './Components/Nav/Footer'

function App() {
  const [users, setNewUser] = useState([]);
  const [currentUser, setCurrentUser ] = useState("Unknown User");

  const submitUser = (user) => {
    const updateUsers = [...users, user]
    setNewUser(updateUsers);
    setCurrentUser(user.firstName+" "+user.lastName);
  }

  return (
    <div className="container">
      <Header />
      <div className="container">
        <SignUp submitUser = {submitUser}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
