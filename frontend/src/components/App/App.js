import "./App.css";
import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getAll } from '../../services/book';
const theme = createMuiTheme({
  typography: {
    fontSize: 14,
  }
});

function App() {
  // You may want to save fetched data into a state
  // useContext/Redux is also an option
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
