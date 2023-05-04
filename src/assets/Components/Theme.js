import { createTheme } from "@mui/material";



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
            md: 768,
            lg: 900,
            xl: 1200,
            xxl: 1536,
            xxxl: 1900
        }
    },
    shape: {
        borderRadius: 6
    },
    typography: {
        h1: undefined,
        h2: undefined,
        h3: undefined,
        h4: undefined,
        h5: undefined,
        h6: undefined,
        subtitle1: undefined,
        subtitle2: undefined,
        fontFamily: "inter"

    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {}
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: "1.5rem",
                    p: 1
                }
            }

        },

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
        MuiTextField: {
            styleOverrides: {
                root: { fontSize: "1.5rem", },
            },


        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            },
            styleOverrides: {
                endIcon: {
                    position: "absolute",
                    right: "15px"
                },
                startIcon: {
                    position: "absolute",
                    left: "15px"
                },
                root: {
                    textTransform: "none",

                }
            }

        },
        MuiTab: {
            styleOverrides: {}
        }



    },



})

theme.typography.allVariants = { fontFamily: "'Inter', sans-serif" }
theme.typography.fontFamily = { fontFamily: "'Inter', sans-serif" }
theme.typography.h128 = {
    fontSize: "6.5rem",
    color: "black",
    fontWeight: 600,
}

theme.typography.h96 = {
    fontSize: "5rem",
    color: "black",
    fontWeight: 600,

}

theme.typography.h72 = {
    fontSize: "4.5rem",
    color: "black",
    fontWeight: 600,

}

theme.typography.h68 = {
    fontSize: "4rem",
    color: "black",
    fontWeight: 600,

}

theme.typography.h64 = {
    fontSize: "3.75rem ",
    color: "black",
    fontWeight: 600,

}

theme.typography.h55 = {
    fontSize: "3.25rem",
    color: "black",
    fontWeight: 600,
}

theme.typography.h45 = {
    fontSize: "2.75rem",
    color: "black",
    fontWeight: 600,

}

theme.typography.subtitle36 = {
    fontSize: "2.25rem",
    color: "black",
    fontWeight: 600,

}

theme.typography.body36 = {
    fontSize: "2.25rem",
    color: "black",
    fontWeight: 300,

}

theme.typography.subtitle32 = {
    fontSize: "2rem",
    color: "black",
    fontWeight: 600,

}

theme.typography.body32 = {
    fontSize: "2rem",
    color: "black",
    fontWeight: 300,

}

theme.typography.subtitle28 = {
    fontSize: "1.75rem",
    color: "black",
    fontWeight: 600,

}

theme.typography.body28 = {
    fontSize: "1.75rem",

    color: "black",
    fontWeight: 300,

}

theme.typography.subtitle24 = {
    fontSize: "1.5rem",
    color: "black",
    fontWeight: 600,

}

theme.typography.body24 = {
    fontSize: "1.5rem",

    color: "black",
    fontWeight: 300,

}

theme.typography.subtitle22 = {
    fontSize: "1.35rem",
    color: "black",
    fontWeight: 600,

}

theme.typography.body22 = {
    fontSize: "1.35rem",
    color: "black",
    fontWeight: 300,

}

theme.typography.subtitle18 = {
    fontSize: "1.25rem",
    color: "black",
    fontWeight: 600,
}

theme.typography.body18 = {
    fontSize: "1.25rem",
    color: "black",
    fontWeight: 300,

}


theme.typography.subtitle15 = {
    fontSize: "1rem",
    color: "black",
    fontWeight: 600,

}

theme.typography.body15 = {
    fontSize: "1rem",
    color: "black",
    fontWeight: 500,

}


theme.components.MuiTypography.defaultProps.variantMapping.h128 = "h1"
theme.components.MuiTypography.defaultProps.variantMapping.h96 = "h2"
theme.components.MuiTypography.defaultProps.variantMapping.h72 = "h3"
theme.components.MuiTypography.defaultProps.variantMapping.h68 = "h4"
theme.components.MuiTypography.defaultProps.variantMapping.h64 = "h5"
theme.components.MuiTypography.defaultProps.variantMapping.h55 = "h6"
theme.components.MuiTypography.defaultProps.variantMapping.h45 = "h6"
theme.components.MuiTypography.defaultProps.variantMapping.subtitle36 = "h6"
theme.components.MuiTypography.defaultProps.variantMapping.body36 = "p"
theme.components.MuiTypography.defaultProps.variantMapping.subtitle32 = "h6"
theme.components.MuiTypography.defaultProps.variantMapping.body32 = "p"
theme.components.MuiTypography.defaultProps.variantMapping.subtitle28 = "h6"
theme.components.MuiTypography.defaultProps.variantMapping.body28 = "p"
theme.components.MuiTypography.defaultProps.variantMapping.subtitle24 = "h6"
theme.components.MuiTypography.defaultProps.variantMapping.body24 = "p"
theme.components.MuiTypography.defaultProps.variantMapping.subtitle22 = "h6"
theme.components.MuiTypography.defaultProps.variantMapping.body22 = "p"
theme.components.MuiTypography.defaultProps.variantMapping.subtitle18 = "h6"
theme.components.MuiTypography.defaultProps.variantMapping.body18 = "p"
theme.components.MuiTypography.defaultProps.variantMapping.subtitle15 = "h6"
theme.components.MuiTypography.defaultProps.variantMapping.body15 = "p"








export default theme