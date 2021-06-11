import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const Theme = ({children}) => {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#2F1160"
            }
        },
        typography: {
            fontFamily: ['"Roboto"'],
            fontSize: 14,
            h2: {
                fontWeight: 750
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
};

export { Theme }