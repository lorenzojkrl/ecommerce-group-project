import "./App.css";
import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontSize: 14,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
