import { createTheme } from "@mui/material";
import interfont from '../fonts/inter-font.ttf'

const theme = createTheme({
    palette: {
        primary: {
            main: "#00A5BF",
            contrastText: "white"
        },
        secondary: {
            main: "#03444F",

        },
        text: {
            primary: "#181818",
            secondary: "#03444F",
            blue: "#00A5BF",
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

            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            },

        },
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: "primary.main",
                        color: "white"
                    }
                }
            }
        }


    },
    MuiCssBaseline: {
        styleOverrides: `
      `,
    }

})

export default theme;