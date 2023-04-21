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
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1920
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
    MuiCssBaseline: {
        styleOverrides: `
      `,
    }

})

theme.typography.allVariants = { fontFamily: "'Inter', sans-serif" }
theme.typography.fontFamily = { fontFamily: "'Inter', sans-serif" }
theme.typography.h128 = {
    fontSize: 128,
    color: "black",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
        fontSize: 40
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 58
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 74
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 92
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 110
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 128
    }
}

theme.typography.h96 = {
    fontSize: 96,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 51
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 60
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 69
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 78
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 87
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 96
    }
}

theme.typography.h72 = {
    fontSize: 72,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 44
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 50
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 56
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 62
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 68
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 72
    }
}

theme.typography.h68 = {
    fontSize: 68,
    color: "black",
    fontWeight: 717,
    [theme.breakpoints.down("xs")]: {
        fontSize: 32
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 38
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 44
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 50
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 56
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 62
    }
}

theme.typography.h64 = {
    fontSize: 64,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 34
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 40
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 46
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 52
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 58
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 64
    }
}

theme.typography.h55 = {
    fontSize: 55,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 30
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 35
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 40
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 45
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 50
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 55
    }
}

theme.typography.h45 = {
    fontSize: 45,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 25
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 29
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 33
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 37
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 41
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 45
    }
}

theme.typography.subtitle36 = {
    fontSize: 36,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 23.5
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 26
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 28.5
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 31
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 33.5
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 36
    }
}

theme.typography.body36 = {
    fontSize: 36,
    color: "black",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
        fontSize: 23.5
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 26
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 28.5
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 31
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 33.5
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 36
    }
}

theme.typography.subtitle32 = {
    fontSize: 32,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 22
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 24
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 26
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 28
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 30
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 32
    }
}

theme.typography.body32 = {
    fontSize: 32,
    color: "black",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
        fontSize: 22
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 24
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 26
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 28
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 30
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 32
    }
}

theme.typography.subtitle28 = {
    fontSize: 28,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 20.5
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 22
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 23.5
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 25
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 26.5
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 28
    }
}

theme.typography.body28 = {
    fontSize: 28,
    color: "black",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
        fontSize: 20.5
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 22
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 23.5
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 25
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 26.5
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 28
    }
}

theme.typography.subtitle24 = {
    fontSize: 24,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 19
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 20
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 21
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 22
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 23
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 24
    }
}

theme.typography.body24 = {
    fontSize: 24,
    color: "black",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
        fontSize: 19
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 20
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 21
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 22
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 23
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 24
    }
}

theme.typography.subtitle22 = {
    fontSize: 22,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 17
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 18
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 19
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 20
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 21
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 22
    }
}

theme.typography.body22 = {
    fontSize: 22,
    color: "black",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
        fontSize: 17
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 18
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 19
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 20
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 21
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 22
    }
}

theme.typography.subtitle18 = {
    fontSize: 18,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 15.5
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 16
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 16.5
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 17
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 17.5
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 18
    }
}

theme.typography.body18 = {
    fontSize: 18,
    color: "black",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
        fontSize: 15.5
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 16
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 16.5
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 17
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 17.5
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 18
    }
}

theme.typography.subtitle15 = {
    fontSize: 15,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
        fontSize: 12.5
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 13
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 13.5
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 14
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 14.5
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 15
    }
}

theme.typography.body15 = {
    fontSize: 18,
    color: "black",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
        fontSize: 12.5
    },
    [theme.breakpoints.up("xs")]: {
        fontSize: 13
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 13.5
    },
    [theme.breakpoints.up("md")]: {
        fontSize: 14
    }
    ,
    [theme.breakpoints.up("lg")]: {
        fontSize: 14.5
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: 15
    }
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