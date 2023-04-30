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
            xxxl: 1920
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
                root: { fontSize: 22 }
            }
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
    fontSize: "7rem",
    color: "black",
    fontWeight: 700,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 38
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 53
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 68
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 82
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 98
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 113
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 128 
    // }
}

theme.typography.h96 = {
    fontSize: "5rem",
    color: "black",
    fontWeight: 600,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 32
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 46
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 56
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 66
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 76
    // }
    // ,
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 86
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 96
    // }
}

theme.typography.h72 = {
    fontSize: "4.5rem",
    color: "black",
    fontWeight: 600,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 29
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 38
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 44
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 53
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 59
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 65
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 72
    // }
}

theme.typography.h68 = {
    fontSize: "4rem",
    color: "black",
    fontWeight: 717,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 27
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 34
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 41
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 48
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 54
    // }, [theme.breakpoints.up("xxl")]: {
    //     fontSize: 61
    // }, [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 68
    // }
}

theme.typography.h64 = {
    fontSize: "3.75rem ",
    color: "black",
    fontWeight: 600,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 24
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 29
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 36
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 43
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 50
    // }, [theme.breakpoints.up("xxl")]: {
    //     fontSize: 57
    // }, [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 64
    // }
}

theme.typography.h55 = {
    fontSize: "3.25rem",
    color: "black",
    fontWeight: 600,
    //     [theme.breakpoints.up("xs")]: {
    //         fontSize: 22
    //     },
    //     [theme.breakpoints.up("sm")]: {
    //         fontSize: 29
    //     },
    //     [theme.breakpoints.up("md")]: {
    //         fontSize: 34
    //     }
    //     ,
    //     [theme.breakpoints.up("lg")]: {
    //         fontSize: 41
    //     },
    //     [theme.breakpoints.up("xl")]: {
    //         fontSize: 45
    //     },
    //     [theme.breakpoints.up("xxl")]: {
    //         fontSize: 50
    //     }, [theme.breakpoints.up("xxxl")]: {
    //         fontSize: 55
    //     }
}

theme.typography.h45 = {
    fontSize: "2.75rem",
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.up("xs")]: {
        fontSize: 21
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 25
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 29
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 33
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 37
    },
    [theme.breakpoints.up("xxl")]: {
        fontSize: 41
    },
    [theme.breakpoints.up("xxxl")]: {
        fontSize: 45
    }
}

theme.typography.subtitle36 = {
    fontSize: "2.25rem",
    color: "black",
    fontWeight: 600,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 20
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 23
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 26.5
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 29
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 31.5
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 33.5
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 36
    // },
}

theme.typography.body36 = {
    fontSize: "2.25rem",
    color: "black",
    fontWeight: 500,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 20
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 23
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 26.5
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 29
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 31.5
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 33.5
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 36
    // }
}

theme.typography.subtitle32 = {
    fontSize: "2rem",
    color: "black",
    fontWeight: 600,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 19
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 21
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 23
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 25
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 27
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 30
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 32
    // }
}

theme.typography.body32 = {
    fontSize: "2rem",
    color: "black",
    fontWeight: 500,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 19
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 21
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 23
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 25
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 27
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 30
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 32
    // }
}

theme.typography.subtitle28 = {
    fontSize: "1.75rem",
    color: "black",
    fontWeight: 600,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 18
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 19
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 20.5
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 22
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 24.5
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 26.5
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 28
    // }
}

theme.typography.body28 = {
    fontSize: "1.75rem",

    color: "black",
    fontWeight: 500,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 18
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 19
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 20.5
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 22
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 24.5
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 26.5
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 28
    // }
}

theme.typography.subtitle24 = {
    fontSize: "1.5rem",
    color: "black",
    fontWeight: 600,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 17
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 18
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 19
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 20
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 22
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 23
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 24
    // }
}

theme.typography.body24 = {
    fontSize: "1.5rem",

    color: "black",
    fontWeight: 500,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 17
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 18
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 19
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 20
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 22
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 23
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 24
    // }
}

theme.typography.subtitle22 = {
    fontSize: "1.35rem",
    color: "black",
    fontWeight: 600,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 16
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 17
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 18
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 19
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 20
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 21
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 22
    // }
}

theme.typography.body22 = {
    fontSize: "1.35rem",
    color: "black",
    fontWeight: 500,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 16
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 17
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 18
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 19
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 20
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 21
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 22
    // }
}

theme.typography.subtitle18 = {
    fontSize: "1.12rem",
    color: "black",
    fontWeight: 600,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 14
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 14.5
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 15
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 15.5
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 16.5
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 17.5
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 18
    // }
}

theme.typography.body18 = {
    fontSize: "1.12rem",

    color: "black",
    fontWeight: 500,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 14
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 14.5
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 15
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 15.5
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 16.5
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 17.5
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 18
}


theme.typography.subtitle15 = {
    fontSize: "1rem",
    color: "black",
    fontWeight: 600,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 12
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 13.5
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 13
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 13.5
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 14
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 14.5
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 15
    // }
}

theme.typography.body15 = {
    fontSize: "1rem",
    color: "black",
    fontWeight: 500,
    // [theme.breakpoints.up("xs")]: {
    //     fontSize: 12
    // },
    // [theme.breakpoints.up("sm")]: {
    //     fontSize: 13.5
    // },
    // [theme.breakpoints.up("md")]: {
    //     fontSize: 13
    // }
    // ,
    // [theme.breakpoints.up("lg")]: {
    //     fontSize: 13.5
    // },
    // [theme.breakpoints.up("xl")]: {
    //     fontSize: 14
    // },
    // [theme.breakpoints.up("xxl")]: {
    //     fontSize: 14.5
    // },
    // [theme.breakpoints.up("xxxl")]: {
    //     fontSize: 15
    // }
}

// theme.components.MuiCssBaseline.styleOverrides = `

// `

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