import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
import SignUp from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Schedule from './Components/Schedule/Schedule';
import Header from './Components/Nav/Header';
import Footer from './Components/Nav/Footer';
import data from './data/cinemamockdata.json';

function App() {
  const [users, setNewUser] = useState([]);
  const [currentUser, setCurrentUser ] = useState("");
  const [currentPage, setPage] = useState("Home") 
  const [movies, setMovies] = useState(data.allFilms);
  const [openingTimes, setOpeningTimes] = useState(data.openingTimes);

  const submitUser = (user) => {
    const updateUsers = [...users, user]
    setNewUser(updateUsers);
    setCurrentUser(user.firstName+" "+user.lastName);
  }

  const submitPage = (page) => {
    setPage(page);
  }
  return (
    <div className="container">
      <Header submitPage={submitPage} userName={currentUser}/>
      <div className="container">
        {
          currentPage == "Home" ? (
            <Home />
          ) : currentPage == "Signup" ? (
            <SignUp submitUser = {submitUser}/>
          ) : (
            <Schedule movies={movies} openingTimes={openingTimes}/>
          )
        }        
      </div>
      <Footer />
    </div>
  );
}

export default App;
