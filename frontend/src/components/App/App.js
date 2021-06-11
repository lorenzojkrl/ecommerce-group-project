import "./App.css";
import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2F1160"
    }
  },
  typography: {
    fontFamily: ['"Poppins"'],
    fontSize: 14,
    h2: {
      fontWeight: 750
    }
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
