import { createTheme } from "@mui/material";
import nuckelfont from '../fonts/Nuckle-Regular.woff2'

const theme = createTheme({
    palette: {
        primary: {
            main: "#00A5BF",
        },
        secondary: {
            main: "#03444F",

        },
        text: {
            primary: "#181818",
            secondary: "#03444F",
            light: "#FFFFFF",
            muted: "#747474",


        },

    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1920
        }
    },
    typography: {
        fontFamily: "Nuckle",
        h6: {
            fontWeight: 600
        }

    },
    components: {
        MuiContainer: {
            defaultProps: {
                disableGutters: true
            }
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiCssBaseline: {
            styleOverrides: ` @font-face {
            font-family: "Nuckle";
          src:url(${nuckelfont}) ;
        }


      `,
        }
    }
})

export default theme;