import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core";

const Theme = ({ children }) => {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2F1160",
      },
    },
    typography: {
      fontFamily: ['"Roboto"'],
      fontSize: 14,
      h2: {
        fontWeight: 750,
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export { Theme };
