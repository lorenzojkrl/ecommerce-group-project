import "./App.css";
import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getAll } from '../../services/book';
import axios from 'axios';
const theme = createMuiTheme({
  typography: {
    fontSize: 14,
  }
});

function App() {
  
  const [books, setBooks] = useState([])
  // Example reques using getAll function
  useEffect(() => {
    console.log(getAll());
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Body />
      <Footer />
    </ThemeProvider>
    
  );
}

export default App;
