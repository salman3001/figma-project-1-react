import { createTheme } from "@mui/material";
import interfont from '../fonts/inter-font.ttf'

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
        allVariants: { fontFamily: "'Inter', sans-serif" },
        fontFamily: "'Inter', sans-serif",
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

            },
            styleOverrides: {
                root: {
                    color: "white"
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            },
        }
    },
    MuiCssBaseline: {
        styleOverrides: `
      `,
    }

})

export default theme;