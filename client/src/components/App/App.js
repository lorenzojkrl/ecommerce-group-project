import './App.css';
import React from 'react';
// { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

// import { getAll } from '../../services/book';

// import axios from 'axios'; // Uncommented for a moment
import Theme from '../../theme-style/materialTheme';

function App() {
  // You may want to save fetched data into a state
  // useContext/Redux is also an option
  // const [books, setBooks] = useState([]);

  // Example reques using getAll function
  // useEffect(() => {
  //   console.log(getAll());
  // }, []);

  return (
    <Theme>
      <NavBar />
      <Body />
      <Footer />
    </Theme>
  );
}

export default App;
