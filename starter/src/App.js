import React, { useState,useEffect }  from 'react';
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
//import data from './data/cinemamockdata.json';
import axios from 'axios';

const ALLFILMSURL = 'http://localhost:4000/allFilms';
const OPENINGTIMESURL = 'http://localhost:4000/openingTimes';
const SIGNUPUSER = 'http://localhost:4000/signup';

function App() {
  const [users, setNewUser] = useState([]);
  const [currentUser, setCurrentUser ] = useState("");
  const [currentPage, setPage] = useState("Home") 
  const [movies, setMovies] = useState([]);
  const [openingTimes, setOpeningTimes] = useState([]);

  useEffect(() => {
    const getMovies = async () => { 
      let movieData = await getFilms();
      setMovies(movieData);
    }

    const getOpeningTimes = async () => { 
      let ot = await getTimes();
      console.log(ot)
      setOpeningTimes(ot); 
    }

    const getUsers = async () => { 
      let su = await getSignUps();
      console.log("Users")
      if(Object.keys(su.users[0]).length === 0){
        setNewUser([]); 
      }
      else{
        setNewUser(su.users); 
      }
      console.log(su.users)
      
    }

    getMovies(); 
    getOpeningTimes();
    getUsers();
  }, []);
  

  const getFilms = async () => {
    try { 
      const res = await axios.get(ALLFILMSURL); 
      console.log(res);
      return res.data.length ? { 
        movies: res.data 
      } : {  
        error: 'There are no films stored'
      } ; 
    } catch (e) { 
      return { 
        error: `Film data not available from server: ${e.message}` 
      }; 
    } 
  };

  const getTimes = async () => {
    try { 
      const res = await axios.get(OPENINGTIMESURL); 
      return res.data.length ? { 
        times: res.data 
      } : {  
        error: 'There are no films stored'
      } ; 
    } catch (e) { 
      return { 
        error: `Opening times data not available from server: ${e.message}`
      }; 
    } 
  };

  const getSignUps = async () => {
    try { 
      const res = await axios.get(SIGNUPUSER); 
      return res.data.length ? { 
        users: res.data 
      } : {  
        error: 'There are no films stored'
      } ; 
    } catch (e) { 
      return { 
        error: `Sign ups data not available from server: ${e.message}`
      }; 
    } 
  };

  const submitUser = async user => {
    try {
        const updateUsers = [...users, user]
        setNewUser(updateUsers);
        setCurrentUser(user.firstName+" "+user.lastName);
        console.log(updateUsers)
        await axios.post(SIGNUPUSER, user);
      } catch (e) {
        console.log(users)
        const updateUsers = [...users, user]
        setNewUser(updateUsers);
        setCurrentUser(user.firstName+" "+user.lastName);
        console.log("error")
        
    }
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
