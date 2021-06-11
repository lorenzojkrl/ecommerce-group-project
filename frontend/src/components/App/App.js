import "./App.css";
import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

import React, { useEffect, useState } from "react";
import { getAll } from '../../services/book';
import axios from 'axios';
import { Theme } from '../../theme-style/materialtheme'


function App() {
  
  const [books, setBooks] = useState([])
  // Example reques using getAll function
  useEffect(() => {
    console.log(getAll());
  }, []);


  return (
    <Theme>
      <NavBar />
      <Body />
      <Footer />
    </Theme>
    
  );
}

export default App;
