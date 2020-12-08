import createMuiTheme from "@material-ui/core/styles/createMuiTheme";


const Theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 1100,
            lg: 1920,
            xl: 2560
        }
    },
    palette: {
        background: {
            default: '#f4f4f4'
        },
        common: {
            black: '#0E2034',
            white: '#ffffff'
        },
        grey: {
            200: '#f4f4f4',
            300: '#E2E6EB',
            500: '#92989F',
            700: '#5C5D5D',
            900: '#0E2034'
        },
        primary: {
            main: '#C4AC65'
        },
        secondary: {
            main: '#FF0000'
        }
    },
    spacing: factor => `${10 * factor}px`,
    typography: {
        fontFamily: ['"Noto Sans TC"', '"sans-serif"'].join(','),
        htmlFontSize: 16,
        button: {
            textTransform: 'none',
            letterSpacing: 'normal'
        }
    },
    transitions: {
        easing: {
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)'
        },
        duration: {
            standard: 300,
            complex: 1200
        }
    },
    zIndex: {
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
    }
});
Theme.typography.h3 = {
    fontSize: '30px',
    lineHeight: 1,
    letterSpacing: "normal",
    [Theme.breakpoints.up('sm')]: {
        fontSize: '40px',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '48px',
    }
};
Theme.typography.h4 = {
    fontSize: '36px',
    lineHeight: 1,
    letterSpacing: "normal"
};
Theme.typography.h5 = {
    fontSize: Theme.typography.pxToRem(24),
    lineHeight: Theme.typography.pxToRem(35),
    letterSpacing: "normal",
    [Theme.breakpoints.up('sm')]: {}
};
Theme.typography.body1 = {
    fontFamily: ['"Noto Sans TC"', '"sans-serif"'].join(','),
    fontSize: Theme.typography.pxToRem(14),
    lineHeight: '26px',
    letterSpacing: Theme.typography.pxToRem(0.8),
};
Theme.typography.caption = {
    fontSize: Theme.typography.pxToRem(16),
    lineHeight: Theme.typography.pxToRem(26)
};
Theme.typography.body2 = {
    fontSize: Theme.typography.pxToRem(16),
    lineHeight: Theme.typography.pxToRem(26)
};
export default Theme;